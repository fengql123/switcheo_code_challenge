var sum_to_n_a = function (n) {
  // your code here
  //loop method
  let ans = 0;
  for (var i = 1; i < n + 1; i++) {
    ans += i;
  }
  return ans;
};

var sum_to_n_b = function (n) {
  // your code here
  //array method
  let arr = [];
  for (var i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b, 0);
};

var sum_to_n_c = function (n) {
  // your code here
  //recursion method
  if (n == 1) {
    return 1;
  }
  return sum_to_n_c(n - 1) + n;
};
