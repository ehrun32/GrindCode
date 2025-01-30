// given an array of integer return the indices of the 2 numbers such they add to target
// sort it first and then get the mid
//  target - num and check if its equal to mid
const numsTwosum = [3, 3], targetTwoSum = 6;
function twoSum(nums, target) {
    const originalNumbers = [...nums];
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    console.log(left);
    console.log(right);
    while (left < right) {
        let currentValue = nums[left] + nums[right];
        console.log({ currentValue });
        if (currentValue == target) {
            return [
                originalNumbers.indexOf(nums[left]),
                originalNumbers.lastIndexOf(nums[right]),
            ];
        }
        else if (currentValue < target) {
            left++;
        }
        else {
            right--;
        }
    }
}
console.log(twoSum(numsTwosum, targetTwoSum));
