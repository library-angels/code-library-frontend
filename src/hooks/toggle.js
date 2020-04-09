import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_ACTION_CREATORS } from '../store/toggle/toggle.actions';
import getToggleModal from '../store/toggle/toggle.selectors';

const { toggleModal } = TOGGLE_ACTION_CREATORS;

export default function useToggle() {
    const dispatch = useDispatch();

    return {
        modal: {
            toggleView: () => {
                dispatch(toggleModal());
            },
            getState: useSelector(getToggleModal),
        },
    };
}
