/*

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

*/

const jobScheduler = (f, n) => {
  // setTimeout(f, n);
  let time0 = new Date().getTime();
  let time1 = new Date().getTime();
  while ((time1 - time0) < n) {
    time1 = new Date().getTime();
  }
  f();
};

jobScheduler(() => {
  console.log('function ran!');
}, 2000);
