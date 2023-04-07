import { format, getFormat } from "./perfDecorator3";

class Greeter {
  @format("Hello, %s")
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    let formatString = getFormat(this, "name");
    return formatString.replace("%s", this.name);
  }
}

(function () {
  const greeter = new Greeter('Caio Cesar Calisto')

  console.log(`Got a new user ${JSON.stringify(greeter.greet())}`);
})();