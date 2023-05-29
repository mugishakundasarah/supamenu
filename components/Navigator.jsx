import { useEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from "../Screens/Signin"
import Signup from "../Screens/Signup"
import Search from "../Screens/Search"
import ChooseRestaurant from "../Screens/ChooseRestaurant"
const Navigator = () => {
    return <AppNavigator />
}

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
        >
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false }}/>
            <Stack.Screen name="SignUp" component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name="Scan" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name="ChooseRestaurant" component={ChooseRestaurant} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    useEffect(() => {
        async function getToken() {
            const token = await SecureStore.getItemAsync('token')
            if(token){
                setIsAuthenticated(true)
            }
        }
        getToken()
    }, [])

    if(!isAuthenticated) return <AuthNavigator/>
    return (
        <View>Navigator</View>
    )
}

export default Navigator 