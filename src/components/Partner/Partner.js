import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import classes from './Partner.module.css';

export default class Partner extends Component {
    /*constructor(props) {
        super(props)
        this.updateValues = React.createRef();
    }*/

    /*handleUpdateValues = (id) => {
        this.props.setCurrentPartner(id);
        this.updateValues.current.setValues();
    }*/

    render() {
        const { ID, Név, Cégforma, Adószám, Cégjegyzékszám, Település, Cím, Telefonszám, Bankszámlaszám, Megjegyzés } = this.props.partner;
        return (
            <Aux>
                <tr>
                    <td>{ID}</td>
                    <td>{Név}</td>
                    <td>{Cégforma}</td>
                    <td>{Adószám}</td>
                    <td>{Cégjegyzékszám}</td>
                    <td>{Település}</td>
                    <td>{Cím}</td>
                    <td>{Telefonszám}</td>
                    <td>{Bankszámlaszám}</td>
                    <td>{Megjegyzés}</td>
                    <td>
                        <ButtonToolbar>
                            <Button onClick={this.props.delPartner.bind(this, ID)} variant="danger">Törlés</Button>
                            <Button variant="primary" className={classes.btnEdit} onClick={
                                this.props.setUpdateModalShow
                            }>
                                Módosítás
                        </Button>

                        </ButtonToolbar>
                    </td>
                </tr>
            </Aux>
        )
    }
}
