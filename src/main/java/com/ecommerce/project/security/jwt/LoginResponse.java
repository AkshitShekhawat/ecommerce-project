package com.ecommerce.project.security.jwt;

import java.util.List;

public class LoginResponse {
    private String jwtToken;

    private String username;
    private List<String> roles;

    //Below constructors
    public LoginResponse(String username, List<String> roles, String jwtToken) {
        this.username = username;
        this.roles = roles;
        this.jwtToken = jwtToken;
    }
    //Below getter and setters
    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}


//so what we have done is
        /*
        We sending a request with LoginRequest in the RequestBody
        */

