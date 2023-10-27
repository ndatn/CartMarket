import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

const useAccessToken = () => {
    const [ accessToken, setAccessToken ] = useState("")
    useEffect(() => {
        (async () => {
            setAccessToken(await AsyncStorage.getItem("accessToken"))
        })()
    }, [])
    return { accessToken }
}

export default useAccessToken