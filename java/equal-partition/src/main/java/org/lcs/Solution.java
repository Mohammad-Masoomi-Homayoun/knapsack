package org.lcs;

public class Solution {
    public int longestCommonSubsequence(String strA, String strB) {
        int lenA = strA.length();
        int lenB = strB.length();

        int[][] dp = new int[lenA+1][lenB+1];

        for(int i = 1; i <= lenA; i++){
            for(int j = 1; j <= lenB; j++){

                if(strA.charAt(i-1) == strB.charAt(j-1)){
                    dp[i][j] = 1 + dp[i-1][j-1];
                }else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[lenA][lenB];
    }
}
