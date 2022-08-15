import { Module } from '@nestjs/common';
import { UserRequestController } from './user.controller';
import { UserService } from './user.service';
import { UserRequestDao } from './user.dao';
import { AuthMiddleware } from '../auth.service';


@Module({
    imports: [],
    controllers: [UserRequestController],
    providers: [
        UserService,
        UserRequestDao,
        AuthMiddleware
    ],
})
export class UserRequestModule { }
