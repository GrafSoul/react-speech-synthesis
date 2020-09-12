import React from 'react';
import {
    Container,
    Row,
    Jumbotron,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
} from 'reactstrap';

import './App.css';

const App = () => {
    const value = 'sss';
    return (
        <Container className="content">
            <Row>
                <Jumbotron className="jumbotron">
                    <h1 className="title">
                        Text Reader | Speech Synthesis API
                    </h1>

                    <hr className="my-2" />

                    <Form action="" method="get">
                        <FormText className="info">
                            Simple app for speech synthesis using 'React.js' and
                            Speech Synthesis API
                        </FormText>
                        <FormGroup className="form-group">
                            <Label for="text">Text:</Label>
                            <Input
                                type="textarea"
                                id="text"
                                className="input-text"
                            ></Input>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label for="voice">Voice:</Label>
                            <Label id="voice"></Label>
                        </FormGroup>
                        <Row form className="form-group">
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="rate">Rate (0.1 - 10):</Label>
                                    <Input
                                        type="number"
                                        id="rate"
                                        min="0.1"
                                        max="10"
                                        value="1"
                                        step="any"
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="pitch">Pitch (0.1 - 2):</Label>
                                    <Input
                                        type="number"
                                        id="pitch"
                                        min="0.1"
                                        max="2"
                                        value="1"
                                        step="any"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup className="button-group">
                            <Button
                                type="button"
                                id="button-speak"
                                color="success"
                                className="button"
                            >
                                Speak
                            </Button>
                            <Button
                                type="button"
                                id="button-stop"
                                color="danger"
                                className="button"
                            >
                                Stop
                            </Button>
                            <Button
                                type="button"
                                id="button-pause"
                                color="info"
                                className="button"
                            >
                                Pause
                            </Button>
                            <Button
                                type="button"
                                id="button-resume"
                                color="info"
                                className="button"
                            >
                                Resume
                            </Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>
            </Row>
        </Container>
    );
};

export default App;
