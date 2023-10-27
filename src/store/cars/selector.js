import * as slice from "./slice";
import { createSelector } from "reselect";

const { selector } = slice

export const carSelector = createSelector(selector, state => state.cars)

export const isSuccessSelector = createSelector(selector, state => state.isSuccess)

export const carByIdSelector = createSelector(selector, state => state.car)

export const isLoadingSelector = createSelector(selector, state => state.isLoading)