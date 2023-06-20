import { StyleSheet } from "react-native"

const globalStyle = StyleSheet.create({
    heading: {
        textAlign: "center",
        fontFamily:"poppins-regular-400",
        fontSize: 24,
        color: "#525252",
        fontWeight: "400",
        marginBottom: 40,
      },
      labelStyle: {
          color: "#000",
          fontFamily: "poppins-light-300",
          letterSpacing: 1,
          fontSize: 15,
          marginTop: 12,
      },
      input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
        color: "#000",
        fontFamily: "poppins-light-300",
        letterSpacing: 1,
        padding: 8,
        marginTop: 10,
        width: "100%",
        backgroundColor: "#fafafa",
      },
      font: {
        fontFamily: "poppins-light-300",
        color: "#555",
        letterSpacing: 1
      },
      starColor: {
        color: "rgb(255, 0, 0)"
      },
      card: {
        marginTop: 20,
        width: "95%",
        backgroundColor: "#fff",
        elevation: 1,
        shadowColor: "#52006A",
        paddingVertical: 20,
        paddingHorizontal: 20,
      },
})


export default globalStyle;