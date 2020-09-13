import React, { useState, useEffect, useRef } from 'react';
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
    const compatibility = useRef(true);
    const voices = useRef(null);

    const [text, setText] = useState('');
    const [lang, setLang] = useState('en-EN');
    const [voiceURI, setVoiceURI] = useState(null);
    const [volume, setVolume] = useState(1);
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);

    const utterance = new SpeechSynthesisUtterance();
    const voicesAvailable = speechSynthesis.getVoices();

    utterance.text = text;
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.voiceURI = voiceURI;
    utterance.volume = volume;
    utterance.pitch = pitch;

    if (window.SpeechSynthesisUtterance === undefined) {
        compatibility.current = false;
    } else {
        compatibility.current = true;
    }

    useEffect(() => {
        injectVoices(voices.current, speechSynthesis.getVoices());
    }, []);

    const injectVoices = (voicesElement, voices) => {
        voicesElement.innerHTML = voices
            .map((voice) => {
                let option = document.createElement('option');

                option.value = voice.lang;
                option.textContent =
                    voice.name + (voice.default ? ' (default)' : '');
                option.setAttribute('data-voice-uri', voice.voiceURI);

                return option;
            })
            .map((option) => {
                return option.outerHTML;
            })
            .join('');
    };

    return (
        <>
            {compatibility.current ? (
                <Container className="content">
                    <Row className="content-wrap">
                        <Jumbotron className="jumbotron">
                            <h1 className="title">
                                Text Reader | Speech Synthesis API
                            </h1>

                            <hr className="my-2" />

                            <Form action="" method="get">
                                <FormText className="info">
                                    Simple app for speech synthesis using
                                    'React.js' and Speech Synthesis API
                                </FormText>
                                <FormGroup className="form-group">
                                    <Label for="text">Text:</Label>
                                    <Input
                                        type="textarea"
                                        id="text"
                                        className="input-text"
                                        value={text}
                                        onChange={(e) =>
                                            setText(e.target.value)
                                        }
                                    ></Input>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="voice">Voice:</Label>
                                    <select
                                        className="form-control"
                                        id="voice"
                                        ref={voices}
                                    ></select>
                                </FormGroup>
                                <Row form className="form-group">
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="rate">
                                                Rate: <b>{rate}</b>
                                            </Label>
                                            <Input
                                                type="range"
                                                id="rate"
                                                min="0.1"
                                                max="10"
                                                value={rate}
                                                step="0.1"
                                                onChange={(e) =>
                                                    setRate(e.target.value)
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="pitch">
                                                Pitch: <b>{pitch}</b>
                                            </Label>
                                            <Input
                                                type="range"
                                                id="pitch"
                                                min="0.1"
                                                max="2"
                                                value={pitch}
                                                step="0.1"
                                                onChange={(e) =>
                                                    setPitch(e.target.value)
                                                }
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
            ) : (
                <Container>
                    <Row>
                        <p className="unsupported">
                            Speech Synthesis API not supported!
                        </p>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default App;
