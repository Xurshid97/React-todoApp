import React, { Component } from 'react'
import './todoTable.css'

class TableTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputMessage: '',
            TableTodoList: []
        }

        // this.InputMessageWritten = this.InputMessageWritten.bind(this)
        // this.FormSubmitted = this.FormSubmitted.bind(this)
    }

    InputMessageWritten = (e) => {
        this.setState({
            inputMessage: e.target.value
        })
    }

    FormSubmitted = (e) => {
        e.preventDefault()
        if (this.state.inputMessage.trim() == '') {
            alert('Please enter the task')
        } else {
            let newItem = {
                id: this.state.TableTodoList.length + 1,
                task_detail: this.state.inputMessage
            }
            this.state.inputMessage = ''

            this.setState((prevTasks) => ({
                TableTodoList: [...prevTasks.TableTodoList, newItem]
            }))
        }

    }

    RemoveTask = (e) => {
        let id = e.target.getAttribute('data-id')
        if (id == 0 && this.state.TableTodoList.length === 1) {
            this.setState(() => ({
                TableTodoList: []
            }))
        } else {
            this.state.TableTodoList.splice(e.target.getAttribute('data-id'), 1)
            console.log(this.state.TableTodoList);
            this.setState(() => ({
                TableTodoList: this.state.TableTodoList
            }))
        }
    }

    render() {
        let table = this.state.TableTodoList.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.task_detail}</td>
                    <td>
                        <button className='tableButton' onClick={this.EditTask}>Edit</button>
                    </td>
                    <td>
                        <button className='tableButton' data-id={index} onClick={this.RemoveTask}>Remove</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='container'>
                <form className='formClass'>
                    <input value={this.state.inputMessage} onChange={this.InputMessageWritten}></input>
                    <button type='submit' onClick={this.FormSubmitted}>Add</button>
                </form>
                <table className='tableClass'>
                    <thead>
                        <tr>
                            <th>N/r</th>
                            <th>Task details</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TableTodo