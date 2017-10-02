import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends Component {
    constructor(props) {
        super(props);
        this.state ={
            playerOneName: '',
            playerTwoName: '',
            playerOneImg: null,
            playerTwoImg: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    

handleSubmit(id, username) {
    console.log(id,username)
    this.setState({
        [id + 'Name']: username,
        [id + 'Img']: `https://github.com/${username}.png?size=200`
    });
}

handleReset(id) {
    this.setState({
        [id + 'Name']: '',
        [id + 'Img']: null
    });
}

    render() {
        const {
            playerOneName, 
            playerTwoName, 
            playerOneImg, 
            playerTwoImg
        } = this.state
        console.log("STATEEEE", this.state)
        const match = this.props.match
        return (
            <div>
                <div className='row' >
                 {!playerOneName && <PlayerInput
                 id='playerOne'
                 label='Player One'
                 onSubmit={this.handleSubmit} />}

                {playerOneImg !== null && <PlayerPreview 
                    avatar={playerOneImg}
                    username={playerOneName}
                >
                    <button
                        className='reset'
                        onClick={this.handleReset.bind(null, 'playerOne')}
                    >Reset</button>
                </PlayerPreview>
                }

                 {!playerTwoName && <PlayerInput 
                 id='playerTwo'
                 label='Player Two'
                 onSubmit={this.handleSubmit}/>}

                 {playerTwoImg !== null && <PlayerPreview 
                    avatar={playerTwoImg}
                    username={playerTwoName}
                >
                    <button
                        className='reset'
                        onClick={this.handleReset.bind(null, 'playerTwo')}
                    >Reset</button>
                </PlayerPreview>
                }
                </div>
                {playerOneImg&&playerTwoImg && 
                    <Link
                    className='button'
                    to={{
                        pathname: `${match.url}/results`,
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }}>
                    Go Battle
                    </Link>
                }
            </div>
        );
    }
}

export default Battle;