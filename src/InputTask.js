import React, {Component} from 'react';

/*global db*/

class InputTask extends Component {
    constructor() {
        super()
        this.state = {
           inputTask: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.inputTask);

        db.collection('todoList').add({
            task: this.state.inputTask,
            checked: false
        })
        // get a random int (index in the array)
        // set 'randomImg' to the '.url' of the random item I grabbed
        // this.setState({randomImg: randMemeImg})

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='inputTask'
                        placeholder='Task goes here'
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default InputTask;