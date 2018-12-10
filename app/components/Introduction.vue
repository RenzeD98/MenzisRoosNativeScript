<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105382" actionBarHidden="true" >
            <!-- <Button text="Man" class="custombutton" @tap="onButtonTap" />
            <Button text="Vrouw" class="custombutton" @tap="onButtonTap" /> -->
        <GridLayout columns="*, *, *, *, *, *" rows="*, *, *, *, *, *">
            <Label textWrap="true" col="1" row="1" colSpan="4" class="introtxt">
                <FormattedString>
                    <Span text="Hallo, ik ben uw virtuele assistent, maar u mag mij Roos noemen. Maak hier uw profiel aan!" />
                </FormattedString>
            </Label>
            <Button text="Man" col="1" row="2.5" colSpan="2" class="custombutton" @tap="onButtonTap" />
            <Button text="Vrouw" col="3" row="2.5" colSpan="2" class="custombutton" @tap="onButtonTap" />
            <DatePicker class="birthdate" color="white" :day="currentDay" :month="currentMonth" :year="currentYear" minDate="01-01-1900" maxDate="2006-12-31" col="1" row="3" colSpan="4" />
        </GridLayout>


    </Page>
</template>

<script>
  import Home from '../components/Home';
  import axios from 'axios';

  export default {
    mounted() {
        this.sendRequest();
    },
    data() {
      return {
        Home: Home,
        msg: 'Test',
        messages: [],
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
        font-size: 24px;
        /* margin: 15%, 15%, 10%, 15%; */
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
        border: 5px solid white ;
        color: white;
        text-transform: none;
        box-shadow: unset;
        outline: unset;
    }

    DatePicker {
        color: white;
    }
</style>
