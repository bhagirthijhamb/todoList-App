import React from 'react';
import TodoItem from './TodoItem';
import InputTask from './InputTask';

/*global db*/
const todosData = []

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                // todos: []
                todos: []
            }
            this.handleChange = this.handleChange.bind(this)
        }

        populateData(doc) {
            const todoData = { 
                id: Number,
                text: String,
                completed: Boolean
            } 
            todoData.id = doc.id;
            todoData.text = doc.data().task;
            todoData.completed = doc.data().checked;
            todosData.push(todoData);
        }

        componentDidMount() {
            db.collection('todoList').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    this.populateData(doc);
                    })
                    console.log(todosData);
                    this.setState({
                        todos: todosData
                });
            })
        }

        handleChange(id) {
            // console.log('changed', id)
            this.setState(prevState => {
                const updatedTodos = prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed

                        db.collection('todoList').doc(todo.id).update({
                            checked: todo.completed
                        })
                    }
                    return todo
                })
                return {
                    todos: updatedTodos
                }
            })
        }



        render() {
            const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

            return(
                    <div className="todo-list">
                        <h2>To-do List</h2>
                        {todoItems}
                        <p></p>
                        <InputTask />
                    </div>
            )
        }
    }

export default App;