/**
 * Yes, I know this is supposed to be part 0 but I really just wanted to work on the calculator
 */

const greeting = "Hello";
const directObject = "JavaScript";
const message = `${greeting}, ${directObject}!`;

function myWeirdFunc(msg) {
  console.log(msg);
}

setTimeout(() => {
	myWeirdFunc(message)
}, 500);
