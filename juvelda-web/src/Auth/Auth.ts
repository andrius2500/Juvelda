import React from "react";
import auth0 from "auth0-js";

import history from "../history(needsFixing)";

enum SessionTokens {
    ACCESS_TOKEN = "accessToken",
    EXPIRE = "expiresAt",
    ID_TOKEN = "idToken",
    IS_LOGGED_IN = "isLoggedIn"
};

class Auth {
    accessToken;
    idToken;
    expiresAt;

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
    }

    auth0 = new auth0.WebAuth({
        domain: `${process.env.REACT_APP_AUTH_DOMAIN}/oauth`,
        clientID: `${process.env.REACT_APP_CLIENT_ID}`,
        redirectURL: `${process.env.REACT_APP_AUTH_REDIRECT_URL}`,
        responseType: "token",
        scope: "read"
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult) {
                this.setSession(authResult);
            } else if (err) {
                history.replace("/")
            }
        });
    }

    getAccessToken() {
        return localStorage.getItem("idToken");
    }

    getIdToken() {
        return localStorage.getItem("idToken");
    }

    setSession(authResult) {
        //Set isLoggedIn flag in LocalStorage
        localStorage.setItem(SessionTokens.IS_LOGGED_IN, "true");

        //Set the time that the access token will expire at
        let expiresAt: string = (
            authResult.expiresIn * 1000 + new Date().getTime()
        ).toString();

        localStorage.setItem(
            SessionTokens.ACCESS_TOKEN,
            authResult[SessionTokens.ACCESS_TOKEN]
        );
        localStorage.setItem(SessionTokens.EXPIRE, expiresAt);
        localStorage.setItem(
            SessionTokens.ID_TOKEN,
            authResult[SessionTokens.ID_TOKEN]
        );

        //navigate to the dashboard route
        history.replace("/dashboard")
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
          if (authResult && authResult.accessToken) {
            this.setSession(authResult);
          } else if (err) {
            this.logout();
          }
        });
      }
    
    logout() {
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem(SessionTokens.IS_LOGGED_IN);
        localStorage.removeItem(SessionTokens.ACCESS_TOKEN);
        localStorage.removeItem(SessionTokens.ID_TOKEN);
        localStorage.removeItem(SessionTokens.EXPIRE);

        // navigate to the home route
        history.replace("/");
    }
    
    isAuthenticated() {
        let expiresAt = this.expiresAt;
        return new Date().getTime() < expiresAt;
    }

}

export default new Auth();