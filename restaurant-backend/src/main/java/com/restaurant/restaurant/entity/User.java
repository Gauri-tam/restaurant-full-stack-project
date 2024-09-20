package com.restaurant.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.restaurant.restaurant.enumarate.Roles;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
// customer // restaurant owner/manager
public class User implements UserDetails {

    @Id
    @NotNull(message = "User ID must not be null")
    private Integer userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;

    @Enumerated(EnumType.STRING)
    private Roles roles;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Token> token;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
    private List<Restaurant> restaurants;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.getAuthority();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
