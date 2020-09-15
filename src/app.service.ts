import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/**
 * MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r
 * 
 * 
 *  MATCH 
    (a:Profesor{id:'1'})-[r:SE_LE_FACILITA]->(d:Habilidad)
    RETURN d

MATCH 
      (a: Profesor {id:'1'}), 
      (b: Habilidad {id:'2'}) 
CREATE (u)-[:SE_LE_FACILITA]->(b)
    
CREATE (pro:Profesor {
        id: '1', 
        nombre: 'Jessica Yustres', 
        edad: 34, 
        experiencia: 2
      }) return pro

CREATE (a:Habilidad {
        id: '2', 
        nombre: 'Expresar lo que piensa en el transcurso de un debate o una clase'
      }) return a

CREATE (a:Habilidad {
        id: '233', 
        nombre: 'Otra habilidad'
      }) return a
 */