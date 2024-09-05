package com.restaurant.restaurant.jwtResponse;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterResponse {

    @JsonProperty("User Name")
    private String userName;

    @JsonProperty("Message") // Message : User Register !
    private String message;
}
