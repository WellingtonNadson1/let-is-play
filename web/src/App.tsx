interface ITitle {
  title: string
}

function App(props: ITitle) {
  
  return (
    <div className="">
      <h1 className="text-white">{props.title}</h1>
    </div>
  )
}

export default App
