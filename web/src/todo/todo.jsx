import React, { Component } from 'react';
import axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = "http://localhost:3001";


export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {description: '', list: []}
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    handleAdd() {
       const description = this.state.description
       axios.post(URL, {description}).then(res => {
           console.log("Olá");
       })
    }
    render() {
        return (
            <div>
               <PageHeader name='Todo App' small='Cadastro'></PageHeader>
               <hr/>
               <TodoForm
               description={this.state.description}
               handleChange={this.handleChange}
               handleAdd={this.handleAdd}/>
               <TodoList />
            </div>
        )
    }
}