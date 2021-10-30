const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsRefrshing = (state) => state.auth.isRefrshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefrshing,
};

export default authSelectors;
