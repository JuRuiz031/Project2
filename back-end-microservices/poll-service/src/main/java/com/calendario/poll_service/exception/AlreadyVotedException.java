package com.calendario.poll_service.exception;

public class AlreadyVotedException extends RuntimeException {
    public AlreadyVotedException(String message) { super(message); }
}
