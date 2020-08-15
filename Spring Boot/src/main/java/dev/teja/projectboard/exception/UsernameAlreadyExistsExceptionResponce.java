package dev.teja.projectboard.exception;


public class UsernameAlreadyExistsExceptionResponce {
    private String username;

    public UsernameAlreadyExistsExceptionResponce(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
