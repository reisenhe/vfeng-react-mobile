import React from 'react'
// import FormDemo from './pages/FormDemo'
import TodoListDemo from './pages/SCUdemo';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'reisen',
      list: [
        {
          id: 1,
          title: '标题'
        }
      ]
    }
    // this.onButtonClick = this.onButtonClick.bind(this)
  }
  onButtonClick = () => {
    this.setState({
      name: 'twei'
    })
  }
  render() {
    return (
      <div>
          hello, react!
          <p>{this.state.name}</p>
        {/* <FormDemo /> */}
        <TodoListDemo></TodoListDemo>
      </div>
    )
  }
}

export default App