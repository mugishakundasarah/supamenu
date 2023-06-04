import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ShoppingCartScreen = ({navigation}) => {
    const [contents, setContents] = useState([
        { id: '12', quantity: 1,amount: "Frw 5,000",mass: 12.5,name: 'Tom Yummy', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
        { id: '13', quantity: 1,amount: "Frw 5,000",mass: 12.5,name: 'Singapore Sling', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
        { id: '14', quantity: 1,amount: "Frw 5,000",mass: 12.5,name: 'White Russian', address: 'sdfa', phone: 'dsfa', email: 'dsfa' },
    ]);

    
    return (
        <SafeAreaView style={{backgroundColor: "white", display: "flex", alignItems: "center"}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialCommunityIcons name='chevron-left' size={30} color={"#f7941d"} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headerMainText}>Choose Kigali</Text>
                    <Text style={styles.headerText}>Drinks</Text>
                </View>
                {contents.map((c) => (
                    <TouchableOpacity
                        key={c.id}
                        onPress={() => {
                            navigation.navigate('RestaurantMenu', { restaurant: c });
                        }}
                    >
                        <View 
                            style={styles.productContainer}
                        >
                            <Image
                                style={styles.productImage}
                                source={{ uri: 'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE' }}
                            />
                            <View style={styles.contentContainer}>
                                <Text style={styles.p}>
                                    {c.address}, {c.phone},{c.email}
                                </Text>
                                <Text style={{fontWeight: "bold", marginLeft: 20, fontSize: 13}}>
                                    {c.name} - {c.mass}
                                </Text>
                                <View style={{width: "80%" , display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{fontWeight: "bold", marginLeft: 20, color: "#f7941d", fontSize: 16, marginTop: 4}}>
                                        {c.amount}
                                    </Text>
                                    <View style={styles.countContainer}>
                                        <Icon name="minus" size={24} color={"#f7941d"} />
                                        <Text style={{fontWeight: "bold"}}>{c.quantity}</Text>
                                        <Icon name="plus" size={24} color={"#f7941d"} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 25, paddingVertical: 35}}>
                    <Text style={{color: "#f7941d", fontSize: 18, fontWeight: "bold"}}>more drinks</Text>
                    <Icon name='arrow-right' color={"#f7941d"} size={24}/>
                </TouchableOpacity>

                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>Total</Text>
                    <Text style={{fontWeight: "bold", color: "#f7941d", fontSize: 17}}>Frw 16,000</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Checkout')}
                >
                    <Text style={{color: "white", fontSize: 17, fontWeight: "bold"}}>Proceed to checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: "100%",
        marginTop: 40,
    },
    backButton: {
        width: 50,
        height: 50,
        padding: 5,
        backgroundColor: "#F8F8FB",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        display: "flex", 
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 8,
        marginTop: 12,
    },
    headerMainText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    headerText: {
        color: "#f7941d",
        fontSize: 20
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F8F8FB',
        borderRadius: 10,
        width: "100%",
        height: 90,
        marginTop: 10,
        opacity: 0.9,
    },
    productImage: {
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
    productHeading: {
        color: '#000',
        fontSize: 20,
        marginLeft: 20,
    },
    countContainer: {
        display: "flex", 
        flexDirection: "row", 
        backgroundColor: "white",
        width: 80,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 5
    },
    contentContainer: {
        marginTop: 10,
        width: "100%"
    },
    button: {
        backgroundColor: "#f7941d", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center", 
        borderRadius: 10, 
        paddingVertical: 20,
        marginVertical: 20}
})
export default ShoppingCartScreen

