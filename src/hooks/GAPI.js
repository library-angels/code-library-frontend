import { useDispatch } from 'react-redux';
import { GAPI_ACTION_CREATORS } from '../store/GAPI/GAPI.actions';

export function useGapiDispatch() {
    const dispatch = useDispatch();
    const loadGapi = () => dispatch(GAPI_ACTION_CREATORS.requestLoadGapi());

    return { loadGapi };
}
