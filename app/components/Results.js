import React, { Component } from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import config from '../utils/api';
import Player from './Player'
import Loading from './Loading'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }
    

componentDidMount() {
    const players = queryString.parse(this.props.location.search)

    config.battle([
        players.playerOneName,
        players.playerTwoName
        ]).then(results => {
            if(results === null) {
                return this.setState({
                    error: "There was an error check both users have github account",
                    loading: false
                });
            }

            this.setState({
                winner: results[0],
                loser: results[1],
                error: null,
                loading: false
            });
        })

}


    render() {
        const {winner, loading, loser, error} = this.state
        if(loading){
            <Loading />
        }

        if(error){
            <div>
            <p>{error}</p>
            <Link to='/battle'>Reset</Link>

            </div>
        }
        return (
            <div>
                <div className='row'>
                     {(winner === null && loser === null) 
                    ? <p>cargado resultados</p>
                    : 
                    <Player 
                     label='Winner'
                     score={winner.score}
                     profile={winner.profile}
                     />
                     }
                    {(winner === null && loser === null) 
                    ? <p>cargando resultados</p>
                    :
                     <Player 
                     label='Loser'
                     score={loser.score}
                     profile={loser.profile}
                     />
                    } 
                </div>
            </div>
        );
    }
}

export default Results;