const getIsLoggedIn = state => state.auth.getIsLoggedIn;

const getUser = state => state.auth.user;

const authSelectors = { getIsLoggedIn, getUser };

export default authSelectors;
