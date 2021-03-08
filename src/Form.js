import React from 'react';

class Form extends React.Component {

    //userNameInput = React.createRef();
    // ref={this.userNameInput} => Remove from input field
    
    // Another way of reading input field value
    
    state = {
        userName: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.userName} 
                        onChange={event => this.setState({userName: event.target.value})}
                        placeholder="Github username" 
                        required
                    />
                    <button>Add Card</button>
                </form>
            </div>
        );
    }
}

export default Form;