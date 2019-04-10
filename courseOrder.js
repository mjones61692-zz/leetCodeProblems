function courseOrder(courses) {
  let courseList = Object.keys(courses);
  let length = courseList.length;
  let taken = {};
  let order = [];
  while (order.length < length) {
    courseList.forEach((course) => {
      if (taken[course] === undefined) {
        let ready = true;
        let prereqs = courses[course];
        for (let i = 0; i < prereqs.length; i++) {
          if (taken[prereqs[i]] === undefined) {
            ready = false;
            break;
          }
        }
        if (ready) {
          taken[course] = true;
          order.push(course);
        }
      }
    });
  }
  return order;
}

let courses = {
  CSC300: ['CSC100', 'CSC200'],
  CSC200: ['CSC100'],
  CSC100: [],
};
console.log(courseOrder(courses)); // ['CSC100', 'CSC200', 'CSC300']
