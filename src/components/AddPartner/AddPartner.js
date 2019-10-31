import React, { Component } from 'react';
import Telepulesek from '../Telepulesek/Telepulesek';
import Cegformak from '../Cegformak/Cegformak';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AddTelepules from '../AddTelepules/AddTelepules';
import AddCegforma from '../AddCegforma/AddCegforma';


const initialState = {
    nev: '',
    cegforma: '',
    adoszam: '',
    cegjegyzekszam: '',
    telepules: '',
    cim: '',
    telefonszam: '',
    bankszamlaszam: '',
    megjegyzes: '',
    nameError:'A név megadása kötelező',
    telepulesError:'Település megadása kötelező'
}

export default class AddPartner extends Component {

    state = initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState(initialState);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Modal.Header >
                            <Modal.Title id="contained-modal-title-vcenter">
                                Partner hozzáadása
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Név
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="nev" type="text" placeholder="Név" value={this.state.nev} onChange={this.handleChange} />
                                    <p style={{color: 'red'}}>{this.state.nev === '' ? this.state.nameError : null}</p>
                                </Col>
                                
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Cégforma
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="cegforma" as="select" value={this.state.cegforma} onChange={this.handleChange}>
                                        <option>...</option>
                                        <Cegformak cegformak={this.props.cegformak} />
                                    </Form.Control>
                                    <ButtonToolbar>
                                        <Button onClick={this.props.setaddcegformamodalshow}>
                                            Új cégforma
                                             </Button>
                                        <AddCegforma
                                            AddNewCegforma={this.props.AddNewCegforma}
                                            show={this.props.addCegformaModalShow}
                                            onHide={this.props.setaddcegformamodalshow}
                                        />
                                    </ButtonToolbar>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Adószám
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="adoszam" placeholder="adoszam" value={this.state.adoszam} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Cégjegyzékszám
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="cegjegyzekszam" placeholder="cegjegyzekszam" value={this.state.cegjegyzekszam} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Település
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="telepules" as="select" value={this.state.telepules} onChange={this.handleChange}>
                                        <option>...</option>
                                        <Telepulesek telepulesek={this.props.telepulesek} />
                            
                                    </Form.Control>
                                    <p style={{color: 'red'}}>{this.state.telepules !== "..." && this.state.telepules.length > 0 ? null : this.state.telepulesError}</p>
                                    <ButtonToolbar>
                                        <Button onClick={this.props.setaddtelepulesmodalshow}>
                                            Új település
                                        </Button>
                                        <AddTelepules
                                            AddNewTelepules={this.props.AddNewTelepules}
                                            show={this.props.addTelepulesModalShow}
                                            onHide={this.props.setaddtelepulesmodalshow}
                                        />
                                    </ButtonToolbar>
                                </Col>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label column sm="2">
                                    Cím
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="cim" placeholder="cim" value={this.state.cim} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label column sm="2">
                                    Telefonszám
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="telefonszam" placeholder="telefonszam" value={this.state.telefonszam} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Bankszámlaszám
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control name="bankszamlaszam" placeholder="bankszamlaszam" value={this.state.bankszamlaszam} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm="2">
                                    Megjegyzés
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control rows="2" name="megjegyzes" placeholder="megjegyzes" value={this.state.megjegyzes} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            {this.state.nev.length > 0 && this.state.telepules !== "..." && this.state.telepules.length > 0 ? <Button type="submit" onClick={this.props.addNewPartner.bind(this,
                                this.state.nev,
                                this.state.adoszam,
                                this.state.cegforma,
                                this.state.cegjegyzekszam,
                                this.state.telepules,
                                this.state.cim,
                                this.state.telefonszam,
                                this.state.bankszamlaszam,
                                this.state.megjegyzes)}>Hozzáad</Button> : <Button disabled>Hozzáad</Button>}
                            
                            
                            <Button variant="danger" onClick={this.props.onHide}>Bezár</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}
