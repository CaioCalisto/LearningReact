(function () {
  const user = 'Caio'
  const location = 'Portugal'

  const msg = {
    to: user,
    text: `I am from  ${location}`
  }

  console.log(msg.text)

  console.log('New project just to study Typescript')
})();

/*
Step to create simple typescript project with ts-node (TypeScript execution engine and REPL for Node.js)
yarn init --y
yarn add typescript ts-node -D
npx tsc --init
in tsconfig.ts, Add "Lib": ["DOM", "ESNext"]
yarn add @types/node -D
npx ts-node firstClass.ts
*/