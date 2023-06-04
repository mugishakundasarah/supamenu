import { useEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image, TouchableOpacity, View} from "react-native"
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'


import SignIn from "../Screens/Signin"
import Signup from "../Screens/Signup"
import Search from "../Screens/Search"
import ChooseRestaurant from "../Screens/ChooseRestaurant"
import SearchIcon from "../assets/search.png"
import { CheckoutStack, SearchStack, ShoppingCartStack } from "../stacks"

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
        </Stack.Navigator>
    )
}

const Tabs = createBottomTabNavigator()

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
        <Tabs.Navigator
            initialRouteName="Scan"
            screenOptions={{
                headerShown:false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    marginHorizontal: 5,
                    position: 'absolute',
                    borderColor: 'white',
                    height: "8%"
                },
                topBarButton: (props) => {
                    return (
                        <View {...props}>
                            <View 
                                style={{
                                    minWidth: 50,
                                    minHeight: 50,
                                    borderRadius: 10,
                                    backgroundColor: props.accessibilityState.selected
                                        ? '#f7941d'
                                        : 'white',
                                }}
                            >
                                <TouchableOpacity {...props}/>
                            </View>
                        </View>
                    )
                },
                topBarShowLabel: false, 
                topBarActiveTintColor: '#f7941d'
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Search}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="home" 
                            size={25}
                            color={color}
                        />
                    ),
                    tabBarShowLabel: false 
                }}
            />
            <Tabs.Screen
                name="Notification"
                component={Search}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="bell-badge-outline"
                            size={25}
                            color={color}
                        />
                    ),
                    tabBarShowLabel: false 
                }}
            />
            <Tabs.Screen
                name="Scan"
                component={SearchStack}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons 
                            name="line-scan" 
                            size = {25}
                            color={color}
                        />
                    ),
                    tabBarShowLabel: false 
                }}
            />
            <Tabs.Screen
                name="History"
                component={Search}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="progress-clock"
                            size={25}
                            color={color}
                        />
                    ),
                    tabBarShowLabel: false 
                }}
            />
            <Tabs.Screen
                name="Cart"
                component={ShoppingCartStack}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="shoppingcart" 
                            size={25}
                            color={color}
                        />
                    ),
                    tabBarShowLabel: false 
                }}
            />
        </Tabs.Navigator>
    )
}

export default Navigator 