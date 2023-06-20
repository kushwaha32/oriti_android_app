import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Layout from "../component/superComponent/Layout";
import DropDown from "../component/DropDown";
import DatePicker from "../component/DatePicker";
import { CheckBox } from "react-native-elements";
import globalStyle from "../style/globalStyle";
import CustomButton from "../component/Button";

const IpRenewalRequest = () => {
  const selecOptions = [
    { id: 1, name: "Patent" },
    { id: 2, name: "Trademark" },
    { id: 3, name: "Design" },
  ];

  const [jurisdiction, setJurisdiction] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [fillingDate, setFillingDate] = useState("select date");
  const [fillingOrGrandNO, setFillingOrGrandNO] = useState("");
  const [dueDate, setDueDate] = useState("select date");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onSelect = (item) => {
    setSelectedItem(item);
  };
  const onSubmit = async () => {
    setLoading(true);
    if (
      jurisdiction === "" ||
      selectedItem === "" ||
      fillingDate === "" ||
      fillingOrGrandNO === "" ||
      dueDate === "" ||
      email === ""
    ) {
      setError("Please Enter All Fields");
    } else if (checked) {
      setError("");

      fetch("https://oritipatent.a2zfilingservices.com/api/send-mail", {
        method: "post",
        body: JSON.stringify({
          jurisdiction: jurisdiction,
          selectedItem: selectedItem.name,
          fillingDate: fillingDate,
          fillingOrGrandNO: fillingOrGrandNO,
          dueDate: dueDate,
          email: email,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          response.json().then(function (res) {
            setLoading(false);
            setSuccess("Thank You, We Will Soon Contact You!");
            console.log(res);
          });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError("Something went wrong please try latter!");
        });
    } else {
      setError("Please Confirm You Are Not Robot");
    }
  };
  return (
    <Layout>
      <View style={style.card}>
        <Text style={globalStyle.heading}>IP Renewal Request</Text>
        <View>
          {error ? (
            <Text
              style={[
                globalStyle.labelStyle,
                {
                  color: "red",
                  marginBottom: 20,
                },
              ]}
            >
              {error}
            </Text>
          ) : success ? (
            <Text
              style={[
                globalStyle.labelStyle,
                {
                  color: "green",
                  marginBottom: 20,
                },
              ]}
            >
              {success}
            </Text>
          ) : (
            <Text></Text>
          )}

          <Text
            style={[
              globalStyle.labelStyle,
              {
                marginTop: 0,
              },
            ]}
          >
            Jurisdiction Or Country (Ex.CH){" "}
            <Text style={globalStyle.starColor}>*</Text>
          </Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={(val) => setJurisdiction(val)}
          />
        </View>
        <DropDown
          value={selectedItem}
          option={selecOptions}
          onSelect={onSelect}
        />
        <DatePicker
          dateComm={fillingDate}
          setDateComm={setFillingDate}
          label="Filing Date (DD/MM/YYYY)"
        />

        <View>
          <Text style={globalStyle.labelStyle}>
            Filing Or Grant Number <Text style={globalStyle.starColor}>*</Text>
          </Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={(val) => setFillingOrGrandNO(val)}
          />
        </View>

        <DatePicker
          dateComm={dueDate}
          setDateComm={setDueDate}
          label="Due Date (DD/MM/YYYY)"
        />

        <View>
          <Text style={globalStyle.labelStyle}>
            Your Email <Text style={globalStyle.starColor}>*</Text>
          </Text>
          <TextInput
            style={[
              globalStyle.input,
              {
                marginBottom: 17,
              },
            ]}
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View>
          <CheckBox
            style={style.checkSty}
            title="I AM NOT A ROBOT"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </View>

        <CustomButton text="submit" onPress={onSubmit} loading={loading} />
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  card: {
    marginTop: 20,
    width: "95%",
    backgroundColor: "#fff",
    elevation: 1,
    shadowColor: "#52006A",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  datePicker: {
    backgroundColor: "#fafafa",
    padding: 13,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: "#ddd",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowImage: {
    height: undefined,
    width: 40,
    aspectRatio: 2,
  },
  checkSty: {
    backgroundColor: "#fff",
    width: "100%",
  },
});

export default IpRenewalRequest;
