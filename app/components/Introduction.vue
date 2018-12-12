<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105382" actionBarHidden="true" >
        <GridLayout columns="*, *, *, *, *" rows="*, 30, 50, 15">
            <TabView col="0" row="0" colSpan="5" :selectedIndex="selectedIndex" @selectedIndexChange="selectedIndex = $event.value" selectedTabTextColor="#105D94" tabBackgroundColor="#105D94" tabTextColor="#105D94" translateY="-45" androidSelectedTabHighlightColor="white">
                <TabViewItem title="Tab 1">
                    <GridLayout columns="*, *, *, *, *, *, *, *" rows="*, 150, 15, 90, 15, 80, *">
                        <Image src="~/assets/images/assistent.png" stretch="fill" col="2" row="1" colSpan="4" />
                        <Label textWrap="true" col="1" row="3" colSpan="6" class="subtitle">
                            <FormattedString>
                                <Span text="Uw virtuele doktersassistente" />
                            </FormattedString>
                        </Label>    
                        <Label textWrap="true" col="0" row="5" colSpan="8" rowSpan="2" class="txt">
                            <FormattedString>
                                <Span text="Roos is uw nieuwe virtuele doktersassistente. Zij luistert naar uw klachten en geeft advies over de vervolgstappen die u hierbij kunt nemen." />
                            </FormattedString>
                        </Label>        
                    </GridLayout>
                </TabViewItem>
                <TabViewItem title="Tab 2">
                    <GridLayout columns="*, *, *, *, *, *, *, *" rows="*, 150, 15, 90, 15, 80, *">
                        <Image src="~/assets/images/chat.png" stretch="fill" col="2" row="1" colSpan="4" />
                        <Label textWrap="true" col="1" row="3" colSpan="6" class="subtitle">
                            <FormattedString>
                                <Span text="Advies bij al uw klachten" />
                            </FormattedString>
                        </Label>    
                        <Label textWrap="true" col="0" row="5" colSpan="8" rowSpan="2" class="txt">
                            <FormattedString>
                                <Span text="Roos geeft advies over de medische klachten die u ervaart. Hierdoor krijgt u een helder inzicht in de mogelijke oorzaken en oplossingen." />
                            </FormattedString>
                        </Label>             
                    </GridLayout>
                </TabViewItem>
                <TabViewItem title="Tab 3">
                    <GridLayout columns="*, *, *, *, *, *, *, *" rows="*, 150, 15, 90, 15, 80, *">
                        <Image src="~/assets/images/case.png" stretch="fill" col="2" row="1" colSpan="4" />
                        <Label textWrap="true" col="1" row="3" colSpan="6" class="subtitle">
                            <FormattedString>
                                <Span text="Geen vervanging van uw huisarts" />
                            </FormattedString>
                        </Label>    
                        <Label textWrap="true" col="0" row="5" colSpan="8" rowSpan="2" class="txt">
                            <FormattedString>
                                <Span text="Roos is een doktersassistente en dus geen vervanger van de huisarts. Neem bij twijfel altijd contact op met een medisch specialist." />
                            </FormattedString>
                        </Label>         
                    </GridLayout>
                </TabViewItem>
            </TabView>
            <Image :src="'~/assets/images/progress_0' + ( selectedIndex + 1 ) + '.png'" stretch="fill" height="5" col="1" row="1" colSpan="3" />  
            <Button :class="{'disabled' : selectedIndex != 2}" text="Doorgaan" col="1" row="2" colSpan="3" @tap="agreeAndContinue" />  
        </GridLayout>
    </Page>
</template>

<script>
import CreateProfile from '../components/CreateProfile';

export default {
    data() {
        return {
            selectedIndex: 0,
            selectedTab: 0
        }
    },
    methods: {
        agreeAndContinue() {
            this.$navigateTo(CreateProfile);
        },
        indexChange(e){
            console.log(e);
        }
    }
}
</script>

<style scoped>
    @import url('~/app.css');

    page {
        background-color: #105D94;
    }
    .progress{
        margin-bottom: 15;
    }
    .subtitle {
        font-family: 'Roboto', sans-serif;
        color: white;
        text-align: center;
        font-size: 25;
        margin-top: 25;
        font-weight: bold;
    }   
    .txt {
        font-family: 'Roboto', sans-serif;
        color: white;
        text-align: center;
        font-size: 15;
        font-style: italic;
        line-height: 5;
        margin: 0 40 0 40;
    }
    .disabled{
        opacity: .5;
    }
    
</style>
