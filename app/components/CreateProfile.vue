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
            <Button :class="{'disabled' : gender == ''}" text="Verder" col="2" row="9" colSpan="2" clearHistory="true" @tap="toNextScreen" />
        </GridLayout>
    </Page>
</template>

<script>
  import Conversation from '../components/Conversation';
  var LS = require("nativescript-localstorage");

  export default {
    data() {
      return {
        Conversation: Conversation,
        msg: 'Test',
        messages: [],
        gender: ''
      }
    },
    methods: {
        toNextScreen() {
            if (this.gender != '') {
                this.$navigateTo(Conversation, {clearHistory: true});
            }
        },
        chooseGender(gender) {
            localStorage.setItem('gender', gender);
            this.gender = gender;
        }
    }
  }
</script>

<style scoped>
    @import url('~/app.css');

    page {
        background-color: #105D94;
    }

    .introtxt {
        font-family: 'Roboto', sans-serif;
        color: white;
        text-align: center;
        font-size: 20;
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
        margin-right: 20px;
    }

    .buttonselected{
        background-color: white;
        color: #105D94;
    }

    .disabled{
        opacity: .5;
    }
</style>
