class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
)