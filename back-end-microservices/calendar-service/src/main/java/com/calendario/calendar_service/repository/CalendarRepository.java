package com.calendario.calendar_service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.calendario.calendar_service.model.Calendar;

@Repository
public interface CalendarRepository extends MongoRepository<Calendar, String> {

    @Query("{'invites.link': ?0}")
    Optional<Calendar> findByInviteLink(String inviteToken);

    List<Calendar> findAllById(Iterable<String> ids);
}
