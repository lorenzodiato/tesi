class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contatore: 0
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.contatore}</h1>
        <button 
          onClick={() => this.setState({ contatore: this.state.contatore + 1 })}
        >
          Cliccami
        </button>
      </div>
    )
  }
}

const ExampleWithHook = props => {
  //hooks
  const [contatore, setContatore] = useState(0)
  
  return (
    <div>
      <h1>{state.contatore}</h1>
      <button 
        onClick={() => setContatore(prevValue => prevValue + 1 })}
      >
        Cliccami
      </button>
    </div>
  )
}
