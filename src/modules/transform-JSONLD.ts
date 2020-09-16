export function getTeachers (array) {
    return array.map(pro => {
        return {
            "@context": "http://schema.org/",
            "@type": "Docente",
            "nombre": pro.nombre
        }
    })
}



