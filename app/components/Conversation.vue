<template>
    <Page actionBarHidden="true" statusBarStyle="light">
        <GridLayout columns="*, *, *" rows="*, *, *, 100, 70, 15">
            <Label class="sent-text roboto-italic" :text="input" row="0" col="1" textWrap="true" v-if="input != ''" @tap="keyboardTap" />
            <Label class="main-text roboto" :text="msg" row="1" col="1" textWrap="true" />
            <Button class="speech-button" :class="{'speech-listening' : isListening}" @tap="startOrStopSpeech()" col="0" row="3" colSpan="3"></Button>
            <Button class="keyboard-button" @tap="keyboardTap" v-if="!inputToggle" row="4" col="1" />
            <TextField ref="txtField" class="input-field roboto" v-model="input" hint="Enter text..." v-if="inputToggle" row="4" col="1" @blur="inputSent = !inputSent" @returnPress="sendInput" returnKeyType="send" />
        </GridLayout>
    </Page>
</template>

<script>
    import { SpeechRecognition } from "nativescript-speech-recognition";
    import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';
    const httpModule = require("http");
    const speechRecognition = new SpeechRecognition();
    var LS = require("nativescript-localstorage");

    export default {
        data() {
            return {
                msg: '',
                input: '',
                inputToggle: false,
                inputSent: false,
                isListening: false,
                context: null,
                gender: ''
            }
        },
        created(){
            this.gender = LS.getItem('gender');
            this.context = 
            {
                "gender": this.gender
            };
        },
        mounted(){
            this.getWatsonAnswer();
        },
        methods: {

            /** ------------------------------------------------------------
             * keyboardTap
             * - shows keyboard for user
             */
            keyboardTap(){
                this.inputToggle = true;
                this.$nextTick(() => this.$refs.txtField.nativeView.focus())
            },

            /** ------------------------------------------------------------
             * sendInput
             * - initiates the getWatsonAwnser() function
             */
            sendInput(){
                this.inputSent = true;
                this.inputToggle = false;
                this.getWatsonAnswer();
            },

            /** ------------------------------------------------------------
             * getWatsonAnswer
             * - sends a post request to watson
             * - puts the result awnser in msg
             * - puts he context in context
             * - start the tts function
             */
            getWatsonAnswer(){
                httpModule.request({
                    url: "https://gateway-fra.watsonplatform.net/assistant/api/v1/workspaces/1cd29412-4a54-42d6-bdc8-c165cb69bb50/message?version=2018-09-20",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Basic YXBpa2V5OlkwdzNwcW5OamFCSDlzYmZOY1NPNFBtZkxhRC1NTEJHZ2ZsaG9HcTcxQlBG"
                    },
                    content: JSON.stringify({
                        context: this.context,
                        input: {
                            text: this.input
                        }
                    })
                }).then((response) => {
                    let content = JSON.parse(response.content);
                    this.msg = content.output.text;
                    this.context = content.context;
                    this.$nextTick(() => this.speak());

                    return this.msg;
                }, (e) => {
                    console.log(e);
                });
            },

            /** ------------------------------------------------------------
             * startOrStopSpeech
             * - toggles the startSpeech or stopSpeech functions
             */
            startOrStopSpeech(){
                if (this.isListening) {
                    this.stopSpeech();
                } else{
                    this.startSpeech();
                }
            },

            /** ------------------------------------------------------------
             * startSpeech
             * - start the NativeScript voice recoginitision listener
             * - onResult callback will be invoked repeatedly during recognition
             * - if there is no further voice input, the listeren will stop
             * - if there is no further voice input, the getWatsonAwsner function will be called
             */
            startSpeech(){
                speechRecognition.startListening({
                    // optional, uses the device locale by default
                    locale: "nl-NL",
                    returnPartialResults: true,
                    onResult: (transcription) => {
                        this.input = transcription.text;
                        if (transcription.finished == true) {
                            this.isListening = false;
                            this.getWatsonAnswer();
                        }
                    },
                }).then(started => {
                        console.log(`started listening`);
                        this.isListening = true;
                    },
                    (errorMessage) => { console.log(`Error: ${errorMessage}`); }
                );
            },

            /** ------------------------------------------------------------
             * speak
             * initializes and executes the NativeScript Text To Speech
             */
            speak(){
                let TTS = new TNSTextToSpeech();
                let speakOptions = {
                    text: this.msg[0],
                    speakRate: 1,
                    pitch: 0.9,
                    language: "nl-NL"
                }
                TTS.speak(speakOptions).then(() => {
                    // everything is fine
                }, (err) => {
                    console.log(err);
                });
            },

            /** ------------------------------------------------------------
             * stopSpeech
             * - this will stop the NativeScript voice recoginitision listener
             * - this wil call the getWatsonAwsner function
             */
            stopSpeech(){
                speechRecognition.stopListening();
                this.isListening = false;
                this.getWatsonAnswer();
            }
        }
    // Tests:
    // 1: Juiste standaard watson bericht
    // 2: Ophalen data uit local storage
    // 3: Opslaan data in local storage
    // 4: Goeie resultaat na een aantal vragen
    // 5: Is op het juiste scherm
    // 6: Geeft juiste formaat van vragen weer
    }
</script>

<style scoped lang="scss">
    @import url('~/app.css');

    .main-text{
        font-size: 18;
        text-align: center;
        transition-duration: 3s;
        padding: 10;
    }
    .keyboard-button{
        background-image: url('~/assets/images/keyboard.png');
        border-width: 1;
        border-color: transparent;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
    .speech-button{
        background-image: url('~/assets/images/speech-idle.png');
        border-width: 1;
        border-color: transparent;
        height: 100;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center; 
    }
    .speech-listening{
        background-image: url('~/assets/images/speech-moving.png');
    }
    .sent-text{
        text-align: center;
        padding-top: 20;
    }
    .input-field{
        font-style: italic;
        border-bottom: 1px solid #ccc;
        color: #363636;
    }
</style>
