import {SearchBar} from 'react-native-elements'
import {View, Text, Image, StyleSheet} from 'react-native'
import React from 'react';
import colors from '../Utils/colors';

const SearchScreen = (props) => {
    const [text, onChangeText] = React.useState('');

    const searchSubmit = () => {
        props.navigation.navigate('ChooseRestaurant', { search: text });
    };
    
    return (
        <View style={styles.container}>
            <SearchBar
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
                inputStyle={styles.searchBarInput}
                onChangeText={onChangeText}
                round
                iconColor={colors.default}
                onSubmitEditing={searchSubmit}
                lightTheme
                placeholder="Search for your preferred restaurant"
                value={text}
            />
            <View style={styles.desc}>
                <Text style={styles.middleText}>or</Text>
                <Image
                    source={require('../assets/qr-code.png')}
                    style={styles.img}
                />
                <Text style={styles.bottomText}>Scan, Pay & Enjoy!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomText: {
        fontSize: 20,
        // fontWeight: 'bold',
        marginTop: 20,
    },
    container: {
        alignItems: 'center',
        backgroundColor: colors.default,
        height: '100%',
        paddingTop: 100,
        // width: '100%',
        // display: "flex",
    },
    desc: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        marginTop: 60,
        width: 100,
    },
    input: {
        width: 500,
        backgroundColor: colors.white
    },
    middleText: {
        alignItems: 'center',
        color: '#171717',
        flexDirection: 'row',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 60,
        paddingTop:10,
    },
    searchBarContainer: {
        borderRadius: 10,
        height: 50,
        width: '90%',
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.white
    },
    searchBarInputContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        height: 50,
        width: '100%',
        marginBottom: 10,
        position: 'absolute',
        top: -10.5,
    },
    searchBarInput: {
        fontSize: 17,
    },
});

export default SearchScreen 