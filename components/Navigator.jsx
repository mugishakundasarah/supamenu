import { useEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "../Screens/Signin"
import Signup from "../Screens/Signup"
const Navigator = () => {
    return <AppNavigator />
}

const AuthNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
        >
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false }}/>
            <Stack.Screen name="SignUp" component={Signup} options={{headerShown: false}}/>
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