import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import * as dimension from '../../utils/dimension'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { emailSelector, isSuccessSelector } from "../../store/auths/selector"
import useDecodeToken from "../../hooks/useDecodeToken"
import { useEffect } from "react"

const UserProfile = () => {
    const navigator = useNavigation()
    const email = useSelector(emailSelector)
    const decodeToken = useDecodeToken()
    const handleLogout = async () => {
        await AsyncStorage.removeItem("accessToken")
        navigator.navigate("Main")
    }

    useEffect(() => decodeToken, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>User</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 20}}>Email</Text>
                    <Text style={{ fontSize: 12, marginTop: 5, color: "#718096" }}>{email}</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: dimension.height,
        padding: 10,
    },  
    buttonGroup: {
        display: "flex",
        gap: 10,
        marginTop: 20
    },
    button: {
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#CBD5E0",
        padding: 20
    },
    header: {
        fontSize: 25,
        fontWeight: "bold"
    }
})

export default UserProfile