package com.calendario.calendar_service.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.calendario.calendar_service.client.UserServiceClient;
import com.calendario.calendar_service.dto.AddCalendarMembershipDTO;
import com.calendario.calendar_service.dto.CalendarCreateRequestDTO;
import com.calendario.calendar_service.dto.CalendarDeleteResponseDTO;
import com.calendario.calendar_service.dto.CalendarInviteAcceptResponseDTO;
import com.calendario.calendar_service.dto.CalendarInviteResponseDTO;
import com.calendario.calendar_service.dto.CalendarResponseDTO;
import com.calendario.calendar_service.dto.CalendarUpdateRequestDTO;
import com.calendario.calendar_service.dto.CalendarUpdateResponseDTO;
import com.calendario.calendar_service.dto.UserInternalDTO;
import com.calendario.calendar_service.exception.ForbiddenException;
import com.calendario.calendar_service.exception.ResourceNotFoundException;
import com.calendario.calendar_service.model.Calendar;
import com.calendario.calendar_service.repository.CalendarRepository;

@Service
public class CalendarService {

    private final CalendarRepository calendarRepository;
    private final UserServiceClient userServiceClient;

    @Value("${app.calendar.invite.base-url:http://localhost:4200/invite}")
    private String inviteBaseUrl;

    public CalendarService(CalendarRepository calendarRepository, UserServiceClient userServiceClient) {
        this.calendarRepository = calendarRepository;
        this.userServiceClient = userServiceClient;
    }

    public CalendarResponseDTO createCalendar(CalendarCreateRequestDTO dto, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        // Check for duplicate calendar name among user's calendars
        List<String> userCalendarIds = user.calendarIds().stream()
                .map(UserInternalDTO.CalendarMembership::calendarId).toList();
        List<Calendar> userCalendars = calendarRepository.findAllById(userCalendarIds);
        if (userCalendars.stream().anyMatch(cal -> cal.getName().equals(dto.name()))) {
            throw new ForbiddenException("You already have a calendar with the name: " + dto.name());
        }

        Calendar calendar = new Calendar();
        calendar.setName(dto.name());
        Calendar saved = calendarRepository.save(calendar);

        // Add membership in user-service
        userServiceClient.addCalendarMembership(user.id(),
                new AddCalendarMembershipDTO(saved.getId(), true));

        return new CalendarResponseDTO(saved.getId(), saved.getName());
    }

    public Calendar getCalendarById(String calendarId) {
        return calendarRepository.findById(calendarId)
                .orElseThrow(() -> new ResourceNotFoundException("Calendar not found: " + calendarId));
    }

    public CalendarUpdateResponseDTO updateCalendar(String calendarId, CalendarUpdateRequestDTO dto,
            String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        Calendar calendar = getCalendarById(calendarId);

        if (!user.isAdminOfCalendar(calendarId)) {
            throw new ForbiddenException("You do not have permission to update this calendar");
        }

        if (dto.name() != null && !dto.name().isBlank()) {
            calendar.setName(dto.name());
        }

        Calendar updated = calendarRepository.save(calendar);

        List<String> promotedAdmins = new ArrayList<>();
        if (dto.admins() != null && !dto.admins().isEmpty()) {
            for (String userId : dto.admins()) {
                // Promote user to admin in user-service
                userServiceClient.addCalendarMembership(userId,
                        new AddCalendarMembershipDTO(calendarId, true));
                promotedAdmins.add(userId);
            }
        }

        return new CalendarUpdateResponseDTO(updated.getId(), updated.getName(), promotedAdmins);
    }

    public CalendarDeleteResponseDTO deleteCalendar(String calendarId, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        getCalendarById(calendarId);

        if (!user.isAdminOfCalendar(calendarId)) {
            throw new ForbiddenException("You do not have permission to delete this calendar");
        }

        // Remove calendar membership from all members via user-service
        List<UserInternalDTO> members = userServiceClient.getMembersByCalendar(calendarId);
        for (UserInternalDTO member : members) {
            userServiceClient.removeCalendarMembership(member.id(),
                    new UserServiceClient.RemoveCalendarMembershipDTO(calendarId));
        }

        calendarRepository.deleteById(calendarId);

        return new CalendarDeleteResponseDTO(calendarId, true);
    }

    public CalendarInviteResponseDTO generateInviteLink(String calendarId, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        Calendar calendar = getCalendarById(calendarId);

        if (!user.isAdminOfCalendar(calendarId)) {
            throw new ForbiddenException("You do not have permission to generate invites for this calendar");
        }

        String inviteToken = UUID.randomUUID().toString();
        LocalDateTime expiresAt = LocalDateTime.now().plusDays(7);

        calendar.addInvite(new Calendar.Invite(inviteToken, expiresAt));
        calendarRepository.save(calendar);

        String inviteLink = inviteBaseUrl + "/" + calendarId + "/" + inviteToken;
        return new CalendarInviteResponseDTO(calendarId, inviteLink);
    }

    public CalendarInviteAcceptResponseDTO acceptInvite(String inviteToken, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        Calendar calendar = calendarRepository.findByInviteLink(inviteToken)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid or expired invite token"));

        Optional<Calendar.Invite> invite = calendar.getInvites().stream()
                .filter(inv -> inv.getLink().equals(inviteToken))
                .findFirst();

        if (invite.isEmpty()) {
            throw new ResourceNotFoundException("Invite not found");
        }
        if (LocalDateTime.now().isAfter(invite.get().getExpiresAt())) {
            throw new ResourceNotFoundException("Invite has expired");
        }

        if (!user.isMemberOfCalendar(calendar.getId())) {
            userServiceClient.addCalendarMembership(user.id(),
                    new AddCalendarMembershipDTO(calendar.getId(), false));
        }

        return new CalendarInviteAcceptResponseDTO(calendar.getId(), calendar.getName());
    }

    public boolean calendarExists(String calendarId) {
        return calendarRepository.existsById(calendarId);
    }
}
