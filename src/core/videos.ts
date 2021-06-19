import { LikeeClient } from ".";
import { Schemas, Response } from "../types";
const ERRORS = {
  "50001": "System error",
  "40001": "Invalid scene",
}
export class LikeeVideos {
  constructor(private client: LikeeClient) {
  }
  async byUser({ uid, count, lastId }: { [key: string]: string }): Promise<Schemas.Video[]> {
    try {
      const { data }: { data: Response.VideoList } = await this.client.api.request({
        url: "videoApi/getUserVideo",
        data: {
          count,
          tabType: 0,
          lastPostId: lastId || "",
          uid,
          scene: "WELOG_POPULAR",
        },
      });
      return Promise.resolve(data.data.videoList);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
  public async trends({ lastId, count }: { lastId?: string; count?: number }): Promise<Schemas.Video[]> {
    const { data } = await this.client.api.request({
      url: "videoApi/getSquareVideos",
      data: {
        country: "ES",
        startNum: 5,
        deviceId: this.client.state.cookies?.web_deviceid || "web85fdb9e8b1d94940a911472aea15189f",
        fetchNum: count || 5,
        language: "es",
        lastPostId: lastId || "",
        uid: this.client.state.cookies?.web_uid || "2368630855",
        scene: "WELOG_POPULAR",
      },
    });
    console.log(data)
    return Promise.resolve(data.videoList);
  }
  public async like(id: string): Promise<void> {
    try {
      await this.client.api.request({
        url: "likee-activity-flow-micro/videoApi/likeVideo",
        data: {
          postId: id,
          type: 1,
        },
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}
