import { Reducer } from "redux";
import {
    SAVE_CLIENT,
    SAVE_CLIENT_FAILED,
    SAVE_CLIENT_SUCCESS,
    FETCH_CLIENTS_FAILED,
    FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS,
    FETCH_CLIENT_FAILED,
    FETCH_CLIENT_SUCCESS,
    FETCH_CLIENT,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT,
    DELETE_CLIENT_FAILED,
    ClientModel,
    ClientState
} from "./types";

const defaultLoaderState = {
    loading: false,
    loaded: false
};

const defaultLoadingState = {
    loading: true,
    loaded: false
};

const defaultSuccessLoadedState = {
    loading: false,
    loaded: true
};

const defaultState: ClientState = {
    newClient: {
        loaded: false,
        loading: false
    },
    client: {
        entity: {} as ClientModel,
        status: defaultLoaderState
    },
    clients: {
        entities: [],
        loaded: false,
        loading: false
    }
};

export const clients: Reducer<ClientState> = (
    state = defaultState,
    action
): ClientState => {
    switch (action.type) {
        case SAVE_CLIENT:
            return {
                ...state,
                client: {
                    ...state.client,
                    status: defaultLoadingState
                }
            };
        case SAVE_CLIENT_SUCCESS:
            return {
                ...state,
                client: {
                    entity: action.payload,
                    status: defaultLoaderState
                }
            };
        case SAVE_CLIENT_FAILED:
            return {
                ...state,
                client: {
                    ...state.client,
                    status: {
                        ...defaultLoaderState,
                        error: action.payload
                    }
                }
            };
        case FETCH_CLIENT:
            return {
                ...state,
                client: {
                    ...state.client,
                    status: defaultLoadingState //MIGHT NOT WORK BECAUSE MAYBE WE SHOULD USE defaultLoaderState
                }
            };
        case FETCH_CLIENT_SUCCESS:
            return {
                ...state,
                client: {
                    ...state.client,
                    entity: action.payload,
                    status: defaultSuccessLoadedState
                }
            };
        case FETCH_CLIENT_FAILED:
            return {
                ...state,
                client: {
                    ...state.client,
                    status: {
                        ...defaultLoaderState,
                        error: action.payload
                    }
                }
            };
        case FETCH_CLIENTS:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    loading: true
                }
            };
        case FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    entities: action.pauload,
                    loaded: true,
                    loading: false
                }
            };
        case FETCH_CLIENTS_FAILED:
            return {
                ...state,
                clients: {
                    ...state.clients,
                    loaded: true,
                    loading: false,
                    error: action.payload
                }
            };
        case DELETE_CLIENT:
            return {
                ...state,
                client: {
                    ...state.client,
                    status: defaultLoadingState
                }
            };
        case DELETE_CLIENT_SUCCESS:
            return {
                ...state,
                client: {
                    entity: action.payload,
                    status: defaultLoaderState
                }
            };
        case DELETE_CLIENT_FAILED:
            return {
                ...state,
                client: {
                    ...state.client,
                    status: {
                        ...defaultLoaderState,
                        error: action.payload
                    }
                }
            };
    }

    return state;
};

export default clients;