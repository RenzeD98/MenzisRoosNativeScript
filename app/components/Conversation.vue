<template>
    <Page actionBarHidden="true" statusBarStyle="light">
        
    <GridLayout columns="*, 180, *" rows="*, 160, *, 40, 20">
        <Label class="main-text roboto" :text="msg" row="1" col="1" textWrap="true" />
        <Button class="keyboard-button" @tap="keyboardTap" v-if="!inputToggle" row="3" col="1" />
        <Label class="sent-text roboto-italic" :text="input" row="0" col="1" textWrap="true" v-if="input != ''" @tap="keyboardTap" />
        <Button class="speech-button" :class="{'speech-listening' : isListening}" @tap="startSpeech()" col="0" row="2" colSpan="3"></Button>
        <TextField ref="txtField" class="input-field roboto" v-model="input" hint="Enter text..." v-if="inputToggle" row="3" col="1" @returnPress="sendInput" returnKeyType="send" />
    </GridLayout>
    </Page>
</template>

<script>
    import { SpeechRecognition } from "nativescript-speech-recognition";
    var speechRecognition = new SpeechRecognition();

    export default {
        mounted() {
        },
        data() {
            return {
                msg: 'Goedendag, waar kan ik u mee helpen?',
                input: '',
                inputToggle: false,
                inputSent: false,
                isListening: false
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
            },
            editInput(){
                
            },
            getWatsonAnswer(){
                
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
                        }
                    },
                }).then(
                    (started) => { 
                        console.log(`started listening`);
                        this.isListening = true;
                    },
                    (errorMessage) => { console.log(`Error: ${errorMessage}`); }
                );
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
    }
    .keyboard-button{
        height: 40;
        width: 40;
        background-image: url('~/assets/images/keyboard.png');
        background-repeat: no-repeat;
    }
    .speech-button{
        background-image: url('~/assets/images/speech-idle.png');
        background-repeat: no-repeat;
        padding-bottom: 10;
        background-position: 0 -120;
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
