import { BadRequestException, Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserRequestController {

    constructor(
        private userService: UserService,
    ) {
    }
    
    @Post('/login')
    public async loginUser(
        @Body() user,
    ) {
        if (!user) {
            throw new BadRequestException('No user provided');
        }
        return await this.userService.login(user);
    }
}
