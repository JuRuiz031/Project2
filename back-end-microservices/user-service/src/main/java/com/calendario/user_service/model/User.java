package com.calendario.user_service.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    @Indexed(unique = true)
    private String username;

    @Indexed(unique = true)
    private String email;

    private Boolean isSuperuser;

    private List<CalendarMembership> calendarIds = new ArrayList<>();

    public static class CalendarMembership {
        private String calendarId;
        private Boolean isAdmin;

        public CalendarMembership() {}

        public CalendarMembership(String calendarId, Boolean isAdmin) {
            this.calendarId = calendarId;
            this.isAdmin = isAdmin;
        }

        public String getCalendarId() { return calendarId; }
        public void setCalendarId(String calendarId) { this.calendarId = calendarId; }

        public Boolean getIsAdmin() { return isAdmin; }
        public void setIsAdmin(Boolean isAdmin) { this.isAdmin = isAdmin; }
    }

    public User() {}

    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public Boolean getIsSuperuser() { return isSuperuser; }
    public void setIsSuperuser(Boolean isSuperuser) { this.isSuperuser = isSuperuser; }

    public List<CalendarMembership> getCalendarIds() { return calendarIds; }
    public void setCalendarIds(List<CalendarMembership> calendarIds) { this.calendarIds = calendarIds; }

    public void addCalendarMembership(String calendarId, Boolean isAdmin) {
        boolean alreadyExists = this.calendarIds.stream()
                .anyMatch(cm -> cm.getCalendarId().equals(calendarId));
        if (!alreadyExists) {
            this.calendarIds.add(new CalendarMembership(calendarId, isAdmin));
        }
    }

    public boolean isAdminOfCalendar(String calendarId) {
        return this.calendarIds.stream()
                .filter(cm -> cm.getCalendarId().equals(calendarId))
                .findFirst()
                .map(CalendarMembership::getIsAdmin)
                .orElse(false);
    }

    public boolean isMemberOfCalendar(String calendarId) {
        return this.calendarIds.stream()
                .anyMatch(cm -> cm.getCalendarId().equals(calendarId));
    }

    public void removeCalendarMembership(String calendarId) {
        this.calendarIds.removeIf(cm -> cm.getCalendarId().equals(calendarId));
    }

    public boolean isSuperuser() {
        return this.isSuperuser != null && this.isSuperuser;
    }
}
