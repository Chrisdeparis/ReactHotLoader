import React from 'react'

export default class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.state =  {
      counter:0
    }
  }

  render () {
    return <div>Salut {this.props.name}<br/>
      Compteur : {this.state.counter}<br/>
      {this.state.counter >= 5 && <div>Bravo vous avez dépassé 5</div>}
      <button onClick={this.increment}>incrémenter</button>

    </div>
  }

  increment(){
    this.setState({counter: this.state.counter + 1})
  }
}
