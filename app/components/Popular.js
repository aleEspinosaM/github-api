import React, { Component } from 'react';
import SelectLanguage from './SelectLanguage';
import RepoGrid from './ReposGrid';
import config from '../utils/api';
import Loading from './Loading'

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: 'All',
            repos: null
        };

        this.updateLang = this.updateLang.bind(this);
    }

    componentDidMount() {
        this.updateLang(this.state.selectedLang)
    }
    
    updateLang(lang) {
        this.setState({
            selectedLang: lang,
            repos: null
        });

        config.fetchPopularRepo(lang)
            .then(res => {
                // const repos = res.map(obj => obj);
                this.setState({ repos: res });
            })
    }

    

    render() {
         console.log(this.state.repos)
        return (
            <div>
                <SelectLanguage 
                selectedLang={this.state.selectedLang}
                onSelect={this.updateLang}
                />

                {!this.state.repos 
                    ? <Loading text={'Fetching Repos'} speed={50}/>
                    : <RepoGrid repos={this.state.repos} />
                }
 
            </div>
        );
    }
}

export default Popular;