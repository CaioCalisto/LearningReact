export function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called -- target: ' + JSON.stringify(target) + 
      ', propertyKey: ' + propertyKey + 
      ',descriptor: ' + JSON.stringify(descriptor));
  };
}

export function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}
