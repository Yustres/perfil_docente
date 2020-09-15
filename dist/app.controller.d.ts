import { TeacherService } from './modules/teacher.service';
export declare class AppController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    root(): Promise<{
        message: string;
        profesores: any;
    }>;
    getteacher(): Promise<any>;
}
