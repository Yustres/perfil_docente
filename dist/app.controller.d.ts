import { TeacherService } from './modules/teacher.service';
import { Response } from 'express';
export declare class AppController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    root(): Promise<{
        message: string;
    }>;
    login(data: any, res: Response): Promise<{
        result: any;
    }>;
}
