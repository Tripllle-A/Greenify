import React from "react";
import Infoslider from "react-native-infoslider";
import { ScrollView,StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from "react-native";

export default class Intro extends React.Component {
    constructor(){
    super();
    //all the data save before sent in state
    this.state={
         data:[
          {
          title:"Hello World", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: {uri:"https://cdn-blog.credihealth.com/wp-content/uploads/2017/11/Indoor-Air-Purifying-Plants-India-660x330.jpg"}},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: {uri:"https://opimedia.azureedge.net/-/media/images/men/editorial/articles/magazine-articles/2018/04-01/top-plants-for-companion-planting/companion-1-jpg.jpg"}},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25qBQfw-dudK4A1B_VuOymWhbTabSbVNTJp1yvJFDFE393qBMIQ"}},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTGJex1uCNQGNdAgaL1SGQx4XXHhFo2FXdo3midbjGB7W1t8O"}},
          
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
        autoplayTimeout={3}/>
        </View>
        <View style={styles.container}>
        <Image source={{uri:"https://www.maximumventure.ca/wp-content/uploads/2017/04/greenify-logo.jpg"}} style={{width: 400, height: 125}}/>
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
        </View>

    );
  }



} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   
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
    padding:20,
    borderWidth:1,
    backgroundColor:"green"
  },
  contentContainer:{
    paddingVertical: 20
  }
});
