package com.example.eventservice.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DTO representing user authorization info returned by the User Service.
 * The User Service must expose GET /internal/users/{username} returning this structure.
 */
public class UserAuthDTO {

    @JsonProperty("id")
    private String id;

    @JsonProperty("username")
    private String username;

    @JsonProperty("superuser")
    private boolean superuser;

    @JsonProperty("calendar_memberships")
    private List<CalendarMembershipDTO> calendarMemberships = new ArrayList<>();

    public UserAuthDTO() {}

    public boolean isAdminOfCalendar(String calendarId) {
        return calendarMemberships.stream()
                .anyMatch(m -> m.getCalendarId().equals(calendarId) && m.isAdmin());
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public boolean isSuperuser() { return superuser; }
    public void setSuperuser(boolean superuser) { this.superuser = superuser; }

    public List<CalendarMembershipDTO> getCalendarMemberships() { return calendarMemberships; }
    public void setCalendarMemberships(List<CalendarMembershipDTO> calendarMemberships) {
        this.calendarMemberships = calendarMemberships;
    }

    public static class CalendarMembershipDTO {

        @JsonProperty("calendar_id")
        private String calendarId;

        @JsonProperty("admin")
        private boolean admin;

        public CalendarMembershipDTO() {}

        public String getCalendarId() { return calendarId; }
        public void setCalendarId(String calendarId) { this.calendarId = calendarId; }

        public boolean isAdmin() { return admin; }
        public void setAdmin(boolean admin) { this.admin = admin; }
    }
}
