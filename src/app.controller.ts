import { Controller, Get } from '@nestjs/common';
import { TeacherService } from './modules/teacher.service';

@Controller()
export class AppController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getteacher(): Promise<any>{
    return await this.teacherService.getTeacher()
  }
}
