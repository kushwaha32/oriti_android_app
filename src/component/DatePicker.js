import { StyleSheet, Text, View, Button, TextInput, Platform, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import globalStyle from "../style/globalStyle";

const DatePicker = ({setDateComm, dateComm, label}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedData) => {
    const currentDate = selectedData || date;
    setShow(Platform.os === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
      setDateComm(fDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <>
      <Text style={globalStyle.labelStyle}>{label}<Text style={globalStyle.starColor}> *</Text></Text>
      <TouchableOpacity
        style={style.datePicker}
        activeOpacity={0.8}
        onPress={() => showMode("date")}
      >
        <Text style={globalStyle.font}>{dateComm}</Text>
        <Image
          style={style.arrowImage}
          resizeMode="contain"
          source={require("../../assets/calendar.png")}
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

const style = StyleSheet.create({
    datePicker: {
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
    
  }
})

export default DatePicker;