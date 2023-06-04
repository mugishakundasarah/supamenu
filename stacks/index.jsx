import { createStackNavigator } from "@react-navigation/stack";
import colors from "../Utils/colors";
import DashboardScreen from "../Screens/Dashboard";
import CheckoutScreen from "../Screens/Checkout";
import NotificationScreen from "../Screens/Notification";
import SearchScreen from "../Screens/Search";
import ChooseRestaurant from "../Screens/ChooseRestaurant";
import RestaurantMenu from "../Screens/RestaurantMenu";
import RestaurantMenuCart from "../Screens/RestaurantMenuCart";
import BookmarkScreen from "../Screens/Bookmark";
import ShoppingCartScreen from "../Screens/ShoppingCartScreen";
import PaymentSuccess from "../Screens/Payment";

const Stack = createStackNavigator()

const DashboardStack = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: {backgroundColor: "#42f44b"},
                headerTintColor: colors.white,
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}



const NotificationStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Notification"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const SearchStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Search"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChooseRestaurant"
                component={ChooseRestaurant}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RestaurantMenu"
                component={RestaurantMenu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RestaurantMenuCart"
                component={RestaurantMenuCart}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const BookmarkStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Bookmark"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Bookmark"
                component={BookmarkScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const ShoppingCartStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="ShoppingCart"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCartScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PaymentSuccess"
                component={PaymentSuccess}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export {
    DashboardStack,
    NotificationStack,
    SearchStack,
    BookmarkStack,
    ShoppingCartStack,
};
