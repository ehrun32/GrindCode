const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// hash table??
function groupAnagrams(strs) {
    const res = {};
    strs.map((s) => {
        const count = new Array(26).fill(0);
        for (let char of s) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        const key = count.join(",");
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
    });
    return Object.values(res);
}
console.log(groupAnagrams(strs));
