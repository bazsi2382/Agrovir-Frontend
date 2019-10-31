import React, { Component } from 'react';
import Partners from '../Partners/Partners';
import classes from './Table.module.css';
import AddPartner from '../AddPartner/AddPartner';
import UpdatePartner from '../UpdatePartner/UpdatePartner';

import Tables from 'react-bootstrap/Table';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

export default class Table extends Component {
    render() {
        return (
            <div className={classes.Table}>
                <Tables responsive>
                    <thead >
                        <tr className={classes.TableRow}>
                            <th>ID</th>
                            <th>Név</th>
                            <th>Cégforma</th>
                            <th>Adószám</th>
                            <th>Cégjegyzékszám</th>
                            <th>Település</th>
                            <th>Cím</th>
                            <th>Telefonszám</th>
                            <th>Bankszámlaszám</th>
                            <th>Megjegyzés</th>
                            <th>
                                <ButtonToolbar>
                                    <Button variant="success" onClick={this.props.setAddModalShow}>
                                        Add partner
                                </Button>

                                    <AddPartner
                                        AddNewTelepules={this.props.AddNewTelepules}
                                        AddNewCegforma={this.props.AddNewCegforma}
                                        addTelepulesModalShow={this.props.addTelepulesModalShow}
                                        addCegformaModalShow={this.props.addCegformaModalShow}
                                        setaddtelepulesmodalshow={this.props.setaddtelepulesmodalshow}
                                        setaddcegformamodalshow={this.props.setaddcegformamodalshow}
                                        cegformak={this.props.cegformak}
                                        telepulesek={this.props.telepulesek}
                                        show={this.props.AddModalShow}
                                        onHide={this.props.setAddModalShow}
                                        addNewPartner={this.props.addNewPartner}
                                    />
                                </ButtonToolbar>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Partners
                            cegformak={this.props.cegformak}
                            telepulesek={this.props.telepulesek}
                            setCurrentPartner={this.props.setCurrentPartner}
                            currentpartner={this.props.currentpartner}
                            UpdatePartner={this.props.UpdatePartner}
                            partners={this.props.partners}
                            UpdateModalShow={this.props.UpdateModalShow}
                            setUpdateModalShow={this.props.setUpdateModalShow}
                            delPartner={this.props.delPartner}
                        />
                    </tbody>
                </Tables>
                <UpdatePartner
                    ref={this.updateValues}
                    handleSetValues={this.props.handleSetValues}
                    cegformak={this.props.cegformak}
                    telepulesek={this.props.telepulesek}
                    partner={this.props.partner}
                    currentpartner={this.props.currentpartner}
                    UpdatePartner={this.props.UpdatePartner}
                    show={this.props.UpdateModalShow}
                    onHide={this.props.setUpdateModalShow}
                />
            </div>
        )
    }
}
