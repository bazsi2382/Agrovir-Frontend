import React, { Component } from 'react';
import Partner from '../Partner/Partner';

export class Partners extends Component {
    render() {
        return this.props.partners.map((partner) => (
            <Partner
                key={partner.ID}
                partner={partner}
                UpdatePartner={this.props.UpdatePartner}
                setCurrentPartner={this.props.setCurrentPartner}
                currentpartner={this.props.currentpartner} 
                cegformak={this.props.cegformak}
                telepulesek={this.props.telepulesek}
                partners={this.props.partners}
                UpdateModalShow={this.props.UpdateModalShow} 
                setUpdateModalShow={this.props.setUpdateModalShow} 
                delPartner={this.props.delPartner}
            />
        ));
    }
}


export default Partners;