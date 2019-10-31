import React, { Component } from 'react';
import Telepules from './Telepules';

export class Telepulesek extends Component {
    render() {
        return this.props.telepulesek.map((telepules) => (
            <Telepules
                key={telepules.ID}
                telepules={telepules}  
            />
        ));
    }
}


export default Telepulesek;