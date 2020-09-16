"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
let TeacherService = class TeacherService {
    constructor(neo4j) {
        this.neo4j = neo4j;
    }
    async getTeacher(dato) {
        const session = this.neo4j.session();
        console.log("date" + dato);
        const query = 'MATCH (a:Docente)-[:SE_LE_DIFICULTA]->(b:CacteristicaHabilidad),' +
            '(b:CacteristicaHabilidad)-[r:PERTENECE]->(c:Habilidad)' +
            'where  b.nombre  CONTAINS "' + dato + '" or c.nombre CONTAINS "' + dato + '"' +
            'RETURN a.nombre as nombre, a.direccion as direccion ,a.edad as edad, a.id as id, c.nombre as habilidad';
        return session
            .run(query)
            .then((result) => {
            session.close();
            const results = result.records.map(record => record.toObject());
            return results.map(pro => {
                return {
                    "@context": "http://schema.org/",
                    "@type": "Docente",
                    "nombre": pro.nombre,
                    "direccion": pro.direccion,
                    "edad": pro.edad,
                    "habilidad": pro.habilidad
                };
            });
        })
            .catch((error) => Promise.reject(new common_1.BadRequestException(error)));
    }
};
TeacherService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('Neo4j')),
    __metadata("design:paramtypes", [Object])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map