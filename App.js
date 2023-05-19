import { NavigationContainer } from "@react-navigation/native";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_400Regular_Italic,
  useFonts
} from "@expo-google-fonts/roboto"
import AppLoading from "expo-app-loading"

import Navigator from "./components/Navigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}
