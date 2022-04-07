import { createSelector } from "reselect";

export const authSelector = (state) => state.auth

export const appSelector = (state) => { 
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo
    }
}