import React, { Component } from 'react'
import './todoTable.css'

class TableTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputMessage: '',
            TableTodoList: []
        }

        this.InputMessageWritten = this.InputMessageWritten.bind(this)
        this.FormSubmitted = this.FormSubmitted.bind(this)
    }

    InputMessageWritten(e){
        this.setState({
            inputMessage: e.target.value
        })
    }

    FormSubmitted(e) {
        e.preventDefault()

        let newItem = {
            id: this.state.TableTodoList.length + 1,
            task_detail: this.state.inputMessage
        }
        this.state.inputMessage = ''

        this.setState((prevTasks)=>({
            TableTodoList: [...prevTasks.TableTodoList, newItem]
        }))
    }

    render() {
        let table = this.state.TableTodoList.map((data, index)=>{
            return(
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.task_detail}</td>
                    <td>
                        <button className='formButton' onClick={this.EditTask}>Edit</button>
                    </td>
                    <td>
                        <button className='formButton' onClick={this.RemoveTask}>Remove</button>
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