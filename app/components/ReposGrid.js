import React from 'react';
import PropTypes from 'prop-types';


const ReposGrid = props => {
    return (
        <div>
            <ul className='popular-list'>
                {
                    props.repos.map((repo,index) => {
                       return ( <li key={repo.name} className='popular-item' >
                            <div className='popular-rank'>
                                # {index + 1}
                            </div>
                            <ul className='space-list-items' >
                                <li>
                                    <img className='avatar' 
                                    src={repo.owner.avatar_url}
                                    alt={`Avatar for ${repo.owner.login}`}/>
                                </li>
                                <li><a href={repo.html_url}>{repo.name}</a></li>
                                <li>@ {repo.owner.login}</li>
                                <li>Stars: {repo.stargazers_count}</li>
                            </ul>
                        </li>
                       )
                    })
                }
            </ul>
        </div>
    );
};

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
};

export default ReposGrid;