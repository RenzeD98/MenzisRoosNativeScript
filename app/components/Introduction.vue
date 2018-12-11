<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105382" actionBarHidden="true" >
        <TabView :selectedIndex="selectedIndex" selectedTabTextColor="#105D94" tabBackgroundColor="#105D94" tabTextColor="#105D94" translateY="-45">
            <TabViewItem>
                <GridLayout columns="115, 115" rows="95, 115">
                    <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
                    <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
                    <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
                    <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
                </GridLayout>
            </TabViewItem>
            <TabViewItem>
                <GridLayout columns="43, 115" rows="115, 115">
                    <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
                    <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
                    <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
                    <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
                </GridLayout>
            </TabViewItem>
            <TabViewItem>
                <GridLayout columns="115, 115" rows="115, 115">
                    <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
                    <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
                    <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
                    <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
                </GridLayout>
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
