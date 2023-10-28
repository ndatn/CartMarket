import { useNavigation } from "@react-navigation/native"
import useAccessToken from "./useAccessToken"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decodeTokenThunk } from "../store/auths/thunk"
import { isSuccessSelector } from "../store/auths/selector"
import { resetIsSuccessState } from "../store/auths/slice"

const useSession = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const isSuccess = useSelector(isSuccessSelector)
    console.log(isSuccess)
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