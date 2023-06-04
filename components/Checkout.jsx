import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const ListItem = ({ imgUrl, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={imgUrl}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.textDescView}>
                <Text style={styles.imgText}>{name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 25,
        width: '100%',
    },
    imageStyle: {
        height: 80,
        width: 80,
    },
    imageView: {
        width: '30%',
    },
    imgText: {
        fontSize: 20,
    },
    textDescView: {
        justifyContent: 'center',
        width: '50%',
    },
});
