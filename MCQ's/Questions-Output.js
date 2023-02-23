/* Questions */

// Ques 1

// let a = true;

// setTimeout(() => {
//   a = false;
// }, 2000);

/* So this runs until , a is true 
setInterval(() => {
  if (a) {
    console.log("hello");
  }
}, 200);
*/

/*So this runs infinite times , bcoz callback in setTimeout is never executed and it goes into starvation while sitting in callback queue.
while (a) {
  console.log("hello");
}
*/

// So javascript runs on the main thread only and callback in setTimeout waits in queue for its turn to run in main thread but since the loop is there , main thread never gets free.

// Ques 2
// In above I want to clear the setInterval after 2000 milliseconds

let id = setInterval(() => {
  console.log("Hello");
}, 200);

setTimeout(() => {
  clearInterval(id);
}, 2000);
