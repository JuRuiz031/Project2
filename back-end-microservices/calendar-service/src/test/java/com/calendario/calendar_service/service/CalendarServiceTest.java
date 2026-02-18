package com.calendario.calendar_service.service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.calendario.calendar_service.client.UserServiceClient;
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

@ExtendWith(MockitoExtension.class)
class CalendarServiceTest {

    @Mock
    private CalendarRepository calendarRepository;

    @Mock
    private UserServiceClient userServiceClient;

    @InjectMocks
    private CalendarService calendarService;

    private UserInternalDTO adminUser;
    private UserInternalDTO regularUser;
    private Calendar testCalendar;

    @BeforeEach
    void setUp() {
        testCalendar = new Calendar();
        testCalendar.setId("cal-1");
        testCalendar.setName("Test Calendar");

        adminUser = new UserInternalDTO(
            "user-1", "admin", false,
            List.of(new UserInternalDTO.CalendarMembership("cal-1", true))
        );

        regularUser = new UserInternalDTO(
            "user-2", "regular", false,
            List.of(new UserInternalDTO.CalendarMembership("cal-1", false))
        );
    }

    // ── createCalendar ─────────────────────────────────────────

    @Test
    void createCalendar_Success() {
        CalendarCreateRequestDTO dto = new CalendarCreateRequestDTO("New Calendar");

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findAllById(any())).thenReturn(Collections.emptyList());
        when(calendarRepository.save(any(Calendar.class))).thenReturn(testCalendar);

        CalendarResponseDTO result = calendarService.createCalendar(dto, "admin");

        assertNotNull(result);
        assertEquals("cal-1", result.id());
        verify(calendarRepository, times(1)).save(any(Calendar.class));
        verify(userServiceClient, times(1)).addCalendarMembership(eq("user-1"), any());
    }

    @Test
    void createCalendar_DuplicateName_ThrowsForbidden() {
        CalendarCreateRequestDTO dto = new CalendarCreateRequestDTO("Test Calendar");

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findAllById(any())).thenReturn(List.of(testCalendar));

        assertThrows(ForbiddenException.class, () ->
            calendarService.createCalendar(dto, "admin")
        );
        verify(calendarRepository, never()).save(any(Calendar.class));
    }

    // ── updateCalendar ─────────────────────────────────────────

    @Test
    void updateCalendar_Success() {
        CalendarUpdateRequestDTO dto = new CalendarUpdateRequestDTO("Updated Name", null);

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findById("cal-1")).thenReturn(Optional.of(testCalendar));
        when(calendarRepository.save(any(Calendar.class))).thenReturn(testCalendar);

        CalendarUpdateResponseDTO result = calendarService.updateCalendar("cal-1", dto, "admin");

        assertNotNull(result);
        verify(calendarRepository, times(1)).save(any(Calendar.class));
    }

    @Test
    void updateCalendar_NotAdmin_ThrowsForbidden() {
        CalendarUpdateRequestDTO dto = new CalendarUpdateRequestDTO("New Name", null);

        when(userServiceClient.getUserByUsername("regular")).thenReturn(regularUser);
        when(calendarRepository.findById("cal-1")).thenReturn(Optional.of(testCalendar));

        assertThrows(ForbiddenException.class, () ->
            calendarService.updateCalendar("cal-1", dto, "regular")
        );
        verify(calendarRepository, never()).save(any(Calendar.class));
    }

    @Test
    void updateCalendar_CalendarNotFound_ThrowsException() {
        CalendarUpdateRequestDTO dto = new CalendarUpdateRequestDTO("New Name", null);

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findById("nonexistent")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () ->
            calendarService.updateCalendar("nonexistent", dto, "admin")
        );
    }

    // ── deleteCalendar ─────────────────────────────────────────

    @Test
    void deleteCalendar_Success() {
        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findById("cal-1")).thenReturn(Optional.of(testCalendar));
        when(userServiceClient.getMembersByCalendar("cal-1")).thenReturn(List.of(adminUser));

        CalendarDeleteResponseDTO result = calendarService.deleteCalendar("cal-1", "admin");

        assertTrue(result.deleted());
        assertEquals("cal-1", result.id());
        verify(calendarRepository, times(1)).deleteById("cal-1");
        verify(userServiceClient, times(1)).removeCalendarMembership(eq("user-1"), any());
    }

    @Test
    void deleteCalendar_NotAdmin_ThrowsForbidden() {
        when(userServiceClient.getUserByUsername("regular")).thenReturn(regularUser);
        when(calendarRepository.findById("cal-1")).thenReturn(Optional.of(testCalendar));

        assertThrows(ForbiddenException.class, () ->
            calendarService.deleteCalendar("cal-1", "regular")
        );
        verify(calendarRepository, never()).deleteById(anyString());
    }

    // ── generateInviteLink ─────────────────────────────────────

    @Test
    void generateInviteLink_Success() {
        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findById("cal-1")).thenReturn(Optional.of(testCalendar));
        when(calendarRepository.save(any(Calendar.class))).thenReturn(testCalendar);

        CalendarInviteResponseDTO result = calendarService.generateInviteLink("cal-1", "admin");

        assertNotNull(result);
        assertEquals("cal-1", result.calendarId());
        assertNotNull(result.inviteLink());
        verify(calendarRepository, times(1)).save(any(Calendar.class));
    }

    @Test
    void generateInviteLink_NotAdmin_ThrowsForbidden() {
        when(userServiceClient.getUserByUsername("regular")).thenReturn(regularUser);
        when(calendarRepository.findById("cal-1")).thenReturn(Optional.of(testCalendar));

        assertThrows(ForbiddenException.class, () ->
            calendarService.generateInviteLink("cal-1", "regular")
        );
        verify(calendarRepository, never()).save(any(Calendar.class));
    }

    // ── acceptInvite ────────────────────────────────────────────

    @Test
    void acceptInvite_Success() {
        String token = "valid-token";
        testCalendar.addInvite(new Calendar.Invite(token, LocalDateTime.now().plusDays(1)));

        UserInternalDTO newUser = new UserInternalDTO(
            "user-3", "newuser", false, Collections.emptyList()
        );

        when(userServiceClient.getUserByUsername("newuser")).thenReturn(newUser);
        when(calendarRepository.findByInviteLink(token)).thenReturn(Optional.of(testCalendar));

        CalendarInviteAcceptResponseDTO result = calendarService.acceptInvite(token, "newuser");

        assertNotNull(result);
        assertEquals("cal-1", result.calendarId());
        verify(userServiceClient, times(1)).addCalendarMembership(eq("user-3"), any());
    }

    @Test
    void acceptInvite_ExpiredToken_ThrowsException() {
        String token = "expired-token";
        testCalendar.addInvite(new Calendar.Invite(token, LocalDateTime.now().minusDays(1)));

        when(userServiceClient.getUserByUsername("newuser")).thenReturn(
            new UserInternalDTO("user-3", "newuser", false, Collections.emptyList())
        );
        when(calendarRepository.findByInviteLink(token)).thenReturn(Optional.of(testCalendar));

        assertThrows(ResourceNotFoundException.class, () ->
            calendarService.acceptInvite(token, "newuser")
        );
    }

    @Test
    void acceptInvite_InvalidToken_ThrowsException() {
        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarRepository.findByInviteLink("bad-token")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () ->
            calendarService.acceptInvite("bad-token", "admin")
        );
    }

    // ── calendarExists ─────────────────────────────────────────

    @Test
    void calendarExists_True() {
        when(calendarRepository.existsById("cal-1")).thenReturn(true);
        assertTrue(calendarService.calendarExists("cal-1"));
    }

    @Test
    void calendarExists_False() {
        when(calendarRepository.existsById("nonexistent")).thenReturn(false);
        assertFalse(calendarService.calendarExists("nonexistent"));
    }
}
