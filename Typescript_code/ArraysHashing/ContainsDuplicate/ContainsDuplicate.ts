// given an integer array
// check if there is a duplicate
// pseudo
// make a hash set?? to keep track of the number of occurrence

const nums = [1, 2, 3, 1];

function containsDuplicate(nums: number[]): boolean {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

console.log(containsDuplicate(nums));
