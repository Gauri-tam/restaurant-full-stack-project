package com.restaurant.restaurant.jwtRequest;
import com.restaurant.restaurant.enumarate.Roles;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequest {

    @NotNull(message = "First Name must not be Empty!")
    private  Integer userId;

    @Size(min = 3, max = 20, message = "Characters Between 3 to 20")
    @NotEmpty(message = "First Name must not be Empty!")
    private String firstName;

    @Size(min = 3, max = 20, message = "Characters Between 3 to 20")
    @NotEmpty(message = "Last Name must not be Empty!")
    private String LastName;

    /** for more pattern and restrictions for email
     * you can refer https://www.baeldung.com/java-email-validation-regex
     * "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$"
     * */
    @NotEmpty(message = "email must not be Empty!")
    @Email(message = "Invalid Email!")
    private String email;

    @Size(min = 8, message = "Minimum 8 Character are required! ")
    @NotEmpty(message = "This Filed is Not to be Empty")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$", message = "Invalid Password!")
    private String password;

    @NotEmpty(message = "This Filed is Not to be Empty")
    @Pattern(regexp = "^((\\+*)((0[ -]*)*|((91 )*))((\\d{12})+|(\\d{10})+))|\\d{5}([- ]*)\\d{6}$", message = "Invalid Phone Number!") // only indian number accept
    private String phone;

    private Roles roles;
}
