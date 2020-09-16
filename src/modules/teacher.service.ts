import { BadRequestException, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TeacherService{
  constructor(@Inject('Neo4j') private readonly neo4j){}


  public async getTeacher(dato: string): Promise<any> {
    const session = this.neo4j.session();//
    console.log("date"+dato)
  const query = 'MATCH (a:Docente)-[:SE_LE_DIFICULTA]->(b:CacteristicaHabilidad),'+
    '(b:CacteristicaHabilidad)-[r:PERTENECE]->(c:Habilidad)'+
    'where  b.nombre  CONTAINS "'+dato+'" or c.nombre CONTAINS "' +dato+'"'+
    'RETURN a.nombre as nombre, a.direccion as direccion ,a.edad as edad, a.id as id, c.nombre as habilidad' ;
    
    return session
        .run(query)
        .then((result) => {
        session.close();  
        const results =  result.records.map(record => record.toObject());
          return results.map( pro => {
          return {
            "@context": "http://schema.org/",
            "@type": "Docente",
            "nombre": pro.nombre,
            "direccion": pro.direccion,
            "edad": pro.edad,
            "habilidad": pro.habilidad
          }
        })
      })
        .catch((error) =>
        Promise.reject(new BadRequestException(error))
      )
  }

}