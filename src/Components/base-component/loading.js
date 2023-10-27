import { ActivityIndicator, StyleSheet, View } from "react-native"

const Loading = () => {
    return <View>
        <ActivityIndicator 
            style={styles.container}
            size={"large"}
            color={"#718096"}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
})

export default Loading