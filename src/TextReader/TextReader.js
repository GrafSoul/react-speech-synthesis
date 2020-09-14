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

import classes from './TextReader.module.css';

const TextReader = () => {
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
                <Container className={classes.content}>
                    <div className={classes.contentWrap}>
                        <h1 className={classes.title}>
                            Text Reader | Speech Synthesis API
                        </h1>
                        <Jumbotron className={classes.jumbotron}>
                            <Form action="" method="get">
                                <FormText className={classes.info}>
                                    Simple app for speech synthesis using
                                    'React.js' and Speech Synthesis API
                                </FormText>
                                <hr className="my-2" />
                                <FormGroup className={classes.formGroup}>
                                    <Label for="text">Text:</Label>
                                    <Input
                                        type="textarea"
                                        id="text"
                                        className={classes.inputText}
                                        value={text}
                                        onChange={(e) =>
                                            setText(e.target.value)
                                        }
                                    ></Input>
                                </FormGroup>
                                <FormGroup className={classes.formGroup}>
                                    <Label for="voice">Voice:</Label>
                                    <select
                                        className="form-control"
                                        id="voice"
                                        ref={voices}
                                    ></select>
                                </FormGroup>
                                <Row form className={classes.formGroup}>
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

                                <FormGroup className={classes.buttonGroup}>
                                    <Button
                                        type="button"
                                        id="button-speak"
                                        color="success"
                                        className={classes.button}
                                    >
                                        Speak
                                    </Button>
                                    <Button
                                        type="button"
                                        id="button-stop"
                                        color="danger"
                                        className={classes.button}
                                    >
                                        Stop
                                    </Button>
                                    <Button
                                        type="button"
                                        id="button-pause"
                                        color="info"
                                        className={classes.button}
                                    >
                                        Pause
                                    </Button>
                                    <Button
                                        type="button"
                                        id="button-resume"
                                        color="info"
                                        className={classes.button}
                                    >
                                        Resume
                                    </Button>
                                </FormGroup>
                            </Form>
                        </Jumbotron>
                    </div>
                </Container>
            ) : (
                <Container>
                    <Row>
                        <p className={classes.unsupported}>
                            Speech Synthesis API not supported!
                        </p>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default TextReader;
