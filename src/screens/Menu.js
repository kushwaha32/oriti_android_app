import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Menu = ({rowData}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.menuContainer}>
           {rowData.map((el,i) => {
               return(
                   <View style={styles.boxes} key={i}>
                        <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() => navigation.navigate(`${el.navigation}`)}
                        >
                             <Image 
                                style={styles.logoImg}
                                resizeMode="contain"
                                source={el.imgName}
                                />
                               
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>
                            {el.text}
                        </Text>
                   </View>
               )
           })}
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        // display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    boxes:{
      width: "40%",
      margin: 14
    },
    logoImg:{
        height: undefined,
        width: "25%",
        aspectRatio: 1,
        
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingVertical: 23,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#52006A',
        marginBottom: 15
    },
    textStyle:{
        textAlign: "center",
        color: "#FFC107",
        fontSize: 15
    }
});

export default Menu;