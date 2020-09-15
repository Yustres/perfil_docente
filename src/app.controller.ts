import { Controller, Get, Render } from '@nestjs/common';
import { TeacherService } from './modules/teacher.service';

@Controller()
export class AppController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  @Render('index')
  async root() {
    const  profesores =  await this.teacherService.getTeacher()
    return { message: 'Hello world!', profesores };
  }
  
  @Get('teachers')
  async getteacher(): Promise<any>{
    return await this.teacherService.getTeacher()
  }
}
