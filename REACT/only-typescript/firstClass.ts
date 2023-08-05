import { retry, sleep } from "./Timer";

(async function () {
  const obj: MyObject = {
    someProp: 'taaa ddaaa'
  }

  print(obj, 'someProp')

  console.log('Finish')
})();

function print<T>(obj: T, prop: keyof T) {
  
  console.log(obj[prop])
}

interface MyObject {
  someProp: string
}

/*
Step to create simple typescript project with ts-node (TypeScript execution engine and REPL for Node.js)
yarn init --y
yarn add typescript ts-node -D
npx tsc --init
in tsconfig.ts, Add "Lib": ["DOM", "ESNext"]
yarn add @types/node -D
npx ts-node firstClass.ts
*/