import { h, render } from "preact"

const App = () => (<div>Run Preact!</div>)
const mountNode = document.getElementById('app') as HTMLElement

render(<App />, mountNode, mountNode.firstChild as Element)
