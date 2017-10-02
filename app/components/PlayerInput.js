import React, { Component } from 'react';

class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


    handleChange(e) {
        const value = e.target.value
        this.setState({
            username: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.username
        )
    }
    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='username'>
                    {this.props.label}
                </label>
                <input
                    id='username'
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <button 
                 className='button'
                 type='submit'
                 disabled={!this.state.username}
                 >Submit</button>
            </form>
        );
    }
}

export default PlayerInput;