import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Button } from 'antd'

class List extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const { list } = this.props
        return (
            <ul>
                {list.map((item, index) => {
                    return <li key={item.id}>
                        <span>{item.title}</span>
                    </li>  
                })}
            </ul>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (_.isEqual(nextProps.list, this.props.list)) {
            return false
        }
        return true
    }
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            num: 0
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.onInputChange}></input>
                <Button type="primary" onClick={this.onSubmit}>提交按钮</Button>
                <p>{this.state.num}</p>
                {
                    (() => {
                        return React.createElement('div', {
                            className: 'this-class-haha'
                        }, '哈哈')
                    })()
                }
            </div>
        )
    }
    onInputChange = (e) => {
        this.setState({
            title: e.target.value
        })
    } 
    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)
        this.setState({
            title: ''
        })
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1
            })
            this.setState({
                num: this.state.num + 1
            })
            this.setState({
                num: this.state.num + 1
            })
        })
    }
}

class TodoListDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    title: 'vue'
                },
                {
                    id: 2,
                    title: 'react'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <InputForm submitTitle={this.onSubmitTitle}></InputForm>
                <List list={this.state.list}></List>
            </div>
        )
    }

    onSubmitTitle = (title) => {
        this.setState({
            list: [...this.state.list, {
                id: `id-${Date.now()}`,
                title
            }]
        })
    }
}

export default TodoListDemo