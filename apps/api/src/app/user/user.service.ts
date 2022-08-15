import { Injectable } from '@nestjs/common';
import { UserRequestDao } from './user.dao';

@Injectable()
export class UserService {
    userToken = ''

    constructor(
        private userReqDao: UserRequestDao,
    ) {
       
    }
    async login(user) {
        return await this.userReqDao.login(user);
    }
}
