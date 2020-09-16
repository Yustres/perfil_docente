import { Controller, Get, Post, Res, Param, Render, Body } from '@nestjs/common';
import { TeacherService } from './modules/teacher.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  @Render('index')
  async root() {
    return { message: 'Hello world!' };
  }

  /* @Get(':dato')
  @Render('resultadoVista')
  async getteacher(@Param('dato') dato: string) { console.log("entro"+ dato);
    return await this.teacherService.getTeacher(dato)
  } */

  @Post('/resultadoVista')
  @Render('resultadoVista')
  async login(@Body('dato') data, @Res() res: Response){
    const result =  await this.teacherService.getTeacher(data)
  
    return  {result}
    //res.redirect('/resultadoVista');

  }

}
