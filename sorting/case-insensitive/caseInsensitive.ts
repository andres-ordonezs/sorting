/** Sort array of strings in-place, case-insensitively. Returns array. */

function caseInsensitiveSort(arr: string[]): string[] {
  arr.sort((a: string, b: string) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0; // Add a default return value when a and b are equal
  });
  return arr;
}

export {caseInsensitiveSort};
