import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import Menu from "./Menu";
import Layout from "../component/superComponent/Layout";
import * as SplashScreen from "expo-splash-screen";
import { View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const getFonts = () =>
  Font.loadAsync({
    "poppins-extralight-200": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "poppins-light-300": require("../../assets/fonts/Poppins-Light.ttf"),
    "poppins-medium-500": require("../../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "poppins-regular-400": require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-thin-100": require("../../assets/fonts/Poppins-Thin.ttf"),
  });

const Home = (props) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const rowOne = [
    {
      id: 1,
      navigation: "About Us",
      text: "About Us",
      imgName: require("../../assets/aboutus.png"),
    },
    {
      id: 2,
      navigation: "IP Renewal",
      text: "IP Renewal Request",
      imgName: require("../../assets/appliaction.png"),
    },
  ];
  const rowTwo = [
    {
      id: 1,
      navigation: "IP Services",
      text: "IP Services",
      imgName: require("../../assets/patient.png"),
    },
    {
      id: 2,
      navigation: "Power of Attorney",
      text: "Power of Attorney",
      imgName: require("../../assets/appliaction.png"),
    },
  ];
  const rowThree = [
    {
      id: 1,
      navigation: "Agency Fees",
      text: "Agency Fees",
      imgName: require("../../assets/ageny.png"),
    },
    {
      id: 2,
      navigation: "Links",
      text: "Links",
      imgName: require("../../assets/link.png"),
    },
  ];
  const rowFour = [
    {
      id: 1,
      navigation: "Contact Us",
      text: "Contact Us",
      imgName: require("../../assets/contatus.png"),
    },
  ];

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Layout>
        <Menu rowData={rowOne} />
        <Menu rowData={rowTwo} />
        <Menu rowData={rowThree} />
        <Menu rowData={rowFour} />
      </Layout>
    </View>
  );
};

export default Home;
