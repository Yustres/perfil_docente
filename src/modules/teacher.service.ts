import { BadRequestException, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TeacherService{
  constructor(@Inject('Neo4j') private readonly neo4j){}

  public async getTeacher(): Promise<any> {
    const session = this.neo4j.session();//
    const query = 'MATCH (n:Profesor) RETURN n.nombre as nombre';
    return session
        .run(query)
        .then((result) => {
        session.close();  
        const profesores =  result.records.map(record => record.toObject());
          return profesores.map( pro => {
          return {
            "@context": "http://schema.org/",
            "@type": "Docente",
            "nombre": pro.nombre
          }
        })
      })
        .catch((error) =>
        Promise.reject(new BadRequestException(error))
      )
  }

}