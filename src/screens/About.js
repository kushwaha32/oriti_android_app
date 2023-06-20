import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Layout from "../component/superComponent/Layout";
import { Linking } from "react-native";
import globalStyle from "../style/globalStyle";

const About = () => {
  return (
    <Layout>
      <View style={style.card}>
        <Text style={globalStyle.heading}>About Us</Text>
        <Text style={style.text}>
          <Text style={style.textBold}>• FRANCO ORITI</Text>, born in Australia,
          lived in Sydney and has worked in safeguarding, filing and maintaining
          Intellectual Property (I. P.) since 1991.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>University degree in
          International Political Science obtained at University of Milan (IT).
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>He is currently working in this
          capacity in Lugano (CH) after having done so in Milan in
          <Text style={style.textBold}> Montedison Group</Text> and in
          <Text style={style.textBold}> Notarbartolo & Gervasi</Text> and in
          Lugano in<Text style={style.textBold}> N&G Patent Services</Text>.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Has many years' experience,
          throughout the World, in the Renewal of Patents of Invention, Designs,
          Utility Models, Supplementary Protection of Certificates, Textile
          Designs, Plant Varieties and Trademarks.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Has many years' experience,
          throughout the World, in the Renewal of Patents of Invention, Designs,
          Utility Models, Supplementary Protection of Certificates, Textile
          Designs, Plant Varieties and Trademarks.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Since 1999 Franco takes also
          care of filings till the grant and maintenance of I. P. in
          Switzerland.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>He is registered as a "Trademark
          Representative" before the Swiss Federal Patent Office and is also a
          European (n. 4688) and Italian (n. 793M) Trademark and Design
          Attorney.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Has very good skills for
          creating "ad hoc" I. P. Databases for handling Due Dates and Reports.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Has an ability to establish
          plans, for the internal departments of Companies and Patent Firms, to
          manage costs and reduce expenses for all I. P. maintenance fees and
          renewals, Worldwide.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>I. P. Consultant at InnoPark,
          Manno (Canton Ticino), CH{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.innopark.ch/de/")}
          >
            (www.innopark.ch).
          </Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>From March 2015 he is an "IPMA
          Certified Project Manager", Level D, n. IPMA-D-2015-8025
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.vzpm.ch/en/")}
          >
            (www.vzpm.ch).
          </Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>From May 2016 "Business Partner
          for I. P." of Qualicon, Camorino
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://www.qualiconsulenze.ch/")}
          >
            (www.qualiconsulenze.ch).
          </Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>I. P. Coach for StartCup Ticino
          2017
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL("http://www.startcup-ticino.ch/website/home")
            }
          >
            (www.startcup-ticino.ch).
          </Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Languages: English
          (mother-tongue), Italian (mother-tongue), French (good), German
          (scholastic) and Russian (scholastic).
         
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Since 1998 Italian Red Cross Volonteer.
         
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>For further details kindly click on {" "}
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/franco-oriti-b820675b/?locale=de_DE")
            }
          >
             <Image 
                style={style.aboutLinkIn}
                resizeMode="contain"
                source={require("../../assets/LinkedIn.png")}
                />
          </Text>
        </Text>
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
    paddingHorizontal: 20
  },
  
  text: {
    fontSize: 17,
    fontFamily: "poppins-regular-400",
    color: "#555",
    textAlign: "justify",
    lineHeight: 30,
    marginBottom: 15,
  },
  textBold: {
    fontFamily: "poppins-bold",
    fontSize: 17,
    color: "#000",
  },
  aboutLinkIn: {
      marginLeft: 12
  }
});

export default About;
