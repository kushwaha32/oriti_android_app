import {StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Layout = (props) => {
    return(
        <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
       <View style={styles.homeTop}>
      
         
           <Image 
             style={styles.headerImage}
             resizeMode="contain"
             source={require("../../../assets/banner.jpeg")}
           />
         

          {props.children}
          
          
       </View>  
       </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: "space-between",
      paddingHorizontal: 5,
      backgroundColor: "#ffffff",
      textAlign: "center"
    },
    homeTop: {
       minHeight: "100%",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       marginTop: 12
    },
    headerImage: {
      height: undefined,
      width: "100%",
      aspectRatio: 2,
    },
   
  
  });

export default Layout;