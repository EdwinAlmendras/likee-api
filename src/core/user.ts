import { LikeeClient } from ".";
import { Response } from "../types";
import qs from "querystring";
export class User {
  constructor(private client: LikeeClient) {}
  async userInfo({uid}: { uid: string}): Promise<Response.UserPostNumber> {
    try {
      const { data }: { data: Response.UserPostNumber } = await this.client.api.request({
        url: "likee-activity-flow-micro/userApi/getUserPostNum",
        data: {
          uid,
        },
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  async follows({uid}: { uid: string} ): Promise<Response.UserFollows> {
    try {
      const { data } : { data: Response.UserFollows } = await this.client.api.custom({
        url: "https://likee.video/official_website/UserApi/getUserFollow",
        data: qs.stringify({ uid }),
        method: "POST",
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
  async follow(uid: string): Promise<void> {
    try {
      await this.client.api.request({
        url: "userApi/followUser",
        data: {
          followUid: uid,
          type: 1,
        },
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}
