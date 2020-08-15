package dev.teja.projectboard.PayLoad;

public class JwtLoginSucessResponse {
    private Boolean sucess;
    private String token;

    public JwtLoginSucessResponse(Boolean sucess, String token) {
        this.sucess = sucess;
        this.token = token;
    }

    public Boolean getSucess() {
        return sucess;
    }

    public void setSucess(Boolean sucess) {
        this.sucess = sucess;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "JwtLoginSucessResponse{" +
                "sucess=" + sucess +
                ", token='" + token + '\'' +
                '}';
    }
}
