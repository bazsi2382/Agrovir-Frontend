import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const initialState = {
    cegforma: ''
}

export default class AddCegforma extends Component {

    state = initialState;

    handleNameChange = (e) => {
        this.setState({
            cegforma: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(initialState);
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Form noValidate onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Cégforma felvétele
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label column sm="10">
                                    Cégforma neve
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="text" placeholder="Név" value={this.state.cegforma} onChange={this.handleNameChange} />
                                </Col>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            {this.state.cegforma.length > 0 ? <Button type="submit" onClick={this.props.AddNewCegforma.bind(this, this.state.cegforma)}>Hozzáad</Button> : <Button disabled>Hozzáad</Button>}
                            <Button variant="danger" onClick={this.props.onHide}>Bezár</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}