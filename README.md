# Mallas interactivas DIMM · UCN

Una sola página con las mallas curriculares interactivas de las tres carreras del
Departamento de Ingeniería Metalúrgica y Minas (UCN):

| Carrera | Enlace directo |
|---|---|
| Ingeniería Civil de Minas | `index.html#minas` |
| Ingeniería Civil Metalúrgica | `index.html#icmet` |
| Ingeniería en Metalurgia | `index.html#iemet` |

Reemplaza a los repositorios `m-dimm`, `m-icmet` y `m-iemet`.

## Archivos

- `index.html` — pantalla de inicio, vista de malla, estilos y lógica.
- `mallas.js` — **los datos**. Es lo único que hay que tocar para actualizar una malla.
- `logo_ucn.png` — logo del departamento.

Funciona abriendo `index.html` directamente (doble clic) o publicado en GitHub Pages
(Settings → Pages → Deploy from branch → `main` / root). No necesita servidor ni compilación.

## Cómo editar una malla

En `mallas.js`, cada carrera tiene:

- `cicloBasico`: último semestre del ciclo básico. Los ramos posteriores exigen tener el ciclo básico completo.
- `ventana`: cuántos semestres por sobre el semestre base se pueden proyectar (2 → base a base+2).
- `semestres`: un bloque por semestre; cada ramo es
  `["Nombre", "SIGLA", semestre, SCT, "CATEGORÍA", ["PRERREQ-1", "PRERREQ-2"]]`.

Categorías: `BAS` Básica · `PRO` Profesional · `FG` Formación general · `LAB` Práctica · `ELE` Electivo
(nombres y colores en `categorias`, al inicio del archivo).

Para agregar una carrera nueva basta con añadir otro objeto a `carreras` con un `id` único.

## Reglas de disponibilidad

La app separa dos cosas:

**Requisitos de la malla** (vienen de los datos): los prerrequisitos de cada ramo.

**Ventana de proyección**: solo se proyectan ramos entre el semestre base y base + `ventana`,
donde el semestre base es el más bajo con ramos pendientes (sin contar Práctica ni Titulación).
En Ing. Civil de Minas esto corresponde al *Control de dispersión* de la malla oficial y se trata
como requisito (`notaProyeccion`). En las carreras sin `notaProyeccion` se muestra como criterio
de la herramienta.

**Criterios de la herramienta** (no son exigencias del Libro de Carrera):
1. Ventana de proyección, en las carreras sin fuente oficial (ver arriba).
2. *Ciclo básico* (`exigeCicloBasico: true`): los ramos posteriores a `cicloBasico` se consideran
   proyectables solo con el ciclo básico completo. En Minas está confirmado como restricción operativa
   (`notaCicloBasico`); en las otras carreras está por confirmar. Para desactivarlo, `exigeCicloBasico: false`.

Un ramo aparece como **disponible** cuando cumple ambos. Si cumple sus prerrequisitos pero no los
criterios, el detalle lo indica como "fuera de la proyección estimada".
La Práctica Profesional (`PRACT`) solo se evalúa por sus prerrequisitos.

El botón **Reglas de inscripción** (activo por defecto) permite desactivar la ventana de proyección y la
exigencia del ciclo básico para ver solo prerrequisitos; útil, por ejemplo, con un levantamiento de
prerrequisitos. La preferencia queda guardada en el navegador.

## Fuentes de los datos

- Ingeniería Civil de Minas: revisada con la malla oficial y el Libro de Carrera 2023.
  - Categorías: ciclo básico de 4 semestres; formación general: 9 asignaturas, 21 SCT; Gestión de
    operaciones y proyectos mineros y Legislación y seguridad minera son del ciclo profesional.
  - Prerrequisitos (páginas del PDF del Libro de Carrera): Química general sin prerrequisitos (p. 79);
    Ecuaciones diferenciales ← Cálculo II y Álgebra II (pp. 135–136); Carguío y transporte ← Proyecto
    introducción a la minería (p. 175); Gestión de operaciones y proyectos mineros ← Planificación minera
    y Minería subterránea (pp. 233 y 264, confirmado por la carrera); Legislación y seguridad minera ←
    Minería a cielo abierto (pp. 271–272); Proyecto minero ← Computación aplicada a la minería y Minería
    a cielo abierto (p. 292).
  - Control de dispersión (malla oficial) = ventana de 2 semestres.
  - Ciclo básico completo para entrar al profesional: restricción operativa de la carrera
    (se debe solicitar levantamiento de prerrequisitos a Jefatura de Carrera).
  La secuencia de los electivos minor (1 → 2 → 3) no aparece en la malla oficial; está por confirmar.

## Avance

Se guarda en el navegador (localStorage), **por separado para cada carrera**.
Herramienta de apoyo no oficial: la información válida es la de Jefatura de Carrera y los sistemas UCN.


La versión para ferias vocacionales (pantalla táctil, con el Arcade DIMM) está en el repositorio
[`feria-dimm-ucn`](https://github.com/danielibarragonn/feria-dimm-ucn) y lee los datos de `mallas.js` de este sitio.
