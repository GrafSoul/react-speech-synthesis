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
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);

    const [isPaused, setIsPaused] = useState(true);
    const [isSpeak, setIsSpeak] = useState(true);

    const utterance = new SpeechSynthesisUtterance();

    const voicesAvailable = speechSynthesis.getVoices();

    if (window.SpeechSynthesisUtterance === undefined && !voicesAvailable) {
        compatibility.current = false;
    } else {
        compatibility.current = true;
    }

    useEffect(() => {
        injectVoices(voices.current, speechSynthesis.getVoices());
    }, [voices]);

    useEffect(() => {
        if (text === '') {
            setIsSpeak(true);
        }
    }, [text]);

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

    const handlerSpeak = () => {
        let selectedOption =
            voices.current.options[voices.current.selectedIndex];
        let selectedVoice = speechSynthesis
            .getVoices()
            .filter(function (voice) {
                return (
                    voice.voiceURI ===
                    selectedOption.getAttribute('data-voice-uri')
                );
            })
            .pop();

        utterance.text = text;
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
        utterance.rate = rate;
        utterance.pitch = pitch;

        speechSynthesis.speak(utterance);
        setIsPaused(false);
        setIsSpeak(false);
    };

    const handlerStop = () => {
        speechSynthesis.cancel();
        setIsPaused(false);
        setIsSpeak(true);
    };

    const handlerPause = () => {
        speechSynthesis.pause();
        setIsPaused(true);
    };

    const handlerContinue = () => {
        speechSynthesis.resume();
        setIsPaused(false);
    };

    return (
        <>
            {compatibility.current ? (
                <Container className={classes.content}>
                    <div className={classes.contentWrap}>
                        <h1 className={classes.title}>
                            READ.OK | Speech Synthesis API
                        </h1>
                        <Jumbotron className={classes.jumbotron}>
                            <Form action="" method="get">
                                <FormText className={classes.info}>
                                    Simple app for speech synthesis using
                                    'React.js' and Speech Synthesis API <br />
                                    In the text field, write the text that you
                                    want to play with your computer's voice
                                </FormText>
                                <FormGroup className={classes.formGroup}>
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
                                        <FormGroup
                                            className={classes.rangeInput}
                                        >
                                            <Label for="rate">
                                                Rate: <b>{rate}</b>
                                            </Label>
                                            <Input
                                                type="range"
                                                id="rate"
                                                min="0.1"
                                                max="2"
                                                value={rate}
                                                step="0.1"
                                                onChange={(e) =>
                                                    setRate(e.target.value)
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup
                                            className={classes.rangeInput}
                                        >
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
                                    {isSpeak ? (
                                        <Button
                                            disabled={!text ? true : false}
                                            type="button"
                                            id="button-speak"
                                            color="success"
                                            className={classes.button}
                                            onClick={handlerSpeak}
                                        >
                                            <i className="fas fa-play"></i>{' '}
                                            Speak
                                        </Button>
                                    ) : (
                                        <Button
                                            type="button"
                                            id="button-continue"
                                            color="info"
                                            className={classes.button}
                                            onClick={handlerContinue}
                                        >
                                            <i className="fas fa-play"></i>{' '}
                                            Speak
                                        </Button>
                                    )}
                                    <Button
                                        disabled={!isPaused ? false : true}
                                        type="button"
                                        id="button-pause"
                                        color="info"
                                        className={classes.button}
                                        onClick={handlerPause}
                                    >
                                        <i className="fas fa-pause"></i> Pause
                                    </Button>

                                    <Button
                                        disabled={!text ? true : false}
                                        type="button"
                                        id="button-stop"
                                        color="danger"
                                        className={classes.button}
                                        onClick={handlerStop}
                                    >
                                        <i className="fas fa-stop"></i> Stop
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
                            Speech Synthesis API Not Supported!
                        </p>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default TextReader;
