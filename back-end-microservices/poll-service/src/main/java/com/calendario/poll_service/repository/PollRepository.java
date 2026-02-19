package com.calendario.poll_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.calendario.poll_service.model.Poll;

@Repository
public interface PollRepository extends MongoRepository<Poll, String> {
    List<Poll> findByCalendarId(String calendarId);
    List<Poll> findByCalendarIdIn(List<String> calendarIds);
    List<Poll> findByIdIn(List<String> ids);
    List<Poll> findByTagsIn(List<String> tags);
    Optional<Poll> findByInviteLinksToken(String token);
}
