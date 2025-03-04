import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

export const roleSelector = (state: RootState) => state.staffReducer.role;
export const accessTokenSelector = (state: RootState) =>
    state.staffReducer.accessToken;
export const isAuthenticatedSelector = createSelector(
    accessTokenSelector,
    (accessToken) => !!accessToken
);
export const ordersSelector = (state: RootState) => state.staffReducer.orders;

export const staffIdSelector = (state: RootState) => state.staffReducer.staffId;

export const batchesToBeServedSelector = (state: RootState) =>
    state.staffReducer.batchesToBeServed;
