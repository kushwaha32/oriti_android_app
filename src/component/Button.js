import { TouchableOpacity, View,Text, StyleSheet } from "react-native";


const CustomButton = ({ text, onPress, loading }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
               <Text style={styles.buttonText}>{loading ? "loading...": text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
       borderRadius: 4,
       paddingVertical: 14,
       paddingHorizontal: 10,
       backgroundColor: "#4272d7",
       marginTop: 25
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase"
    }
});

export default CustomButton;