import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor called')
  }

  componentDidMount() {
    console.log('componentDidMount called')
    this.TimeID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called')
    clearInterval(this.TimeID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render method called', date)
    console.log(date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="paragraph">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
