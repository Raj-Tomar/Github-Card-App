import React from 'react';
import axios from 'axios';

class Form extends React.Component {

    //userNameInput = React.createRef();
    // ref={this.userNameInput} => Remove from input field
    
    // Another way of reading input field value
    
    state = {
        userName: '',
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        console.log(resp.data);
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
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