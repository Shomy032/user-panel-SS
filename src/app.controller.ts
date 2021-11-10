import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService ,
    @InjectConnection() private connection: Connection) {}

  @Post("login")
  login(@Res() res){
    res.status(HttpStatus.OK).send();
  }

  @Get("*")
  getHello(@Res() res) {
     res.sendFile("/home/milos/panel-fuks/panelSS/user-panel/frontend/index.html");
  }

}
