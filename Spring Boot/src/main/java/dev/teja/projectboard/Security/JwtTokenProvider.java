package dev.teja.projectboard.Security;
import dev.teja.projectboard.domain.User;
import io.jsonwebtoken.*;
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
        Claims.put("fullName",user.getFullName());
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
    public Boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
            return true;
        }catch (SignatureException ex){
            System.out.println("Invalid JWT Signature");
        }catch (MalformedJwtException ex){
            System.out.println("Invalid JWT Token");
        }catch (ExpiredJwtException ex){
            System.out.println("Token Provided is Expired");
        }catch (UnsupportedJwtException ex){
            System.out.println("Unsupported JWT token");
        }catch (IllegalArgumentException ex){
            System.out.println("JWT Claims String is empty");
        }
        return false;
    }

    //Extracting user Id from the Token
    public Long getUserIdFromJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
        String id = (String)claims.get("id");
        return Long.parseLong(id);
    }
}
