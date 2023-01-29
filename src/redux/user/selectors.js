export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.userData;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserError = store => store.user.error;

export const selectToken = store => store.user.token;