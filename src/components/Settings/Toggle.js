import React, { Component } from 'react';
import './Toggle.scss';

class Toggle extends Component {
    render() {
        return (
            <div className="toggle-switch small-switch">
                <input
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    name={this.props.Name}
                    id={this.props.Name}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <label className="toggle-switch-label" htmlFor={this.props.Name}>
                    <span className="toggle-switch-inner" />
                    <span className="toggle-switch-switch" />
                </label>
            </div>
        );
    }
}

export default Toggle;