import * as _ from "lodash";

function greeter(name: string) {
  return "Hello, " + name;
}

alert(greeter(_.join(["Hello", "webpack"], " ")));
