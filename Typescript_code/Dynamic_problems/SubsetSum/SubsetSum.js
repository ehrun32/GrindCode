const subset = [1, 2, 5, 7], target = 8;
function subsetSum(subset, target) {
    const m = subset.length;
    const n = target;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    for (let i = 0; i <= m; i++)
        dp[i][0] = true;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j];
            if (subset[i - 1] <= j) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - subset[i - 1]];
            }
        }
    }
    console.log(dp);
    return dp[m][n];
}
console.log(subsetSum(subset, target));
