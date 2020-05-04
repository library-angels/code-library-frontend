const getShowModal = store => store.account.showModal;
const getShowID = store => store.account.showID;

const ACCOUNT_SELECTORS = {
    getShowModal,
    getShowID,
};

export default ACCOUNT_SELECTORS;
