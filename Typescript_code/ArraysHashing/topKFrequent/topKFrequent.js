const topKFrequentNums = [1, 1, 1, 2, 2, 3], topKFrequentK = 2;
// Output: [1,2]
function topKFrequent(nums, k) {
    const count = {};
    const frequentValues = [];
    nums.map((num) => {
        count[num] = (count[num] || 0) + 1;
    });
    //   Object.entries(count).map(([key, value]) => {
    //     if ((value as number) > k) {
    //       frequentValues.push(Number(key));
    //     }
    //   });
    return Object.keys(count)
        .sort((a, b) => count[b] - count[a])
        .slice(0, k)
        .map(Number);
}
console.log(topKFrequent(topKFrequentNums, topKFrequentK));
