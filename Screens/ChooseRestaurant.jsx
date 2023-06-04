import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Restaurant = ({ navigation }) => {
    const contents = [
        { id: '12', name: 'dsfa', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
        { id: '12', name: 'dsfa', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
        { id: '12', name: 'dsfa', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
        { id: '12', name: 'dsfa', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
        { id: '12', name: 'dsfa', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
    ];
    return (
        <ScrollView>
            <View>
                {contents.map((c) => (
                    <TouchableOpacity
                        key={c.id}
                        onPress={() => {
                            navigation.navigate('RestaurantMenu', { restaurant: c });
                        }}
                    >
                        <View style={styles.container}>
                            <Image
                                style={styles.containerImage}
                                source={{ uri: 'https://picsum.photos/200/300/?blur' }}
                            />
                            <View style={styles.top}>
                                <Text style={styles.heading}>{c.name}</Text>
                                <Text style={styles.p}>
                                    {c.address}, {c.phone},{c.email}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default function ChooseRestaurant({ navigation }) {
    return (
        <SafeAreaView>
            <SafeAreaView style={styles.mainView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Search');
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            gap: 10,
                            alignItems: "center",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            borderBottomColor: '#DADADA',
                            borderBottomWidth: 1,
                        }}
                    >
                        <MaterialCommunityIcons name='chevron-left' style={{backgroundColor: "#F8F8FB", padding: 4}} size={28} color={"#f7941d"}/>
                        <Text style={{fontSize: 14, color: "#777"}}>Search ...</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.mainHeader}>Nearby Restaurants</Text>
                <View style={styles.RestaurantContainer}>
                    <Restaurant navigation={navigation} />
                </View>
            </SafeAreaView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F8F8FB',
        borderRadius: 10,
        width: 370,
        height: 80,
        marginLeft: 20,
        marginBottom: 20,
        opacity: 0.9,
    },
    RestaurantContainer: {
        marginTop: 25,
    },
    heading: {
        color: '#000',
        fontSize: 20,
        marginLeft: 20,
    },
    containerImage: {
        width: 70,
        height: 68,
        borderRadius: 15,
        marginLeft: 4,
        marginTop: 10,
    },
    p: {
        color: '#000',
        fontSize: 14,
        marginLeft: 20,
    },
    mainHeader: {
        marginLeft: 20,
        color: '#F7941D',
        marginTop: 30,
        fontSize: 14,
    },
    mainView: {
        marginTop : 25,
        // paddingBottom: 100,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    },
    top: {
        marginTop: 10,
    },
});
