import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
        };
    }
    handleThemeChange() {
        this.props.onClick(!this.state.isDarkMode);
        this.setState({
            isDarkMode: !this.state.isDarkMode
        })
    }
    render() {
        const { isDarkMode } = this.state;
        return (
            <button className="app__dark-mode-btn icon level-right" onClick={() => this.handleThemeChange()}>
                <FontAwesomeIcon icon={ isDarkMode ? faSun : faMoon } color={ isDarkMode ? '#FFA500' : '#4D5B6B' }/>
            </button>
        );
    }

}