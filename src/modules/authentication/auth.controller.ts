import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { OptAuthGuard } from './guard/jwt-opt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  create(@Request() request) {
    console.log('User Logging in...');
    return this.authService.login(request.user);
  }

  @Get('guarded')
  @UseGuards(JwtAuthGuard)
  guarded(@Request() request) {
    console.log('##### Guarded #####');
    console.log(request.user);
    return `You have the correct credentials ${request.user.username}`;
  }

  @Get('optional')
  @UseGuards(OptAuthGuard)
  optional(@Request() request) {
    console.log('##### Guarded #####');
    console.log(request.user);

    if (request.user) {
      return `Welcome ${request.user.username}`;
    } else {
      return `Welcome guest`;
    }
  }
}
