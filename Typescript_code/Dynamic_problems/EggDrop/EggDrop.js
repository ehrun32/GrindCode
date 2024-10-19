// You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.
// Input: k = 1, n = 2
// Output: 2
function superEggDrop(k, n) {
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
    // Initialize base cases
    for (let j = 0; j <= n; j++)
        dp[1][j] = j; // when only one egg exist
    for (let i = 2; i <= k; i++) {
        // i represents the number of eggs
        console.log({ i });
        for (let j = 1; j <= n; j++) {
            // j represents the number of floors
            console.log({ j });
            dp[i][j] = Infinity;
            console.log({ dp });
            for (let x = 1; x <= j; x++) {
                console.log({ x });
                const worst = 1 + Math.max(dp[i - 1][x - 1], dp[i][j - x]);
                console.log({ worst });
                dp[i][j] = Math.min(dp[i][j], worst);
            }
        }
    }
    console.log(dp);
    return dp[k][n];
}
console.log(superEggDrop(3, 4));
