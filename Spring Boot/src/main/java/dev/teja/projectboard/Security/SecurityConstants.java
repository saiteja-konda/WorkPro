package dev.teja.projectboard.Security;

public class SecurityConstants {

    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String H2_URL = "h2-console/**";
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SWAGGER_UI = "/swagger-ui/**";
    public static final String SWAGGER_UI_V3 ="/v3/api-docs/**";
    public static final long EXPIRATION_TIME =  30_000; //10 DAYS 864_000_000;
}

