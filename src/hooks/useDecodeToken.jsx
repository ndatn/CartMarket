import { useLayoutEffect } from "react"
import useAccessToken from "./useAccessToken"
import { useDispatch, useSelector } from "react-redux"
import { decodeTokenThunk } from "../store/auths/thunk"
import { isSuccessSelector } from "../store/auths/selector"
import { resetIsSuccessStateAction } from "../store/auths/action"

const useDecodeToken = () => {
    const { accessToken } = useAccessToken()
    const isSuccess = useSelector(isSuccessSelector)
    const dispatch = useDispatch()
    
    useLayoutEffect(() => {
        if (accessToken !== null || undefined) {
            dispatch(decodeTokenThunk({ token: accessToken }))
        }
        return () => {
            if (isSuccess === true) {
                dispatch(resetIsSuccessStateAction())
            }
        }
    }, [accessToken, isSuccess])
}

export default useDecodeToken