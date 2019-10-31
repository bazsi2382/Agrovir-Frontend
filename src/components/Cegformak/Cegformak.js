import React, { Component } from 'react';
import Cegforma from './Cegforma';

export class Cegformak extends Component {
    render() {
        return this.props.cegformak.map((cegforma) => (
            <Cegforma
                key={cegforma.ID}
                cegforma={cegforma}  
            />
        ));
    }
}


export default Cegformak;