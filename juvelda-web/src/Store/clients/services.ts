import { ThunkAction, ThunkDispatch } from "redux-thunk";

import {
    ClientActionTypes,
    ClientModel,
    ClientState,
    ResponseError
} from "./types";

import {
    saveClientAction,
    saveClientFailedAction,
    saveClientSuccessAction,
    fetchClientAction,
    fetchClientFailedAction,
    fetchClientSuccessAction,
    fetchClientsAction,
    fetchClientsFailedAction,
    fetchClientsSuccessAction,
    deleteClientAction,
    deleteClientFailedAction,
    deleteClientSuccessAction
} from "./actions";

//import api, { ApiPaths } from "../../Api";

const mapError = (response: any): ResponseError => {
    return {
        status: response.data.status,
        message: response.data.error
    };
};

export const loadClients = (
    accountId: string
): ThunkAction<
    Promise<void>,
    ClientState,
    ClientModel[],
    ClientActionTypes
> => {
    return async (dispatch: ThunkDispatch<{}, {}, ClientActionTypes>) => {
        dispatch(fetchClientsAction());
        try {
           // const response = await api.get(`${ApiPaths.CLIENTS}`);
           // dispatch(fetchClientsSuccessAction(response));
    } catch (error) {
        dispatch(fetchClientsFailedAction(error));
        }
    };
};

// export const saveClient = (
//     client: ClientModel
// ): ThunkAction<
//     Promise<void>,
//     ClientState,
//     ClientModel,
//     ClientActionTypes
// > => {
//     return async (dispatch: ThunkDispatch<{}, {}, ClientActionTypes>) => {
//         dispatch(saveClientAction());
//         try {
//             let response: object = {};
//             if (client.id) {
//                 response = await api.put(`${ApiPaths.CLIENTS}/${client.id}`, client);
//                 dispatch(saveClientSuccessAction(response as ClientModel));
//             } else {
//                 response = await api.post(ApiPaths.CLIENTS, client);
//                 dispatch(saveClientSuccessAction(response as ClientModel));
//             }
//         } catch (error) {
//             dispatch(saveClientFailedAction(mapError(error.response)));
//         }
//     };
// };

// export const fetchClientById = (
//     clientId: string
// ): ThunkAction<
//     Promise<void>,
//     ClientState,
//     ClientModel,
//     ClientActionTypes
// > => {
//     return async (dispatch: ThunkDispatch<{}, {}, ClientActionTypes>) => {
//         dispatch(fetchClientAction());
//         try {
//             let response = {};
//             response = await api.get(`${ApiPaths.CLIENTS}/${clientId}`);
//             dispatch(fetchClientSuccessAction(response as ClientModel));
//         } catch (error) {
//             dispatch(fetchClientFailedAction(mapError(error.response)));
//         }
//     };
// };

// export const deleteClientById = (
//     clientId: string
// ): ThunkAction<
//     Promise<void>,
//     ClientState,
//     ClientModel,
//     ClientActionTypes
// > => {
//     return async (dispatch: ThunkDispatch<{}, {}, ClientActionTypes>) => {
//         dispatch(deleteClientAction());
//         try {
//             let response = {};
//             response = await api.delete(`${ApiPaths.CLIENTS}/${clientId}`);
//             dispatch(deleteClientSuccessAction(response as ClientModel));
//         } catch (error) {
//             dispatch(deleteClientFailedAction(error.response));
//         }
//     }
// }


