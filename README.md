# Portfolio Personal | Gastón Jaureguiberry

**Desarrollador Web | React · JavaScript · Node.js**

Portfolio profesional desarrollado con React y Vite para presentar mis proyectos, experiencia laboral, formación académica y habilidades técnicas.

El proyecto ofrece dos interfaces de navegación: una versión orientada al desarrollo de software y una versión clásica de currículum profesional. Ambas comparten la misma información mediante una arquitectura basada en componentes reutilizables y datos centralizados.

## Sobre el proyecto

Este portfolio fue desarrollado como parte de mi crecimiento profesional en el desarrollo web y como espacio para presentar mis trabajos y competencias técnicas.

El objetivo es combinar una presentación visual atractiva con una estructura de código organizada, mantenible y preparada para incorporar nuevos proyectos, tecnologías y experiencias.

### Dos versiones, un mismo portfolio

**Portfolio Developer (`/`)**

Interfaz inspirada en un entorno de programación, con elementos visuales que representan código JavaScript y componentes interactivos.

Incluye presentación profesional, habilidades técnicas, proyectos, experiencia laboral, formación y contacto.

**CV Clásico (`/cv`)**

Versión tradicional, diseñada para presentar la información profesional de forma clara y estructurada.

Incluye experiencia laboral, referencias profesionales, herramientas, proyectos, certificaciones y datos de contacto. También permite imprimir o guardar el currículum como PDF desde el navegador.

Las dos versiones utilizan archivos de datos compartidos, evitando duplicar información y facilitando las actualizaciones.

## Tecnologías utilizadas

| Tecnología | Aplicación |
|---|---|
| React | Desarrollo de interfaces y componentes |
| JavaScript | Lógica e interactividad |
| Vite | Entorno de desarrollo y compilación |
| React Router | Navegación entre versiones |
| CSS3 | Estilos, diseño responsive y personalización |
| HTML5 | Estructura semántica |
| Git y GitHub | Control de versiones |

## Arquitectura del proyecto

El código está organizado separando los componentes visuales, la información profesional y los estilos.

```text
src/
├── components/
│   ├── dev/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   │
│   ├── classic/
│   │   ├── ClassicHeader.jsx
│   │   ├── ClassicProfile.jsx
│   │   ├── ClassicAbout.jsx
│   │   ├── ClassicProjects.jsx
│   │   ├── ClassicExperience.jsx
│   │   ├── ClassicSkills.jsx
│   │   ├── ClassicServices.jsx
│   │   ├── ClassicEducation.jsx
│   │   ├── ClassicContact.jsx
│   │   └── ClassicFooter.jsx
│   │
│   └── shared/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── ArchivoPDF.jsx
│
├── data/
│   ├── profile.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   └── services.js
│
├── pages/
│   └── VersionClasica.jsx
│
├── styles/
│   ├── dev/
│   ├── classic/
│   └── global/
│
├── App.jsx
└── main.jsx
```

## Decisiones técnicas

### Arquitectura basada en componentes

La interfaz está dividida en componentes independientes, lo que permite mantener, modificar y ampliar cada sección sin afectar innecesariamente al resto de la aplicación.

### Centralización de datos

La información profesional se administra desde el directorio `src/data/`.

Esto permite que ambas versiones del portfolio consuman la misma información, manteniendo consistencia entre las interfaces.

### Separación de estilos

Los estilos están organizados según su responsabilidad:

- `styles/dev/`: presentación del portfolio developer.
- `styles/classic/`: presentación del CV tradicional.
- `styles/global/`: estilos generales y de componentes compartidos.

### Navegación

La aplicación utiliza React Router para administrar las rutas principales:

- `/` — Portfolio Developer.
- `/cv` — Currículum clásico.

### Visualización de certificaciones

La sección de formación permite visualizar las certificaciones académicas y, en la versión developer, ampliarlas mediante una ventana modal.

## Proyectos destacados

### Protectora de Animales de Mercedes

Aplicación web desarrollada para una organización real, orientada a visibilizar animales en adopción y administrar información mediante un panel de gestión.

**Tecnologías:** React, JavaScript, Supabase y CSS.

[Visitar proyecto](https://adopciones.protectoramercedesapp.workers.dev)

### Kansha Viajes

Plataforma web para una agencia de viajes, enfocada en presentar destinos, promociones y experiencias, con herramientas de administración.

**Tecnologías:** React, JavaScript, Supabase y CSS.

[Visitar proyecto](https://kanshaviajes.com)

### Spotter

Aplicación web para capturar fotografías y transformarlas en tarjetas coleccionables utilizando inteligencia artificial.

**Tecnologías:** React, Supabase e inteligencia artificial.

**Estado:** En desarrollo.

[Conocer Spotter](https://spotterapps.com)

## Instalación y ejecución local

Para ejecutar el proyecto en un entorno local, es necesario contar con Node.js y npm instalados.

**1. Clonar el repositorio**

```bash
git clone URL_DEL_REPOSITORIO
```

**2. Ingresar al directorio**

```bash
cd portfolio
```

**3. Instalar dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

**5. Generar una compilación para producción**

```bash
npm run build
```

La aplicación estará disponible en la dirección local indicada por Vite.

## Objetivos del proyecto

- Presentar mi perfil profesional y experiencia en desarrollo web.
- Mostrar proyectos desarrollados para necesidades reales.
- Aplicar buenas prácticas de organización y reutilización de componentes.
- Mantener una única fuente de información para diferentes interfaces.
- Facilitar la actualización de proyectos, habilidades y certificaciones.
- Continuar incorporando mejoras a medida que avanzo en mi formación técnica.

## Sobre mí

Soy desarrollador web con formación en React, JavaScript y tecnologías backend.

Mi experiencia previa en comunicación, marketing y diseño me permite abordar el desarrollo de soluciones digitales desde una perspectiva que combina implementación técnica, experiencia de usuario y objetivos de negocio.

Actualmente continúo profundizando mis conocimientos en desarrollo frontend, backend y arquitectura de aplicaciones, mientras desarrollo proyectos propios y trabajos freelance.

## Contacto

**Gastón Jaureguiberry**

- **Email:** gaston.jaureguib@gmail.com
- **LinkedIn:** [Gastón Jaureguiberry](https://www.linkedin.com/in/gast%C3%B3n-jaureguiberry-01971320a/)
- **Ubicación:** Uruguay

---

Desarrollado con React, JavaScript y Vite.

© 2026 Gastón Jaureguiberry.
