<template>
    <Page actionBarHidden="true" statusBarStyle="light">
        
    <GridLayout columns="*, *, *" rows="*, *, *, 100, 60">
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
    require( "nativescript-localstorage" );
    const httpModule = require("http");
    var speechRecognition = new SpeechRecognition();

    export default {
        data() {
            return {
                msg: 'Hallo, waarmee kan ik u helpen',
                input: '',
                inputToggle: false,
                inputSent: false,
                isListening: false,
                context: null,
            }
        },
        methods: {
            keyboardTap(){
                this.inputToggle = true;
                this.$nextTick(() => this.$refs.txtField.nativeView.focus())
            },
            sendInput(){
                this.inputSent = true;
                this.inputToggle = false;
                this.getWatsonAnswer();
            },
            editInput(){
                
            },
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
                }, (e) => {
                    this.msg = JSON.stringify(e);
                });
            },
            startOrStopSpeech(){
                if (this.isListening) {
                    this.stopSpeech();
                } else{
                    this.startSpeech();
                }
            },
            startSpeech(){
                speechRecognition.startListening({
                    // optional, uses the device locale by default
                    locale: "nl-NL",
                    returnPartialResults: true,
                    // this callback will be invoked repeatedly during recognition
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
            stopSpeech(){
                speechRecognition.stopListening();
                this.isListening = false;
            }
        }
    // Tests:
    // 1: Juiste standaard watson bericht
    // 2: Ophalen data uit local storage
    // 3: Opslaan data in local storage
    // 4: Goeie resultaat na een aantal vragen
    // 5: Is op het juiste scherm
    // 6: Geeft juiste formaat van vragen weer
    // 7: Datum input
    }
</script>

<style scoped lang="scss">
    @import url('~/app.css');

    .main-text{
        font-size: 18;
        text-align: center;
        transition-duration: 3s;
    }
    .keyboard-button{
        height: 40;
        width: 40;
        padding: 10;
        background-image: url('~/assets/images/keyboard.png');
        background-repeat: no-repeat;
    }
    .speech-button{
        background-image: url('~/assets/images/speech-idle.png');
        background-repeat: no-repeat;
        padding-bottom: 10;
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
    }
</style>
