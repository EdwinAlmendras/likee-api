import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";
import { LikeeClient } from "./index";
export class LikeeApi {
  constructor(private client: LikeeClient) {}
  public async request({ url, data}: { url: string; data?: any}): Promise<any> {
    try {
      const response = await this.client.state.axios({
        baseURL: this.client.state.constants.LIKEE_API_URL + "likee-activity-flow-micro/",
        headers: {
          "x-auth-token": this.client.state.cookies?.web_token || "",
          "x-client-deviceid": this.client.state.cookies?.web_deviceid || "",
          "x-uid": this.client.state.cookies?.web_uid || "",
        },
        url,
        data,
        method: "POST",
      });
      console.log(response)
      if (response.data.code === 0) {
        return Promise.resolve(response.data);
      }
      return Promise.reject(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async custom(config: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      const response = await this.client.state.axios({
        ...config,
      });
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

