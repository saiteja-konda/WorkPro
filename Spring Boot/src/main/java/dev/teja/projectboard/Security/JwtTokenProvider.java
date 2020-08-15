package dev.teja.projectboard.Security;
import dev.teja.projectboard.domain.User;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static dev.teja.projectboard.Security.SecurityConstants.EXPIRATION_TIME;
import static dev.teja.projectboard.Security.SecurityConstants.SECRET;
@Component
public class JwtTokenProvider {

    //Generation of the Token
    public String genrateToken(Authentication authentication){
        User user = (User)authentication.getPrincipal();
        Date now = new Date(System.currentTimeMillis());
        Date expiryDate = new Date(now.getTime()+EXPIRATION_TIME);

        String userId = Long.toString(user.getId());
        Map<String, Object> Claims = new HashMap<>();
        Claims.put("id",(Long.toString(user.getId())));
        Claims.put("username",user.getUsername());
        Claims.put("password",user.getPassword());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(Claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
    //Validation of the Token

    //Extracting user Id from the Token

}
