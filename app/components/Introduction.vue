<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105382" actionBarHidden="true" >
        <GridLayout columns="*, *, *, *, *, *" rows="*, *, *, *, *, *, *, *, *">
            <Label textWrap="true" col="1" row="1" colSpan="4" rowSpan="2" class="introtxt">
                <FormattedString>
                    <Span text="Hallo, ik ben uw virtuele assistent, maar u mag mij Roos noemen. Maak hier uw profiel aan!" />
                </FormattedString>
            </Label>
            <Button text="Man" col="1" :class="{'buttonselected' : gender == 'male'}" row="4" colSpan="2" class="custombutton" @tap="chooseGender('male')" />
            <Button text="Vrouw" col="3" :class="{'buttonselected' : gender == 'female'}" row="4" colSpan="2" class="custombutton" @tap="chooseGender('female')" />
            <DatePicker ref="date" class="birthdate" id="date" color="white" minDate="01-01-1900" maxDate="2006-12-31" col="1" row="5" colSpan="4" v-model="birthDate"/>
            <Button text="Verder" col="2" row="9" colSpan="2" @tap="saveDateAndContinue" />
        </GridLayout>


    </Page>
</template>

<script>
  import Conversation from '../components/Conversation';
  import axios from 'axios';
  var LS = require("nativescript-localstorage");

  export default {
    mounted() {
        this.sendRequest();
    },
    data() {
      return {
        Conversation: Conversation,
        msg: 'Test',
        messages: [],
        birthDate: "",
        gender: ''
      }
    },
    methods: {
        sendRequest() {
            var options = {
                method: 'GET',
                url: 'https://gateway-fra.watsonplatform.net/assistant/api/v1/workspaces/1cd29412-4a54-42d6-bdc8-c165cb69bb50/message?version=2018-09-20',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Basic YXBpa2V5OlkwdzNwcW5OamFCSDlzYmZOY1NPNFBtZkxhRC1NTEJHZ2ZsaG9HcTcxQlBG",
                },
            };
            axios.get(options).then(response => {
                this.messages = response.output.text
            });
        },
        chooseGender(gender) {
            localStorage.setItem('gender', gender);
            this.gender = gender;
        },
        saveDateAndContinue() {
            localStorage.setItem('birthdate', this.birthDate);
            this.$navigateTo(this.Conversation);
        }
    }
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto');

    ActionBar {
        background-color: white;
        color: black;
    }

    page {
        background-color: #105D94;
    }

    .introtxt {
        font-family: 'Roboto', sans-serif;
        color: white;
        text-align: center;
        font-size: 20;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .birthdate {
        color: white;
        text-align: center;
    }

    .custombutton {
        height: 50;
        background-color: #105D94;
        border-width: 2;
        border-color: white;
        border-radius: 10;
        color: white;
        text-transform: none;
        box-shadow: unset;
        outline: unset;
        margin-right: 20px;
    }

    .buttonselected{
        background-color: white;
        color: #105D94;
    }

    Button {
        height: 50;
        color: #105D94;
    }

    Datepicker {
        font-size: 20;
    }
</style>
