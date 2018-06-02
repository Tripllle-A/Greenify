import React from "react";
import Infoslider from "react-native-infoslider";
import { ScrollView,StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,Linking} from "react-native";

export default class Intro extends React.Component {
    constructor(){
    super();
    //all the data save before sent in state
    this.state={
         data:[
          {
          title:"GreenifyApp",
          text:"",
          image: {uri:"https://s22.postimg.cc/aoeyd1x6p/9de350d9-46a0-4e29-8751-1a6a842fbe42.png"}},
          {
          title:"What is GreenifyApp",
          text:"Greenify is a mobile application created to encourage people to make nice gardens in their houses, a wonderful list of plants will be exist with description to how take care with them.",
          image: {uri:"https://opimedia.azureedge.net/-/media/images/men/editorial/articles/magazine-articles/2018/04-01/top-plants-for-companion-planting/companion-1-jpg.jpg"}},
          {
          title:"Why GreenifyApp",
          text:"GreenifyApp helps you and gives you instruction how to let your plants grow and how to take care with them,how to plant your plants and more.",
          image: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25qBQfw-dudK4A1B_VuOymWhbTabSbVNTJp1yvJFDFE393qBMIQ"}},
          {
          title:"Our feature",
          text:"In GreenifyApp you can get a notification where ever you are to reminde you to water your plants.",
          image: {uri:"https://media.istockphoto.com/photos/young-plants-picture-id501061554?k=6&m=501061554&s=612x612&w=0&h=5lFP3jXdahDsZNXX95sG5y5qUluP8DgwIJ5py1EdFJg="}},

      ]

    };
  }

  render() {
    return (

      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
       <Infoslider
        data={this.state.data}
        showDots={false}
        activeDotColor="#04B4AE"
        titleColor="#000"
        textColor="#666"
        backgroundColor="red"
        loop={true}
        autoplay={true}
        autoplayTimeout={4}/>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", flex: 1}}>
          <View style={styles.margin}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={styles.button}>
              <Text>Sign In</Text>
           </TouchableOpacity>
          </View>
        <View>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")} style={styles.button}>
              <Text>Sign Up</Text>
           </TouchableOpacity>
          </View>
        </View>
          </ScrollView>
         <View style={{flex: 3, flexDirection: 'row',justifyContent: "center"}}>
       <Text style={{fontSize:20,paddingTop:7}}>
        Join us:
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')} >
        <Image source={{uri:'http://logok.org/wp-content/uploads/2014/10/Facebook-logo-f.png'}} style={{width: '33%', height: 45,width:40}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://twitter.com')}>
         <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png'}} style={{width: '33%', height: 45,width:40}} />
        </TouchableOpacity>
      </View>
        </View>

    );
  }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 15,
    justifyContent: "center",
  },
   input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
   },
   margin: {
    marginRight: 15,

   },
   text:{
    fontSize:50,
    textAlign:"center",
    paddingBottom:60,
   },
 button: {
    padding:15,
    borderWidth:1,
    borderRadius:20,
    marginRight:10,
    marginLeft:10,
    backgroundColor:'#0bba22'
  },
  contentContainer:{
    paddingVertical: 20
  }
});
