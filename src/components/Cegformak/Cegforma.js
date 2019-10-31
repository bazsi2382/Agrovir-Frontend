import React, { Component } from 'react';
import Aux from '../../HOC/Aux';

export default class Cegforma extends Component {
    render() {
        return (
            <Aux>
                <option>{this.props.cegforma.Cégforma}</option>
            </Aux>
        )
    }
}