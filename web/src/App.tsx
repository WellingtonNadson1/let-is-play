interface ITitle {
  title: string
}

function App(props: ITitle) {
  
  return (
    <h1>{props.title}</h1>
  )
}

export default App
