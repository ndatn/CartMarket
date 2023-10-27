import { useNavigation } from "@react-navigation/native"
import useAccessToken from "./useAccessToken"
import { useEffect } from "react"

const useSession = () => {
    const navigation = useNavigation()
    const { accessToken } = useAccessToken()
    console.log(accessToken)
    useEffect(() => {
        if (accessToken === null) {
            navigation.navigate("Main")
        } else {
            navigation.navigate("HomeScreen")
        }
    }, [accessToken, navigation])
}

export default useSession