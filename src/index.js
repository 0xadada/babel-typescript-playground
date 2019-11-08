// ES2017

// arrow function with destructured arguments and defaults
const fc = ({ message: msg = "world" } = {}) => {
  console.log(msg);
  return msg;
};

// invoke w/and without args
fc({ message: "hello, " });
fc();
