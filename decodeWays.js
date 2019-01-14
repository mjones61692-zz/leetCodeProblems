/*

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

*/

function decodeWays(string) {
  let DP = [];
  for (let i = 0; i < string.length; i++) {
    DP[i] = 0;
    if (Number(string[i]) > 0) {
      DP[i] += DP[i - 1] ? DP[i - 1] : 1;
    }
    if (Number(string[i - 1] + string[i]) > 0 && Number(string[i - 1] + string[i]) <= 26) {
      DP[i] += DP[i - 2] ? DP[i - 2] : 1;
    }
  }
  return DP[DP.length - 1];
}

console.log(decodeWays('1111'));
