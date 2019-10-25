// arrow function with destructured arguments and defaults
const fn = ({ message: msg = "world" } = {}) => console.log(msg);

// invoke w/and without args
fn({ message: "hello, " });
fn();
