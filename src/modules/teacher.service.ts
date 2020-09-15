import { BadRequestException, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TeacherService{
  constructor(@Inject('Neo4j') private readonly neo4j){}

  public async getTeacher(): Promise<any> {
    const session = this.neo4j.session();
    const query = `MATCH (n) RETURN n`;
    return session
        .run(query)
        .then((result) => {
        session.close();
        return result.records.map(record => record.toObject());
      })
        .catch((error) =>
        Promise.reject(new BadRequestException(error))
      )
  }

}