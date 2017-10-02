import axios from 'axios';


const getProfile = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
        .then((user) => { return user.data})
}


const getRepos =(username) => {
    return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}

const getStarCount = (repos) => {
    return repos.data.reduce((accum, repo) => {
        return accum + repo.stargazers_count
    },0)
}

const calculateScore = (profile, repos) => {

    const followers = profile.followers
    const totalStars = getStarCount(repos)

    return (followers * 3) + totalStars
}

const handleError = error => {
    console.warn(error)
    return null
}

const getUserData = (player) => {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then((data) => {
        const profile = data[0]
        const repos = data[1]

        return {
            profile,
            score: calculateScore(profile, repos)
        }
    })
}

const sortPlayers = players => {
    return players.sort((a,b) => {
        return b.score - a.score
    })
}

const config = {

    fetchPopularRepo: (language) => {
        const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);


        // return axios.get(encodedURI)
        //     .then(res => console.log(res.data.items))

        return fetch(encodedURI)
                .then(res => res.json())
                .then(res  => (res.items))
    },

    battle: (players) => {
        return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
    }


}

export default config