import {
    SaveClient,
    SaveClientFailed,
    SaveClientSuccess,
    FetchClient,
    FetchClientSuccess,
    FetchClientFailed,
    FetchClients,
    FetchClientsSuccess,
    FetchClientsFailed,
    DeleteClient,
    DeleteClientFailed,
    DeleteClientSuccess,
    ClientModel,
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
    ResponseError
} from "./types";

//Client save action creators
export const saveClientAction = (): SaveClient => ({
    type: SAVE_CLIENT
});

export const saveClientSuccessAction = (
    client: ClientModel
): SaveClientSuccess => ({
    type: SAVE_CLIENT_SUCCESS,
    payload: client
});

export const saveClientFailedAction = (
    error: ResponseError
): SaveClientFailed => ({
    type: SAVE_CLIENT_FAILED,
    payload: error
});

//Client fetch action creators
export const fetchClientAction = (): FetchClient => ({
    type: FETCH_CLIENT
});

export const fetchClientSuccessAction = (
    client: ClientModel
): FetchClientSuccess => ({
    type: FETCH_CLIENT_SUCCESS,
    payload: client
});

export const fetchClientFailedAction = (
    error: ResponseError
): FetchClientFailed => ({
    type: FETCH_CLIENT_FAILED,
    payload: error
});

//Clients fetch action creators
export const fetchClientsAction = (): FetchClients => ({
    type: FETCH_CLIENTS
});

export const fetchClientsSuccessAction = (
    clients: ClientModel[]
): FetchClientsSuccess => ({
    type: FETCH_CLIENTS_SUCCESS,
    payload: clients
});

export const fetchClientsFailedAction = (
    error: ResponseError
): FetchClientsFailed => ({
    type: FETCH_CLIENTS_FAILED,
    payload: error
});

//Client delete action creators
export const deleteClientAction = (): DeleteClient => ({
    type: DELETE_CLIENT
});

export const deleteClientSuccessAction = (
    client: ClientModel
): DeleteClientSuccess => ({
    type: DELETE_CLIENT_SUCCESS,
    payload: client
});

export const deleteClientFailedAction = (
    error: ResponseError
): DeleteClientFailed => ({
    type: DELETE_CLIENT_FAILED,
    payload: error
});