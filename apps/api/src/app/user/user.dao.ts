import { Injectable } from '@nestjs/common';
import { AuthMiddleware } from '../auth.service';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
const jwt = require('jsonwebtoken')


export interface UserInterface {
    username: string;
    password: string;
}

const adapter = new FileSync<UserInterface>('./db/user.json')
const db = low(adapter)

// db.defaults({ requests: [] }).write();

@Injectable()
export class UserRequestDao {

    constructor(private authMiddleware: AuthMiddleware) {
        //
    }
    private get userCollection(): any {
        return db.get('users');
    }
    generateToken(user) {
        return jwt.sign({ data: user }, this.authMiddleware.getTokenSecret());
    }

    async login(userData: UserInterface) {
        let user = await this.userCollection.find({ username: userData.username }).value()
        if (!user) return "No user with that username found"
        else
            if (userData.password != user.password)
                return "Incorrect Password"
            else {
                var token = this.generateToken(user)
                user.token = token
                this.userCollection.write()
                return user;
            }
    }
}
