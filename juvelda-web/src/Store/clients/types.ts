//Clients actions
export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
export const FETCH_CLIENTS_FAILED = "FETCH_CLIENTS_FAILED";

//Client actions
export const SAVE_CLIENT = "SAVE_CLIENT";
export const SAVE_CLIENT_SUCCESS = "SAVE_CLIENT_SUCCESS";
export const SAVE_CLIENT_FAILED = "SAVE_CLIENT_FAILED";
export const FETCH_CLIENT = "FETCH_CLIENT";
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS";
export const FETCH_CLIENT_FAILED = "FETCH_CLIENT_FAILED";
export const DELETE_CLIENT = "DELETE_CLIENT";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
export const DELETE_CLIENT_FAILED = "DELETE_CLIENT_FAILED";

export interface ResponseError {
    status: number;
    message: string;
}

//Save action types
export interface SaveClient {
    type: typeof SAVE_CLIENT;
}

export interface SaveClientSuccess {
    type: typeof SAVE_CLIENT_SUCCESS;
    payload: ClientModel;
}

export interface SaveClientFailed {
    type: typeof SAVE_CLIENT_FAILED;
    payload: ResponseError;
}

//Fetch action types
export interface FetchClient {
    type: typeof FETCH_CLIENT;
}

export interface FetchClientSuccess{
    type: typeof FETCH_CLIENT_SUCCESS;
    payload: ClientModel;
}

export interface FetchClientFailed {
    type: typeof FETCH_CLIENT_FAILED;
    payload: ResponseError;
}

export interface FetchClients {
    type: typeof FETCH_CLIENTS;
}

export interface FetchClientsSuccess {
    type: typeof FETCH_CLIENTS_SUCCESS;
    payload: ClientModel[];
}

export interface FetchClientsFailed {
    type: typeof FETCH_CLIENTS_FAILED;
    payload: ResponseError;
}

//Delte action types
export interface DeleteClient {
    type: typeof DELETE_CLIENT;
}

export interface DeleteClientSuccess {
    type: typeof DELETE_CLIENT_SUCCESS;
    payload: ClientModel;
}

export interface DeleteClientFailed {
    type: typeof DELETE_CLIENT_FAILED;
    payload: ResponseError;
}

export interface LoaderState {
    loading: boolean;
    loaded: boolean;
    error?: ResponseError;
}

export interface ClientModel {
    id?: string;
    fullName: string;
    email: string;
    phone: string;
    licensePlate: string;
}

export interface ClientState {
    newClient: {
        client?: ClientModel;
        loading: boolean;
        loaded: boolean;
        error?: ResponseError;
    },
    client: {
        entity: ClientModel;
        status: LoaderState;
    },
    clients: {
        entities: ClientModel[];
        loading: boolean;
        loaded: boolean;
        error?: ResponseError;
    };
}

export type ClientActionTypes = 
    | SaveClient
    | SaveClientFailed
    | SaveClientSuccess
    | FetchClient
    | FetchClientSuccess
    | FetchClientFailed
    | FetchClients
    | FetchClientsSuccess
    | FetchClientsFailed
    | DeleteClient
    | DeleteClientFailed
    | DeleteClientSuccess
