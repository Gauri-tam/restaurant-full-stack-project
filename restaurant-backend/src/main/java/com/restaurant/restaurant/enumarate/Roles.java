package com.restaurant.restaurant.enumarate;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.restaurant.restaurant.enumarate.Permission.*;

@RequiredArgsConstructor
public enum Roles {
    SUPER_ADMIN(
            Set.of(
                    SUPER_ADMIN_CREATE,
                    SUPER_ADMIN_READ,
                    SUPER_ADMIN_UPDATE,
                    SUPER_ADMIN_DELETE,
                    RESTAURANT_CREATE,
                    RESTAURANT_READ,
                    RESTAURANT_UPDATE,
                    RESTAURANT_DELETE,
                    CUSTOMER_READ
            )
    ),
    RESTAURANT(
            Set.of(
                    RESTAURANT_CREATE,
                    RESTAURANT_READ,
                    RESTAURANT_UPDATE,
                    RESTAURANT_DELETE
            )
    ),
    CUSTOMER(
            Set.of(
                    CUSTOMER_READ
            )
    );

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthority() {
        var authority = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermissions()))
                .collect(Collectors.toList());
        authority.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authority;
    }
}
