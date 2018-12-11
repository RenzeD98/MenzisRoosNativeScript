<template>
    <Page statusBarStyle="dark" androidStatusBarBackground="#105382" actionBarHidden="true" >
        <TabView :selectedIndex="selectedIndex" selectedTabTextColor="#105D94" tabBackgroundColor="#105D94" tabTextColor="#105D94" translateY="-45" androidSelectedTabHighlightColor="white">
            <TabViewItem title="Tab 1">
              <GridLayout columns="*, *, *, *, *, *, *, *" rows="*, *, *, *, *, *, *, *, *, *, *, *">
                <Image src="~/assets/images/assistent.png" stretch="fill" col="2" row="3" colSpan="4" rowSpan="3" />
                <Label textWrap="true" col="1" row="6" colSpan="6" rowSpan="2" class="subtitle">
                    <FormattedString>
                        <Span text="Uw virtuele doktersassistente" />
                    </FormattedString>
                </Label>    
                <Label textWrap="true" col="0" row="8" colSpan="8" rowSpan="2" class="txt">
                    <FormattedString>
                        <Span text="Roos is uw nieuwe virtuele doktersassistente. Zij luistert naar uw klachten en geeft advies over de vervolgstappen die u hierbij kunt nemen." />
                    </FormattedString>
                </Label>             
              </GridLayout>
            </TabViewItem>
            <TabViewItem title="Tab 2">
              <GridLayout columns="*, *, *, *, *, *, *, *" rows="*, *, *, *, *, *, *, *, *, *, *, *">
                <Image src="~/assets/images/chat.png" stretch="fill" col="2" row="3" colSpan="4" rowSpan="3" />
                <Label textWrap="true" col="1" row="6" colSpan="6" rowSpan="2" class="subtitle">
                    <FormattedString>
                        <Span text="Advies bij al uw klachten" />
                    </FormattedString>
                </Label>    
                <Label textWrap="true" col="0" row="8" colSpan="8" rowSpan="2" class="txt">
                    <FormattedString>
                        <Span text="Roos geeft advies over de medische klachten die u ervaart. Hierdoor krijgt u een helder inzicht in de mogelijke oorzaken en oplossingen." />
                    </FormattedString>
                </Label>           
              </GridLayout>
            </TabViewItem>
            <TabViewItem title="Tab 3">
              <GridLayout columns="*, *, *, *, *, *, *, *" rows="*, *, *, *, *, *, *, *, *, *, *, *">
                <Image src="~/assets/images/case.png" stretch="fill" col="2" row="3" colSpan="4" rowSpan="3" />
                <Label textWrap="true" col="1" row="6" colSpan="6" rowSpan="2" class="subtitle">
                    <FormattedString>
                        <Span text="Geen vervanging van uw huisarts" />
                    </FormattedString>
                </Label>    
                <Label textWrap="true" col="0" row="8" colSpan="8" rowSpan="2" class="txt">
                    <FormattedString>
                        <Span text="Roos is een doktersassistente en dus geen vervanger van de huisarts. Neem bij twijfel altijd contact op met een medisch specialist." />
                    </FormattedString>
                </Label>  
                <Button text="Doorgaan" col="2" row="12" colSpan="4" @tap="agreeAndContinue" />          
              </GridLayout>
            </TabViewItem>            
        </TabView>
    </Page>
</template>

<script>
import CreateProfile from '../components/CreateProfile';

  export default {
    data() {
      return {
      }
  },
  methods: {
    agreeAndContinue() {
        this.$navigateTo(CreateProfile);
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
        font-size: 25;
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
    
</style>
