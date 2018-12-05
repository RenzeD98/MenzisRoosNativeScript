<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" v-on:tap="$navigateBack(App)" />
        </ActionBar>
            <Label class="message" text="Banaan" flexGrow="1" backgroundColor="#352343"/>
    </Page>
</template>

<script>
    import App from '../components/App';
    export default {
        name: "Home",
        data() {
            return {
                App: App,
            }
        }
    }
</script>

<style scoped>

</style>