import { performance } from "perf_hooks"

export function logTiming<T extends { new (...args: any[]): {}}>(constructor: T){
  return class extends constructor{
    __timings= []
  }
}

interface ThisWithTimings {
  __timings: unknown[]
}

export function timing(){
  return function(
    target: any, 
    propertykey: string, 
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value
    descriptor.value = async function(...args: any[]){
      const start = performance.now()
      const out = await value.apply(this, args)
      const end = performance.now()

      if ((this as ThisWithTimings).__timings){
        (this as ThisWithTimings).__timings.push({
          method: propertykey,
          time: end - start
        })
      } else {
        console.log('Delta time: ' + (end - start))
      }

      return out
    }
  }
}