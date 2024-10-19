const subset = [3, 5, 9, 4, 8],
  target = 16;

function subsetSum(subset: number[], target: number): boolean {
  const m = subset.length;
  const n = target;

  const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(false)
  );

  for (let i = 0; i <= m; i++) dp[i][0] = true;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (subset[i - 1] <= j) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - subset[i - 1]];
      }
    }
  }
  return dp[m][n];
}

console.log(subsetSum(subset, target));
