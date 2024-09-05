package com.restaurant.restaurant.enumarate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public enum Permission {

    SUPER_ADMIN_CREATE("create"),

    SUPER_ADMIN_READ("read"),

    SUPER_ADMIN_UPDATE("update"),

    SUPER_ADMIN_DELETE("delete"),

    RESTAURANT_CREATE("create"),

    RESTAURANT_READ("read"),

    RESTAURANT_UPDATE("update"),

    RESTAURANT_DELETE("delete"),

    CUSTOMER_READ("read");

    @Getter
    private final String permissions;
}
