<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105382" actionBarHidden="true" >
        <TabView :selectedIndex="selectedIndex" selectedTabTextColor="#105D94" tabBackgroundColor="#105D94" tabTextColor="#105D94" translateY="-45">
            <TabViewItem title="Tab 1">
                <Label text="Content for Tab 1" />
            </TabViewItem>
            <TabViewItem title="Tab 2">
                <Label text="Content for Tab 2" />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
    @import url('~/app.css');

    page {
        background-color: #105D94;
    }
</style>
