import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const initialState = {
    telepules: ''
}

export default class AddTelepules extends Component {

    state = initialState;

    handleNameChange = (e) => {
        this.setState({
            telepules: e.target.value
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
                                Település felvétele
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label column sm="10">
                                    Település neve
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Név" value={this.state.telepules} onChange={this.handleNameChange} />
                                </Col>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                        {this.state.telepules.length > 0 ? <Button type="submit" onClick={this.props.AddNewTelepules.bind(this, this.state.telepules)}>Hozzáad</Button> : <Button disabled>Hozzáad</Button>}
                            <Button variant="danger" onClick={this.props.onHide}>Bezár</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}
