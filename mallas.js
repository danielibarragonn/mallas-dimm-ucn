/* Datos de las mallas DIMM-UCN.
 * Cada ramo: [nombre, sigla, semestre, créditos SCT, categoría, [prerrequisitos]]
 * cicloBasico: último semestre del ciclo básico (los ramos posteriores exigen tenerlo completo).
 * ventana: cuántos semestres por sobre el "semestre base" se pueden proyectar.
 * notaCicloBasico: si existe, la exigencia del ciclo básico se muestra como restricción de la carrera (no de la app).
 * notaProyeccion: fuente oficial de la ventana, si existe (p. ej. el "Control de dispersión" de la malla).
 *   Sin ella, la app presenta la ventana como criterio propio de la herramienta.
 * exigeCicloBasico: si es true, la app considera que los ramos posteriores al ciclo básico
 *   requieren el ciclo básico completo (criterio de la herramienta, por confirmar con Jefatura).
 */
window.MALLAS = {
  categorias: {
    BAS: { nombre: "Básica", color: "#2E86C1" },
    PRO: { nombre: "Profesional", color: "#28B463" },
    FG:  { nombre: "Formación general", color: "#AF7AC5" },
    LAB: { nombre: "Práctica", color: "#F5B041" },
    ELE: { nombre: "Electivo", color: "#7F8C8D" }
  },
  carreras: [
    {
      // Revisada con la malla oficial y el Libro de Carrera 2023 (prerrequisitos y categorías).
      id: "minas",
      nombre: "Ingeniería Civil de Minas",
      corto: "ICMIN",
      descripcion: "Diseño, planificación y operación de minas a cielo abierto y subterráneas.",
      acento: "#e8891c",
      cicloBasico: 4,
      ventana: 2,
      exigeCicloBasico: true,
      notaCicloBasico: "Para cursar ramos del ciclo profesional se debe tener aprobado el ciclo básico completo. Se debe solicitar levantamiento de prerrequisitos a Jefatura de Carrera.",
      notaProyeccion: "Control de dispersión (malla oficial): la asignatura más adelantada que se puede inscribir no puede superar en dos semestres el nivel del estudiante, que corresponde al semestre de su asignatura más atrasada.",
      semestres: {
        s1: [
          ["Cálculo I", "CAL-I", 1, 6, "BAS", []],
          ["Introducción a la Física", "FIS-I", 1, 6, "BAS", []],
          ["Álgebra I", "ALG-I", 1, 6, "BAS", []],
          ["Identidad, universidad, equidad y género", "IdU", 1, 1, "FG", []],
          ["Inglés I", "INGL-I", 1, 4, "FG", []],
          ["Comunicación efectiva I", "COE-I", 1, 2, "FG", []],
          ["Proyecto introducción a la ingeniería", "PInt", 1, 5, "BAS", []]
        ],
        s2: [
          ["Cálculo II", "CAL-II", 2, 6, "BAS", ["CAL-I"]],
          ["Mecánica", "FIS-II", 2, 6, "BAS", ["CAL-I", "FIS-I"]],
          ["Química general", "QUI", 2, 6, "BAS", []],
          ["Álgebra II", "ALG-II", 2, 6, "BAS", ["ALG-I"]],
          ["Inglés II", "INGL-II", 2, 4, "FG", ["INGL-I"]],
          ["Diálogo, fe-cultura", "DFC-I", 2, 2, "FG", ["IdU"]]
        ],
        s3: [
          ["Cálculo III", "CAL-III", 3, 5, "BAS", ["CAL-II"]],
          ["Ecuaciones diferenciales", "ECD", 3, 5, "BAS", ["CAL-II", "ALG-II"]],
          ["Programación", "PRG", 3, 5, "BAS", ["ALG-I", "PInt"]],
          ["Materiales y estática", "MAT", 3, 5, "BAS", ["FIS-II"]],
          ["Diálogo, fe-ciencia", "DFC-II", 3, 2, "FG", ["DFC-I"]],
          ["Formación general electiva", "FGE", 3, 2, "FG", []],
          ["Proyecto diseño e innovación", "PDI", 3, 6, "BAS", ["PInt"]]
        ],
        s4: [
          ["Electromagnetismo", "ELM", 4, 6, "BAS", ["CAL-III", "FIS-II", "ALG-I"]],
          ["Estadística", "EST", 4, 6, "BAS", ["CAL-II"]],
          ["Termodinámica", "TER", 4, 5, "BAS", ["QUI", "CAL-II"]],
          ["Geología general y estructural", "GEO-I", 4, 5, "BAS", []],
          ["Ética moral y profesional", "ETP", 4, 2, "FG", ["DFC-II"]],
          ["Proyecto introducción a la minería", "PIM", 4, 6, "BAS", ["PInt"]]
        ],
        s5: [
          ["Ingeniería económica", "INGECO", 5, 5, "PRO", ["CAL-II"]],
          ["Ingeniería y desarrollo sustentable", "SUST", 5, 5, "PRO", []],
          ["Carguío y transporte", "CYT", 5, 5, "PRO", ["PIM"]],
          ["Geomensura", "GMS", 5, 5, "PRO", ["ALG-II", "CAL-II"]],
          ["Geología económica minera", "GEO-II", 5, 5, "PRO", ["GEO-I"]],
          ["Modelamiento geoestadístico", "GEOEST", 5, 5, "PRO", ["EST"]]
        ],
        s6: [
          ["Computación aplicada a la minería", "CAM", 6, 5, "PRO", ["GEOEST"]],
          ["Geomecánica I", "GEOM-I", 6, 5, "PRO", ["GEO-I"]],
          ["Minería a cielo abierto", "MCA", 6, 5, "PRO", ["CYT"]],
          ["Perforación y tronadura", "PYT", 6, 5, "PRO", ["GMS"]],
          ["Electivo profesional minor 1", "EPM-I", 6, 5, "PRO", []],
          ["Proyecto evaluación de yacimientos", "PEY", 6, 5, "PRO", ["GEOEST", "GEO-II"]],
          ["Práctica profesional", "PRACT", 6, 0, "LAB", ["CAL-I", "FIS-I", "ALG-I", "IdU", "INGL-I", "COE-I", "PInt", "CAL-II", "FIS-II", "QUI", "ALG-II", "INGL-II", "DFC-I", "CAL-III", "ECD", "PRG", "MAT", "DFC-II", "FGE", "PDI", "ELM", "EST", "TER", "GEO-I", "ETP", "PIM", "INGECO", "SUST", "CYT", "GMS", "GEO-II", "GEOEST", "CAM", "GEOM-I", "MCA", "PYT", "EPM-I", "PEY"]]
        ],
        s7: [
          ["Planificación minera", "PLM", 7, 5, "PRO", ["CYT"]],
          ["Geomecánica II", "GEOM-II", 7, 5, "PRO", ["GEOM-I"]],
          ["Minería subterránea", "MS", 7, 5, "PRO", ["GEOM-I", "PYT", "PEY"]],
          ["Procesos metalúrgicos", "PMET", 7, 5, "PRO", ["GEO-II"]],
          ["Proyecto operaciones unitarias mina", "PROUN", 7, 5, "PRO", ["CYT"]],
          ["Electivo profesional minor 2", "EPM-II", 7, 5, "PRO", ["EPM-I"]]
        ],
        s8: [
          ["Gestión de operaciones y proyectos mineros", "GOPM", 8, 5, "PRO", ["PLM", "MS"]],
          ["Legislación y seguridad minera", "LSM", 8, 5, "PRO", ["MCA"]],
          ["Ventilación de minas", "VM", 8, 5, "PRO", ["MS"]],
          ["Emprendimiento", "EMP", 8, 3, "PRO", []],
          ["Comunicación efectiva II", "COE-II", 8, 2, "FG", ["COE-I"]],
          ["Electivo profesional minor 3", "EPM-III", 8, 5, "PRO", ["EPM-II"]],
          ["Proyecto minero", "PM", 8, 5, "PRO", ["CAM", "MCA"]]
        ],
        s9: [
          ["Electivo profesional I", "EP-I", 9, 5, "PRO", []],
          ["Electivo profesional II", "EP-II", 9, 5, "PRO", []],
          ["Electivo profesional III", "EP-III", 9, 5, "PRO", []],
          ["Electivo profesional IV", "EP-IV", 9, 5, "PRO", []],
          ["Electivo profesional V", "EP-V", 9, 5, "PRO", []],
          ["Electivo profesional VI", "EP-VI", 9, 5, "PRO", []]
        ],
        s10: [
          ["Capstone project", "CAPS", 10, 30, "PRO", ["PRACT", "CAM", "GEOM-I", "MCA", "PYT", "EPM-I", "PEY", "PLM", "GEOM-II", "MS", "PMET", "PROUN", "EPM-II", "GOPM", "LSM", "VM", "EMP", "COE-II", "EPM-III", "PM", "EP-I", "EP-II", "EP-III", "EP-IV", "EP-V", "EP-VI"]]
        ]
      }
    },
    {
      id: "icmet",
      nombre: "Ingeniería Civil Metalúrgica",
      corto: "ICMET",
      descripcion: "Procesos para transformar minerales en metales: hidro, piro y electrometalurgia.",
      acento: "#c0492f",
      cicloBasico: 4,
      ventana: 2,
      exigeCicloBasico: true,
      semestres: {
        s1: [
          ["Cálculo I", "CAL-I", 1, 6, "BAS", []],
          ["Introducción a la física", "FIS-I", 1, 6, "BAS", []],
          ["Álgebra I", "ALG-I", 1, 6, "BAS", []],
          ["Identidad, Universidad, Equidad y Género", "IdU", 1, 1, "FG", []],
          ["Inglés I", "INGL-I", 1, 4, "FG", []],
          ["Comunicación efectiva I", "COE-I", 1, 2, "FG", []],
          ["Proyecto Introducción a la ingeniería", "PInt", 1, 5, "BAS", []]
        ],
        s2: [
          ["Cálculo II", "CAL-II", 2, 6, "BAS", ["CAL-I"]],
          ["Mecánica", "FIS-II", 2, 6, "BAS", ["FIS-I"]],
          ["Química general", "QUI", 2, 6, "BAS", []],
          ["Álgebra II", "ALG-II", 2, 6, "BAS", ["ALG-I"]],
          ["Diálogo, Fe-Cultura", "DFC-I", 2, 2, "FG", ["IdU"]],
          ["Inglés II", "INGL-II", 2, 4, "FG", ["INGL-I"]]
        ],
        s3: [
          ["Ecuaciones diferenciales", "ECD", 3, 5, "BAS", ["CAL-II", "ALG-II"]],
          ["Cálculo III", "CAL-III", 3, 5, "BAS", ["CAL-II"]],
          ["Termodinámica", "TER", 3, 5, "BAS", ["QUI", "CAL-II"]],
          ["Geología y Mineralogía", "GYM", 3, 5, "BAS", ["QUI"]],
          ["Diálogo, Fe-Ciencia", "DFC-II", 3, 2, "FG", ["DFC-I"]],
          ["Formación general electiva", "FGE", 3, 2, "FG", []],
          ["Proyecto diseño e innovación", "PDI", 3, 6, "BAS", ["PInt"]]
        ],
        s4: [
          ["Estadística", "EST", 4, 6, "BAS", ["CAL-II"]],
          ["Electromagnetismo", "ELM", 4, 6, "BAS", ["FIS-II", "CAL-III", "ALG-I"]],
          ["Termodinámica aplicada", "TER-AP", 4, 5, "PRO", ["TER"]],
          ["Operaciones mecánicas", "OPMEC", 4, 5, "PRO", ["GYM"]],
          ["Ética y moral profesional", "ETP", 4, 2, "FG", ["DFC-II"]],
          ["Proyecto Intro a la Ing. Metalúrgica", "PIMET", 4, 6, "PRO", ["PDI"]]
        ],
        s5: [
          ["Ingeniería y desarrollo sustentable", "SUST", 5, 5, "PRO", []],
          ["Programación", "PRG", 5, 5, "BAS", ["ALG-II", "PIMET"]],
          ["Operaciones Mineras", "OPMIN", 5, 5, "PRO", ["GYM"]],
          ["Procesamiento de minerales", "PMIN", 5, 5, "PRO", ["OPMEC"]],
          ["Cinética metalúrgica", "CINMET", 5, 5, "PRO", ["ECD", "TER-AP"]],
          ["Métodos numéricos", "MNUM", 5, 5, "BAS", ["ECD"]]
        ],
        s6: [
          ["Mecánica de fluidos", "MFL", 6, 5, "PRO", ["ALG-I", "ECD"]],
          ["Ingeniería económica", "INGECO", 6, 5, "PRO", ["CAL-II"]],
          ["Transferencia de masa y calor", "TMC", 6, 5, "PRO", ["CINMET"]],
          ["Disolución de sistemas acuosos", "DSA", 6, 5, "PRO", ["CINMET"]],
          ["Electivo profesional I", "EP-I", 6, 5, "ELE", []],
          ["Proyecto procesamiento de minerales", "PPMIN", 6, 5, "PRO", ["PIMET", "PMIN"]],
          ["Práctica Profesional", "PRACT", 6, 0, "LAB", ["CAL-I", "FIS-I", "ALG-I", "IdU", "INGL-I", "COE-I", "PInt", "CAL-II", "FIS-II", "QUI", "ALG-II", "DFC-I", "INGL-II", "ECD", "CAL-III", "TER", "GYM", "DFC-II", "FGE", "PDI", "EST", "ELM", "TER-AP", "OPMEC", "ETP", "PIMET", "SUST", "PRG", "OPMIN", "PMIN", "CINMET", "MNUM", "MFL", "INGECO", "TMC", "DSA", "EP-I", "PPMIN"]]
        ],
        s7: [
          ["Electrotecnia", "ELETEC", 7, 5, "PRO", ["ECD", "ELM"]],
          ["Separación sólido-líquido", "SSL", 7, 5, "PRO", ["MFL"]],
          ["Proceso de fusión", "PFUS", 7, 5, "PRO", ["TMC"]],
          ["Tratamiento de soluciones y electrometalurgia", "TSE", 7, 5, "PRO", ["CINMET"]],
          ["Electivo profesional II", "EP-II", 7, 5, "ELE", []],
          ["Proyecto hidrometalúrgico", "PHM", 7, 5, "PRO", ["CINMET", "DSA"]]
        ],
        s8: [
          ["Materiales y sus propiedades", "MATPROP", 8, 5, "PRO", []],
          ["Refinación alta temperatura", "RAT", 8, 5, "PRO", ["TMC"]],
          ["Seguridad y legislación laboral", "SLL", 8, 5, "PRO", ["TMC"]],
          ["Emprendimiento", "EMP", 8, 3, "PRO", []],
          ["Electivo profesional III", "EP-III", 8, 5, "ELE", []],
          ["Comunicación efectiva II", "COE-II", 8, 2, "FG", ["COE-I"]],
          ["Proyecto Nuevas tecnologías en metalurgia extractiva", "PNTME", 8, 5, "PRO", ["PHM"]]
        ],
        s9: [
          ["Control de procesos", "CPROC", 9, 5, "PRO", ["DSA"]],
          ["Electivo profesional IV", "EP-IV", 9, 5, "ELE", []],
          ["Electivo profesional V", "EP-V", 9, 5, "ELE", []],
          ["Electivo profesional VI", "EP-VI", 9, 5, "ELE", []],
          ["Electivo profesional VII", "EP-VII", 9, 5, "ELE", []],
          ["Electivo profesional VIII", "EP-VIII", 9, 5, "ELE", []]
        ],
        s10: [
          ["Actividad de titulación", "CAPS", 10, 30, "PRO", ["CAL-I", "FIS-I", "ALG-I", "IdU", "INGL-I", "COE-I", "PInt", "CAL-II", "FIS-II", "QUI", "ALG-II", "DFC-I", "INGL-II", "ECD", "CAL-III", "TER", "GYM", "DFC-II", "FGE", "PDI", "EST", "ELM", "TER-AP", "OPMEC", "ETP", "PIMET", "SUST", "PRG", "OPMIN", "PMIN", "CINMET", "MNUM", "MFL", "INGECO", "TMC", "DSA", "EP-I", "PPMIN", "PRACT", "ELETEC", "SSL", "PFUS", "TSE", "EP-II", "PHM", "MATPROP", "RAT", "SLL", "EMP", "EP-III", "COE-II", "PNTME", "CPROC", "EP-IV", "EP-V", "EP-VI", "EP-VII", "EP-VIII"]]
        ]
      }
    },
    {
      id: "iemet",
      nombre: "Ingeniería en Metalurgia",
      corto: "IEMET",
      descripcion: "Operación y control de plantas de procesamiento de minerales y metalurgia extractiva.",
      acento: "#1f8a6a",
      cicloBasico: 3,
      ventana: 2,
      exigeCicloBasico: true,
      semestres: {
        s1: [
          ["Cálculo I", "CAL-I", 1, 6, "BAS", []],
          ["Química general", "QUI", 1, 6, "BAS", []],
          ["Álgebra I", "ALG-I", 1, 6, "BAS", []],
          ["Identidad, Universidad, Equidad y Género", "IdU", 1, 1, "FG", []],
          ["Inglés I", "INGL-I", 1, 4, "FG", []],
          ["Comunicación efectiva I", "COE-I", 1, 2, "FG", []],
          ["Proyecto Introducción a la ingeniería", "PInt", 1, 5, "BAS", []]
        ],
        s2: [
          ["Cálculo II", "CAL-II", 2, 6, "BAS", ["CAL-I"]],
          ["Física I", "FIS-I", 2, 6, "BAS", ["CAL-I"]],
          ["Álgebra II", "ALG-II", 2, 6, "BAS", ["ALG-I"]],
          ["Diálogo, Fe-Cultura", "DFC-I", 2, 2, "FG", ["IdU"]],
          ["Inglés II", "INGL-II", 2, 4, "FG", ["INGL-I"]],
          ["Proyecto diseño e innovación", "PDI", 2, 6, "BAS", ["PInt"]]
        ],
        s3: [
          ["Estadística", "EST", 3, 6, "BAS", ["CAL-II"]],
          ["Física II", "FIS-II", 3, 6, "BAS", ["FIS-I"]],
          ["Termodinámica", "TER", 3, 5, "BAS", ["QUI", "CAL-II"]],
          ["Mineralogía", "MIN", 3, 5, "BAS", []],
          ["Diálogo, Fe-Ciencia", "DFC-II", 3, 2, "FG", []],
          ["Proyecto Intro a la Ing. Metalúrgica", "PIMET", 3, 6, "BAS", ["PInt"]]
        ],
        s4: [
          ["Mecánica de fluidos", "MFL", 4, 5, "PRO", ["FIS-I", "CAL-II"]],
          ["Herramientas Computacionales", "HC", 4, 5, "PRO", []],
          ["Cinética Aplicada", "CINAPL", 4, 5, "PRO", ["QUI", "CAL-II"]],
          ["Preparación mecánica de minerales", "PMM", 4, 5, "PRO", []],
          ["Ética", "ETP", 4, 2, "FG", ["DFC-II"]],
          ["Formación General", "FG", 4, 2, "FG", []],
          ["Proyecto de procesamiento de minerales", "PPMIN", 4, 6, "PRO", ["PIMET"]]
        ],
        s5: [
          ["Transferencia de masa y calor", "TMC", 5, 5, "PRO", ["MFL"]],
          ["Ingeniería económica", "INGECO", 5, 5, "PRO", ["CAL-II"]],
          ["Procesos Pirometalúrgicos I", "PPI", 5, 5, "PRO", ["TER"]],
          ["Concentración de minerales", "CONCMIN", 5, 5, "PRO", ["PMM", "MIN"]],
          ["Gestión ambiental", "GAMB", 5, 5, "PRO", []],
          ["Proyecto de hidrometalurgia", "PHM", 5, 5, "PRO", ["CINAPL"]]
        ],
        s6: [
          ["Electivo profesional I", "EP-I", 6, 5, "ELE", []],
          ["Emprendimiento", "EMP", 6, 3, "PRO", []],
          ["Procesos Pirometalúrgicos II", "PPII", 6, 5, "PRO", ["PPI"]],
          ["Espesamiento y filtración", "ESPFIL", 6, 5, "PRO", ["MFL"]],
          ["Hidrometalurgia I", "HIDRO-I", 6, 5, "PRO", ["TER", "CINAPL"]],
          ["Comunicación efectiva II", "COE-II", 6, 2, "FG", ["COE-I"]],
          ["Proyecto Nuevas tecnologías en metalurgia extractiva", "PNTME", 6, 5, "PRO", ["PHM"]],
          ["Práctica Profesional", "PRACT", 6, 0, "LAB", ["CAL-I", "QUI", "ALG-I", "IdU", "INGL-I", "COE-I", "PInt", "CAL-II", "FIS-I", "ALG-II", "DFC-I", "INGL-II", "PDI", "EST", "FIS-II", "TER", "MIN", "DFC-II", "PIMET", "MFL", "HC", "CINAPL", "PMM", "ETP", "FG", "PPMIN", "TMC", "INGECO", "PPI", "CONCMIN", "GAMB", "PHM", "EP-I", "EMP", "PPII", "ESPFIL", "HIDRO-I", "COE-II", "PNTME"]]
        ],
        s7: [
          ["Electivo profesional II", "EP-II", 7, 5, "ELE", []],
          ["Electivo profesional III", "EP-III", 7, 5, "ELE", []],
          ["Seguridad y legislación laboral", "SLL", 7, 5, "PRO", []],
          ["Control de procesos", "CPROC", 7, 5, "PRO", ["PNTME"]],
          ["Hidrometalurgia II", "HIDRO-II", 7, 5, "PRO", ["TER", "CINAPL"]],
          ["Electivo profesional IV", "EP-IV", 7, 5, "ELE", []]
        ],
        s8: [
          ["Actividad de titulación", "CAPS", 8, 30, "PRO", ["PRACT", "EP-II", "EP-III", "SLL", "CPROC", "HIDRO-II", "EP-IV"]]
        ]
      }
    }
  ]
};
