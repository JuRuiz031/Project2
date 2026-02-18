package com.calendario.poll_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PollOptionDTO {
    @JsonProperty("option_id") private Integer optionId;
    @JsonProperty("description") private String description;
    @JsonProperty("user_votes") private List<String> userVotes;
    @JsonProperty("guest_votes") private List<String> guestVotes;

    public PollOptionDTO() {}

    public PollOptionDTO(Integer optionId, String description, List<String> userVotes, List<String> guestVotes) {
        this.optionId = optionId;
        this.description = description;
        this.userVotes = userVotes;
        this.guestVotes = guestVotes;
    }

    public Integer getOptionId() { return optionId; }
    public void setOptionId(Integer optionId) { this.optionId = optionId; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getUserVotes() { return userVotes; }
    public void setUserVotes(List<String> userVotes) { this.userVotes = userVotes; }

    public List<String> getGuestVotes() { return guestVotes; }
    public void setGuestVotes(List<String> guestVotes) { this.guestVotes = guestVotes; }
}
