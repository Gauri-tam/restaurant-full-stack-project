package com.restaurant.restaurant.jwtRequest;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginRequest {

    @NotEmpty(message = "This Filed is Not to be Empty")
    @Email(message = "Invalid Email!")
    private String email;

    @Size(min = 8, message = "Minimum 8 Character are required! ")
    @NotEmpty(message = "This Filed is Not to be Empty")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$", message = "Invalid Password! ")
    private String password;
}
