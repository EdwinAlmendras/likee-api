import { Schemas } from ".";


type MessageResponse = "ok" | "error"
export interface VideoList {
  code: number;
  data: {
    dispatchId: string;
    login: boolean;
    userInfo: Schemas.UserInfo
    videoList: Schemas.Video[]
  };
  message: MessageResponse
}

export interface UserPostNumber {
    code: number;
    data: {
        postInfoMap: {
            [key: string]: {
                allLikeCount: number;
                likeNums: number;
                momentNums: number;
                videoNums: number;
            }
        }
    };
    message: MessageResponse;
}


export interface UserFollows {
    code: number;
    data: {
        fansCount: number;
        followCount: number;
    }
    message: MessageResponse
}