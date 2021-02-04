import React from 'react'

class FormDemo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'reisen',
            age: 70,
            flag: true
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <label htmlFor="inputName">名字</label>
                <input id="inputName" value={this.state.name} onChange={this.onInputChange}></input>
                <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange}></input>
            </div>
        )
    }
    onInputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onCheckboxChange = (e) => {
        console.log(e.target.checked)
        this.setState({
            flag: !this.state.flag
        })
    }
}

export default FormDemo