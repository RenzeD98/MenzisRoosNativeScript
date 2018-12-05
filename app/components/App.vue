<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"></ActionBar>
        <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
            <Label class="message" :text="msg" flexGrow="1" backgroundColor="#43b883"/>
            <Button text="Druk hier op"  @tap="buttonTap" />
        </FlexboxLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Check je geaardheid hier!'
      }
    },
    methods: {
        buttonTap() {
            // this.msg = 'Ha je bent gay!';
            this.$navigateTo('Home');
        }
    }
  }
</script>

<style scoped lang="scss">
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .grid-1 {
        background-color: green;
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
