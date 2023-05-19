import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native"
import {useFormik} from "formik"
import Icon from 'react-native-vector-icons/Feather'

import colors from "../Utils/colors"

const Signup = ({navigation}) => {
    const { values } = useFormik({
        initialValues: {
            email: "",
            password: "",
            mobile: "",
            fullName: "",
        }
    })
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {styles.form}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>Supa</Text>
                    <Text style={styles.logoTextM}>Menu</Text>
                </View>

                <View style={styles.formText}>
                    <Text style={styles.formTextWelcome}>Welcome..</Text>
                    <Text style={styles.formTextFill}>Please fill in the information</Text>
                </View>

                <View style={styles.inputsArea}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Fullname"
                            autoCapitalize="none"
                            value={values.fullName}
                            // onChangeText={handleChange('fullName')}
                        />
                        <Icon name="user" size={20} color="#9098b2" style={styles.icon} />
                    </View>

                    <View>
                        <Icon name="phone" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone number"
                            autoCapitalize="none"
                            value={values.mobile}
                            // onChangeText={handleChange('mobile')}
                        />
                    </View>

                    <View>
                        <Icon name="mail" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Your email"
                            autoCapitalize="none"
                            value={values.email}
                            // onChangeText={handleChange('email')}
                        />
                    </View>

                    <View>
                        <Icon name="lock" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Your password"
                            autoCapitalize="none"
                            value={values.password}
                            // onChangeText={handleChange('password')}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleSubmit();
                        }}
                    >
                        <Text style={styles.buttonText}>proceed</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalContainer}>
                    <View style={styles.horizontalLine} />
                    <Text style={styles.or}>OR</Text>
                    <View style={styles.horizontalLine} />
                </View>

                <Text style={styles.haveAnAccount}>If you have a PMG account</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('SignIn')
                    }}
                >
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.default,
        borderRadius: 5,
        elevation: 6,
        padding: '5%',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 1, height: 13 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Roboto_700Bold',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#F7941D',
        height: '100%',
        width: '100%',
    },
    dontHaveAccount: {
        color: '#9098b2',
        fontSize: 15,
        paddingVertical: '5%',
        textAlign: 'center',
    },
    form: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        marginTop: '20%',
        padding: 20,
    },
    formTextFill: {
        color: '#9098b2',
        fontSize: 15,
        paddingBottom: '1%',
    },
    formText: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
    },
    formTextWelcome: {
        color: '#9098b2',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: '1%',
    },
    haveAnAccount: {
        color: '#9098b2',
        fontSize: 15,
        paddingVertical: '5%',
        textAlign: 'center',
    },
    horizontalContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalLine: {
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        flex: 1,
        height: 1,
    },
    icon: {
        left: 12,
        position: 'absolute',
        top: 15,
    },
    input: {
        borderColor: colors.border,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 20,
        padding: '3%',
        paddingLeft: 40,
    },
    inputsArea: {
        display: 'flex',
        paddingVertical: '10%',
    },
    logo: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        fontWeight: 'bold',
    },
    logoTextM: {
        color: colors.default,
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    or: {
        color: colors.border,
        textAlign: 'center',
        width: 50,
    },

});

export default Signup