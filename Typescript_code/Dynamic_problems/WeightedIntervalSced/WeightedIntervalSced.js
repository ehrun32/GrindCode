const startTime = [1, 2, 3, 4, 6], endTime = [3, 5, 10, 6, 9], profit = [20, 20, 100, 70, 60];
function jobScheduling(startTime, endTime, profit) {
    let jobs = startTime.map((start, i) => [start, endTime[i], profit[i]]);
    jobs.sort((a, b) => a[1] - b[1]);
    console.log(jobs);
    const dp = new Array(jobs.length).fill(0);
    dp[0] = jobs[0][2];
    //   compute pj
    const pj = new Array(jobs.length)
        .fill(0)
        .map((_, j) => binarySearch(jobs, j));
    console.log(pj);
    for (let j = 1; j < jobs.length; j++) {
        // Include current job: jobs[j].value + OPT[p[j]]
        const include = jobs[j][2] + (pj[j] !== -1 ? dp[pj[j]] : 0);
        // Exclude current job: OPT[j-1]
        const exclude = dp[j - 1];
        // Take the maximum of including or excluding the job
        dp[j] = Math.max(include, exclude);
    }
    console.log(dp);
    return dp[jobs.length - 1];
}
function binarySearch(jobs, index) {
    let start = 0, end = index - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (jobs[mid][1] <= jobs[index][0]) {
            if (jobs[mid + 1][1] <= jobs[index][0]) {
                start = mid + 1;
            }
            else {
                return mid;
            }
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(jobScheduling(startTime, endTime, profit));
