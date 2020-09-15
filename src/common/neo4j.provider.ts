 
import neo4j from "neo4j-driver";

export const Neo4jProvider = {
  provide: "Neo4j",
  useFactory: () => 
    neo4j.driver("bolt://3.133.83.118", 
    neo4j.auth.basic("neo4j","1234"))
 }