import { createContext } from "react"
import useAccessToken from "../hooks/useAccessToken"
import { useNavigation } from "@react-navigation/native"

const SessionContext = createContext()

const SessionProvider = ({ children }) => {

    const navigation = useNavigation()
    const { accessToken } = useAccessToken()
    useEffect(() => {
        if (accessToken !== undefined || null || "") {
            navigation.navigate("HomeScreen")
        } else {
            navigation.navigate("MainScreen")
        }
    }, [accessToken, navigation])

    return <SessionContext.Provider>
        {children}
    </SessionContext.Provider>
}

export default SessionProvider