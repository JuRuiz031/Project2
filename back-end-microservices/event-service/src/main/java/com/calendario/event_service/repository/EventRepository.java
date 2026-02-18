package com.calendario.event_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.calendario.event_service.model.Event;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {

    List<Event> findByIdIn(List<String> eventIds);

    List<Event> findByCalendarId(String calendarId);

    List<Event> findByCalendarIdIn(List<String> calendarIds);

    List<Event> findByTagsIn(List<String> tags);

    Optional<Event> findByInviteLinksToken(String token);
}
