import React, { Component } from 'react';
import Aux from '../../HOC/Aux';

export default class Telepules extends Component {
    render() {
        return (
            <Aux>
                <option>{this.props.telepules.Település}</option>
            </Aux>
        )
    }

}
