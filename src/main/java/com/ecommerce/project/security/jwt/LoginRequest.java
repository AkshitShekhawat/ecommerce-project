package com.ecommerce.project.security.jwt;

public class LoginRequest {
    private String username;

    private String password;

    //We can even use of Lombok as well
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
