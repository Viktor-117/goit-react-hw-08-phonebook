const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getError = state => state.auth.error;

const getIsRefreshingUser = state => state.auth.getIsRefreshingUser;

const authSelectors = { getIsLoggedIn, getUser, getError, getIsRefreshingUser };

export default authSelectors;
