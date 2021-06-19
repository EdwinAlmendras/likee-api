import axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from "axios";
import * as Constants from "./constants";
import { Cookies as CookiesType } from "../types/schemas";

export class State {
  public axios: AxiosInstance
  public constants = Constants;
  constructor(public cookies: CookiesType | undefined) {
    this.axios = axios.create({
      headers: {
        "x-auth-token": this.cookies?.web_token,
        "x-client-deviceid": this.cookies?.web_deviceid,
        "x-uid": this.cookies?.web_uid,
      },
    });
  }
}
