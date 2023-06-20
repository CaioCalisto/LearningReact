(function () {
  const user = 'Caio'
  const location = 'Portugal'
  const whatever = undefined
  const whatever2 = ''

  const msg = {
    to: user,
    text: `I am from  ${location}`
  }

  // console.log(msg.text)
  // console.log(msg.text + ' - more data')

  //console.log('New project just to study Typescript')

  if (whatever === undefined || whatever === '') {
    console.log('IS EMPTY')
  }
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