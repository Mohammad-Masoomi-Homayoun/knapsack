package org.lcs;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SolutionTest {

    @Test
    void longestCommonSubsequence() {
        Solution sol = new Solution();
        String text1 = "abcde";
        String text2 = "ace";
        int result = sol.longestCommonSubsequence(text1, text2);
        assertEquals(3, result);
    }
}