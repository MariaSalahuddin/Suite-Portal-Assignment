import jwt from "jsonwebtoken";
import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
const tokenSecret = "suite-portal"
const adapter = new FileSync('./db/user.json')
const db = low(adapter)
@Injectable()
export class AuthMiddleware {

  constructor() {
    //
  }
  getTokenSecret() {
    return tokenSecret;
  }
  private get userCollection(): any {
    return db.get('users');
  }
  async auth(header) {
    if (!header)
      return false
    try {
      const reqToken = header.replace("Bearer ", "");
      const token = jwt.verify(reqToken, tokenSecret);
      const user = await this.userCollection.find({ username: token.data.username }).value()
      if (!user || (user && user.role != "ADMIN")) {
        return false
      }
      return true
    }
    catch (e) {
      console.log(e);
      return false
    }
  }
}