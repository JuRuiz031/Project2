package com.calendario.auth_service.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.calendario.auth_service.model.Credential;

@Repository
public interface CredentialRepository extends MongoRepository<Credential, String>{
    Optional<Credential> findByUsername(String username);
    Optional<Credential> findByEmail(String email);
    Optional<Credential> findByUserId(String userId);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    void deleteByUserId(String userId);
    

}
