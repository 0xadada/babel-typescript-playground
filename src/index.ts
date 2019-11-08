// TypeScript

// destructured arguments and defaults
interface Message {
  message?: string;
}
const fc = function({ message: msg = "world" }: Message = {}): String {
  console.log(msg);
  return msg;
};

// invoke w/and without args
fc({ message: "hello, " });
fc();
