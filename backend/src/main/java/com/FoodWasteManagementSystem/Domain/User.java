package com.FoodWasteManagementSystem.Domain;

import com.FoodWasteManagementSystem.Enums.Role;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

// User.java
@Entity
@Table(name = "users_for_issue")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private String fullName;
    private String address;
    private String passwordResetToken;
    private Instant passwordResetTokenExpiration;
    @Enumerated(EnumType.STRING)
    private Role role;
}

