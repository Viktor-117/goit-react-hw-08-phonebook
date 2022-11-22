const getIsLoggedIn = state => state.auth.getIsLoggedIn;

const getUser = state => state.auth.user;

const getError = state => state.auth.error;

const authSelectors = { getIsLoggedIn, getUser, getError };

export default authSelectors;
