package org.equalpartition;

public class Solution {

    public boolean canPartition(int[] nums) {
        int sum = 0;
        for(int num : nums){
            sum += num;
        }
        if(sum % 2 != 0){
            return false;
        }
        sum = sum / 2;

        int arrLen = nums.length;
        boolean[][] dp = new boolean[arrLen+1][sum+1];
        for(int i = 0; i <= arrLen; i++){
            dp[i][0] = true;
        }

        for(int i = 1; i <= arrLen; i++){
            for(int j = 1; j <= sum; j++){

                if(j - nums[i-1] >= 0){
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
                }else{
                    dp[i][j] = dp[i-1][j];
                }

            }
        }
        return dp[arrLen][sum];
    }
}
