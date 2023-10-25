import * as slice from "./slice";
import { createSelector } from "reselect";

const { selector } = slice

export const carSelector = createSelector(selector, state => state.cars)
export const isSuccessSelector = createSelector(selector, state => state.isSuccess)