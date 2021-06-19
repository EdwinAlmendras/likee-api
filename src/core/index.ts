/* eslint-disable no-invalid-this */
import { State } from "./state";
import { LikeeApi } from "./api";
import { User } from "./user";
import { LikeeVideos } from "./videos";
import { Auth } from "./auth";
import { Cookies } from "../types/schemas";
export class LikeeClient {
  constructor(private cookies: Cookies) {
  }
    public api = new LikeeApi(this);
    public state = new State(this.cookies);
    public user = new User(this);
    public videos = new LikeeVideos(this)
    public auth = new Auth(this)
}
