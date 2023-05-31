declare module '*.png'
declare module '*.jpeg'
declare module '*.svg' {
  const content: string
  export default content
}
