package org.equalpartition;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class SolutionTest {

    @Test
    void canPartition() {
        Solution sol = new Solution();
        int[] nums = {1, 5, 11, 5};
        boolean result = sol.canPartition(nums);
        assertTrue(result);
    }
}