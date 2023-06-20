import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Layout from "../component/superComponent/Layout";

const AgencyFees = () => {
  return (
    <Layout>
      <View style={style.card}>
        <Text style={style.heading}>Agency Fees</Text>
        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 350.00 for filings till
          smooth registration and CHF 280.00 for change of names of Patents,
          Trademarks and Designs in CH and WIPO
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 500.00 for the filing of
          International Trademarks
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 280.00 for the renewal of
          Trademarks and Designs in CH
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 950.00 for Preliminary
          Searches of Figurative Trademarks in CH (FREE for verbal trademarks in
          CH see www.swissreg.ch)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text> CHF 120.00 for filing
          Validation of European Patents in CH/LI
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 180.00 for the replying to
          Official Actions and/or Oppositions "ready to file" before Bern
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>From CHF 35.00 to CHF 60.00 for
          the renewal of Patents in each Country depending on the quantity of
          cases entrusted in one year
        </Text>

        <Text style={style.textSm}>
          We may pay Annuities in CH and Worldwide at a special price (our
          Agency Fees) as following:
        </Text>

        <Text style={style.textSm}>
          - from No. 1 to 50 CHF 60,00/year for each renewal made No. 5 working
          days before the due date;
        </Text>

        <Text style={style.textSm}>
          - from No. 51 to 100 CHF 50,00/year for each renewal made No. 5
          working days before the due date;
        </Text>

        <Text style={style.textSm}>
          - from No. 101 to 500 CHF 45,00/year for each renewal made No. 5
          working days before the due date;
        </Text>

        <Text style={style.textSm}>
          - from No. 501 to 1000 CHF 40,00/year for each renewal made No. 5
          working days before the due date;
        </Text>

        <Text style={style.textSm}>
          - from No. 1001 and more CHF 35,00/year for each renewal made No. 5
          working days before the due date;
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Kindly take note that a good
          part of our renewals may be made outside CH by our trusted Local
          Patent Agents and/or by Renewal Companies “ad hoc” (but not resident
          in “Black List” Countries) with whom we have an Annuity Agreement
          otherwise directly in single jurisdictions permitting you to not pay
          any local Agent Agency Fees.
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 140.00 for the request of
          Legal copies before Bern (delivery expenses to be defined)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>CHF 150.00/hour (1st hour free)
          and CHF 100.00/hour for following hours for advices as consultant,
          training as teacher and coach
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>
            “Government Fees” and “Foreign Local Agent expenses” will be
            included in invoice (cost breakdown), if any. Discounts on our
            Agency Fees may be granted depending on the number of cases
            entrusted to us during 1 year.
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
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    color: "#525252",
    fontWeight: "400",
    marginBottom: 40,
  },
  text: {
    fontSize: 17,
    fontFamily: "poppins-regular-400",
    color: "#555",
    textAlign: "justify",
    lineHeight: 30,
    marginBottom: 15,
  },
  textSm: {
    fontSize: 13,
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
    marginLeft: 12,
  },
});

export default AgencyFees;
