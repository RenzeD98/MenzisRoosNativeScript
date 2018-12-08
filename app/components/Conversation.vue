<template>
    <Page actionBarHidden="true" statusBarStyle="light">
        
    <GridLayout columns="*, 180, *" rows="*, 160, *, 40, 20">
        <Label class="main-text" :text="msg" row="1" col="1" textWrap="true" />
        <Button class="keyboard-button" @tap="keyboardTap" v-if="!inputToggle" row="3" col="1" />
        <Label class="sent-text" :text="input" row="0" col="1" textWrap="true" v-if="inputSent" @tap="keyboardTap" />
        <TextField ref="txtField" class="input-field" v-model="input" hint="Enter text..." v-if="inputToggle" row="3" col="1" @returnPress="sendInput" returnKeyType="send" />
    </GridLayout>
    </Page>
</template>

<script>

  export default {
    mounted() {
    },
    data() {
        return {
            msg: 'Goedendag, waar kan ik u mee helpen?',
            input: '',
            inputToggle: false,
            inputSent: false
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
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .main-text{
        font-size: 18;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    .keyboard-button{
        height: 40;
        width: 40;
        background-image: url('~/assets/images/keyboard.png');
        background-repeat: no-repeat;
    }
    .sent-text{
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        text-align: center;
        padding-top: 20;
    }
    .input-field{
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        border-bottom: 1px solid #ccc;
    }
</style>
