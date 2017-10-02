import React, { Component } from 'react';
import PropTypes from 'prop-types';


const SelectLanguage = (props) => {
    const languages = ['All', 'Javascript','Java','PHP','Python','CSS', 'Ruby'];
    return (
            <div>
                 <ul className='languages' >
                    {languages.map((language) => {
                        return (
                            <li className={ language === props.selectedLang ? 'selected-language':''}
                            key={language}
                            onClick={props.onSelect.bind(null, language)}
                            >
                                {language}
                            </li>
                        );
                    })}
                </ul> 
            </div>
    );
};

SelectLanguage.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};
export default SelectLanguage;



