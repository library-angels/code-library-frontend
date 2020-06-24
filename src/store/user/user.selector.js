const getUserName = store => store.user.firstName;
const getUserFamilyName = store => store.user.lastName;
const getUserEmail = store => store.user.email;
const getUserProfilePic = store => store.user.profilePic;

const USER_SELECTORS = {
    getUserName,
    getUserFamilyName,
    getUserEmail,
    getUserProfilePic,
};

export default USER_SELECTORS;
