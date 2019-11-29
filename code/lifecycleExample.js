class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      propTemp: 1
    }
  }
 
  componentDidMount() {
    this.timerID = setInterval( 
      () => this.tick(),
      1000
    )
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
 
  tick() {
    this.setState({
      date: new Date()
    })
  }
 
  render() {
    return (
      <div>
        <h1>Orologio</h1>
        <h2>sono le {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}