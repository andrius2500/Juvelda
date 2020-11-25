import axios, { AxiosInstance } from "axios";
import Auth from "../Auth";
import { ResponseError } from "../Store/clients/types";

export enum ApiPaths {
    CLIENTS = "/clients"
}

interface ApiClient {
    get(path: string, params?: object): Promise<any>;
    post(path: string, params?: object): Promise<any>;
    put(path: string, params?: object): Promise<any>;
    delete(path: string, params?: object): Promise<any>;
}

class Api implements ApiClient {
    instance: AxiosInstance;

    constructor () {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            headers: { Authorization: `Bearer ${Auth.getAccessToken()}`}
        });
    }

    get(path: string, params?: object, config?: object): Promise<any> {
        return this.makeRequest(this.instance.get, path);
    }

    post(path: string, params?: object, config?: object): Promise<any> {
        return this.makeRequest(this.instance.post, path, params, config);
    }

    put(path: string, params?: object): Promise<any> {
        return this.makeRequest(this.instance.put, path, params);
    }

    delete(path: string, params?: object): Promise<any> {
        return this.makeRequest(this.instance.delete, path, params);
    }

    async makeRequest(
        method: any,
        path: string,
        params?: object,
        config?: object
      ): Promise<any> {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await method(path, params, config);
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        });
      }
    
    handleError(error): ResponseError {
        if (!error.response) {
            return {
                status: 500,
                message: "Network error"
            };
        } else {
            return {
                status: error.reponse.status,
                message: error.response.error
            };
        }
    }
}

export default new Api();