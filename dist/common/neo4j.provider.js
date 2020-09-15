"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neo4jProvider = void 0;
const neo4j_driver_1 = require("neo4j-driver");
exports.Neo4jProvider = {
    provide: "Neo4j",
    useFactory: () => neo4j_driver_1.default.driver("bolt://3.133.83.118", neo4j_driver_1.default.auth.basic("neo4j", "1234"))
};
//# sourceMappingURL=neo4j.provider.js.map