export declare class TeacherService {
    private readonly neo4j;
    constructor(neo4j: any);
    getTeacher(dato: string): Promise<any>;
}
