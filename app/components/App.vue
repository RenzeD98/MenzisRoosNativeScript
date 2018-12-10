<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105D94" >
        <ActionBar title="Welcome to NativeScript-Vue!"></ActionBar>
        <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
            <!-- <Label v-for="message in messages" class="message" v-bind:text="msg" flexGrow="1" backgroundColor="#43b883"/> -->
            <Button text="Druk hier op"  v-on:tap="$navigateTo(Home)" />
        </FlexboxLayout>
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

<style scoped lang="scss">
    ActionBar {
        background-color: white;
        color: black;
    }

    .grid-1 {
        background-color: white;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .button {
        height: 30;
        width: 50;
    }
</style>
