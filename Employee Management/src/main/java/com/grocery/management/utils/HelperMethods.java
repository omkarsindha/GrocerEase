package com.grocery.management.utils;

import java.security.SecureRandom;

public class HelperMethods {
        public static String randomPasswordGenerator() {
            String CHARACTERS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            SecureRandom random = new SecureRandom();
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < 8; i++) {
                stringBuilder.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
            }
            return stringBuilder.toString();
        }
    }
