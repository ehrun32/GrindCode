const coin = [2], total = 11;
function coinChange(coin, total) {
    const dp = new Array(total + 1).fill(total + 1);
    dp[0] = 0; //Base case
    console.log(dp);
    for (let i = 1; i <= total; i++) {
        //total
        for (let j = 0; j < coin.length; j++) {
            //coin
            if (coin[j] <= i) {
                dp[i] = Math.min(1 + dp[i - coin[j]], dp[i]);
            }
        }
    }
    console.log(dp);
    return dp[total];
}
console.log(coinChange(coin, total));
