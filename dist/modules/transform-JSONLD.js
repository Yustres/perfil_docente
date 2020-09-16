"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeachers = void 0;
function getTeachers(array) {
    return array.map(pro => {
        return {
            "@context": "http://schema.org/",
            "@type": "Docente",
            "nombre": pro.nombre
        };
    });
}
exports.getTeachers = getTeachers;
//# sourceMappingURL=transform-JSONLD.js.map