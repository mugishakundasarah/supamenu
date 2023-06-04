import {
    View, 
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    ScrollView
} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import colors from '../Utils/colors';
import { ListItem } from '../components/Checkout';

const CheckoutScreen = ({navigation}) => {
    const handleCheckout = () => {
        navigation.navigate("PaymentSuccess")
    }
    return (
        <SafeAreaView style={{height: "98%"}}>
        <ScrollView style={{backgroundColor: "white"}}>
        <View style={styles.container}>
            <View style={styles.summary}>
                <View style={{backgroundColor: colors.gray, width: 40, borderRadius: 8, marginTop: 40, marginLeft: 20}}>
                    <Icon name='chevron-left' color={colors.green} size={40}/>
                </View>
                <View style={styles.textSummaryView}>
                    <View style={styles.checkoutPayOptionView}>
                        <Text style={styles.checkoutText}>Checkout</Text>
                        {/* <Image source={require('../../assets/visa.png')} style={styles.visaIcon}/> */}
                    </View>
                    <View style={styles.amountDescView}>
                        <Text style={styles.amountText}>Frw 16,000</Text>
                        <Text style={styles.includeVatText}>Including VAT (18%)</Text>
                    </View>
                </View>
                <View style={styles.options}>
                    <View style={styles.creditOptionView}>
                        <Text style={styles.creditOptionText}>Credit Card</Text>
                    </View>
                    <View style={styles.momoOptionView}>
                        <Text style={styles.momOptionText}>Mobile & Cash</Text>
                    </View>
                </View>
            </View>

            <View style={styles.listView}>
                <FlatList
                    data={[
                        { key: 'MOMO', name: 'MTN Mobile Money', imageUrl: require('../assets/momo.png')},
                        { key: 'AIRTEL', name: 'Airtel Money', imageUrl: require('../assets/airtel.png') },
                        { key: 'CASH', name: 'Cash', imageUrl: require('../assets/cash.png')},
                    ]}
                    renderItem={({ item }) => (
                        <ListItem name={item.name} imgUrl={item.imageUrl} />
                    )}
                />
            </View>

            <View style={styles.proceedView}>
                <Text style={styles.assText}>
          We will send you an order details to your email after the successfully
          payment
                </Text>

                <View style={styles.bottomTools}>
                    <Button
                        title="Pay for the order"
                        buttonStyle={styles.payButton}
                        icon={{
                            name: 'lock',
                            size: 30,
                            color: colors.white,
                        }}
                        onPress={()=>handleCheckout()}
                    >
                        <Text style={styles.payButtonText}>Pay for the order</Text>
                    </Button>
                    <View style={styles.btmLine}></View>
                </View>
            </View>
        </View>
     </ScrollView>
     </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    amountDescView: {
        marginLeft: 45,
    },
    amountText: {
        color: colors.green,
        fontSize: 20,
        fontWeight: "bold",
    },
    assText: {
        fontSize: 15,
        color: colors.darkGray,
        width: "70%",
        marginBottom: 10,
        marginTop: 10,
    },
    backBtn: {
        width: "40%",
        marginLeft: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    backIconView: {
        backgroundColor: colors.gray,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    bottomTools: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        marginTop: 20,
        marginBottom: 80,
    },
    btmLine: {
        backgroundColor: colors.black,
        borderRadius: 10,
        fontWeight: 'bold',
        height: 7,
        marginTop: 10,
        width: 200,
    },
    checkoutPayOptionView:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    checkoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignContent: "center"
    },
    creditOptionText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    creditOptionView: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 20,
    },
    includeVatText: {
        fontSize: 15,
        fontFamily: "Sans-Serif",
        color: colors.darkGray,
        fontWeight: '300',
    },
    listView: {
        marginTop: 60,
        backgroundColor: colors.white,
        width: "95%",
    },
    momOptionText: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },
    momoOptionView: {
        backgroundColor: colors.green,
        justItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    options: {
        backgroundColor: colors.green,
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 70,
        marginBottom: -30,
        marginLeft: 30,
        marginRight: 30,
        width: 300,
    },
    payButton: {
        alignItems: 'center',
        backgroundColor: colors.green,
        borderRadius: 15,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        marginTop: 15,
        padding: '3%',
        width: 350,
    },
    payButtonText: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },
    proceedView: {
        display: "flex",
        alignItems: 'center',
    },
    summary: {
        backgroundColor: colors.white,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 40,
        borderWidth: 0.5,
        borderColor: "white",
        shadowColor: colors.green,
        shadowOpacity: 1,
        shadowRadius: 10,
        width: '95%',
        elevation: 30
    },
    textSummaryView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom: 40,
        paddingTop: 20,
        marginLeft: 20
    },
   
});

export default CheckoutScreen

