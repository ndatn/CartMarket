import { createSelector } from "reselect";
import * as authSlice from './slice'

export const accessTokenSelector = createSelector(authSlice.authSelector, (state) => state.accessToken)

export const isSuccessSelector = createSelector(authSlice.authSelector, (state) => state.isSuccess)

export const isLoadingSelector = createSelector(authSlice.authSelector, (state) => state.isLoading)
