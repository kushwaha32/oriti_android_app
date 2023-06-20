
import React, {component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import globalStyle from "../style/globalStyle";

const DropDown = ({ option, value, onSelect }) => {
    const [showOption, setShowOption] = useState(false)
    
    const onSelectedItem = (val) => {
        setShowOption(false);
        onSelect(val);
    };

    return(
        <View style={style.container}>
             <Text style={globalStyle.labelStyle}>Type Of IP <Text style={globalStyle.starColor}>*</Text></Text>
           <TouchableOpacity
            style= {style.DropDownStyle}
            activeOpacity={0.8}
            onPress={() => setShowOption(!showOption)}
           >
              <Text style={globalStyle.font}>{!!value ? value?.name : "Choose Option"}</Text>
              <Image
               style={[style.arrowImage, {
                   transform: [{rotate: showOption ? "180deg" : "0deg"}]
               }]}
               resizeMode="contain"
               source={require("../../assets/down.png")}
              />
           </TouchableOpacity>
           {showOption && (
                    <View style={style.opContainer}>
                    {option.map((val, i) => {
                        return(
                            <TouchableOpacity
                             key={String(i)}
                             onPress={() => onSelectedItem(val)}
                             style={[style.opItem, {
                                 backgroundColor: value.id == val.id ? "#5897fb" : "#fafafa"
                             }]}
                            >
                              <Text>{val.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                   </View>
           )}
          
        </View>
    )
}

const style = StyleSheet.create({
    container: {
 
    },
    DropDownStyle: {
        backgroundColor: '#fafafa',
        padding: 13,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        borderColor: "#ddd",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    arrowImage: {
        height: undefined,
        width: 40,
        aspectRatio: 2,
        
    },
    opItem: {
        paddingVertical: 8,
        paddingHorizontal: 6
    },
    opContainer: {
        borderWidth: 1,
        borderColor: "#ddd",
    }


})

export default DropDown;