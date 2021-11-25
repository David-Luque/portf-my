import gatsbyHotelImage from './images/project-images/gatsby-hotel-img.jpg';
import mernTasksImage from './images/project-images/mern-tasks-img.png';
import natoursImage from './images/project-images/natours-img.png';
import nexterImage from './images/project-images/nexter-img.jpg';
import nodeSendImage from './images/project-images/nodesend-img.png';
import portfolioImage from './images/project-images/portfolio-img.png';
import productHuntImage from './images/project-images/product-hunt-img.png';
import realStateImage from './images/project-images/real-state-img.jpg';
import seelerRocketImage from './images/project-images/seeker-rocket-img.png';
import trilloImage from './images/project-images/trillo-img.jpg';
import wayDragonImage from './images/project-images/way-dragon-img.jpg';

const projectsData = [
    {
        name: "MERN Tasks",
        description_esp: "Aplicación web para gestionar tus proyectos, así como sus tareas y estado actual. Desarrollado con el stack MERN",
        description_eng: "Web application to manage your projects, tasks and their status. Developed with MERN stack",
        project_image: mernTasksImage,
        gitHub_links: [
            "https://github.com/David-Luque/MERN-task-app-Client",
            "https://github.com/David-Luque/MERN-task-app-Server" 
        ],
        publicURL: "https://mern-task-app.netlify.app/"
    }, 
    {
        name: "Node Send",
        description_esp: "Aplicación web para compartir archivos, controlando quién puede acceder y cuántas veces se puede descargar el archivo. Los archivos se eliminan después sin permanecer en la red. Desarrollado con NextJS, NodeJS, ExpressJS y MongoDB.",
        description_eng: "Web application for direct file sharing controlling who can access and how many times the file can be downloaded. The files are then deleted without remaining on the network. Developed with NextJS, NodeJS, ExpressJS and MongoDB.",
        project_image: nodeSendImage,
        gitHub_links: [
            "https://github.com/David-Luque/node-send-client", 
            "https://github.com/David-Luque/node-send-server"
        ],
        publicURL: "https://gallant-blackwell-a34f30.netlify.app/"
    }, 
    {
        name: "Gatsby Hotel",
        description_esp: "Ejemplo de sitio web de un hotel. Desarrollado con Gatsby, centrado en el buen rendimiento de las versiones web y móvil",
        description_eng: "Hotel website example. Developed with Gatsby, focused on perforance on web and mobile versions",
        project_image: gatsbyHotelImage,
        gitHub_links: ["https://github.com/David-Luque/REACT_Hooks_Context_Redux_MERN/tree/main/gatsby-hotel"],
        publicURL: "https://keen-hopper-57655d.netlify.app/"
    }, 
    {
        name: "Real State",
        description_esp: "Ejemplo de página web inmobiliaria. Desarrollado con Gatsby, centrado en profundizar en esta tecnología manteniendo también los mejores resultados de rendimiento en todas las versiones de dispositivos",
        description_eng: "Real estate website example. Developed with Gatsby, focused on deepening in this technology also keeping the best performance results on all devices versions",
        project_image: realStateImage,
        gitHub_links: ["https://github.com/David-Luque/REACT_Hooks_Context_Redux_MERN/tree/main/real-state-webapp-frontend"],
        publicURL: "https://objective-mclean-2db235.netlify.app/"
    }, 
    {
        name: "Product Hunt",
        description_esp: "Aplicación web para compartir, descubrir y comentar ideas y proyectos con la comunidad. Permite a los usuarios registrados votar, comentar y publicar sus propios proyectos. Desarrollado sobre NextJS y Firebase como CMS",
        description_eng: "Web application to share, discover and comment ideas and projects with the community. Allows registered users to vote, comment and publish their own projects. Developed on NextJS and Firebase as a CMS",
        project_image: productHuntImage,
        gitHub_links: ["https://github.com/David-Luque/REACT_Hooks_Context_Redux_MERN/tree/main/product-hunt-next"],
        publicURL: "https://product-hunt-eight.vercel.app/"
    }, 
    {
        name: "Natours Landing page",
        description_esp: "Página de inicio de empresa de experiencias en la naturaleza. Describe sus principales productos, características y experiencias de los usuarios. Desarrollado en vanilla JS, HTML y SASS. Centrado en los fundamentos del estilo y también en la estructura de archivos y carpetas CSS.",
        description_eng: "Nature experiences company's landing page. Describes its main products, features and user's experiences. Developed in vanilla JS, HTML and SASS. Focused on basics of styling and also on CSS files and folders structure.",
        project_image: natoursImage,
        gitHub_links: ["https://github.com/David-Luque/css_sass_landing-page"],
        publicURL: "https://david-luque.github.io/css_sass_landing-page/"
    }, 
    {
        name: "Trillo Landing page",
        description_esp: "Diseño de la sección 'Hoteles' de aplicación web para gestionar los viajes. Muestra los detalles básicos como la ubicación, las características de la habitación, la calificación y las experiencias de los usuarios. Desarrollado en vanilla JS, HTML y SASS. Centrado en el diseño flexbox",
        description_eng: "Hotel section layout of web application to travels manage. Show basic etails like location, room characteristics, rating and users experiences. Developed in vanilla JS, HTML and SASS. Focused on flexbox layout design",
        project_image: trilloImage,
        gitHub_links: ["https://github.com/David-Luque/hotel-details-webpage"],
        publicURL: "https://david-luque.github.io/hotel-details-webpage/"
    }, 
    {
        name: "Nexter Landing page",
        description_esp: "Diseño de página de inicio para una aplicación web de búsqueda de viviendas de lujo. Desarrollado en vanilla JS, HTML y SASS. Centrado en el diseño con la herramienta ‘grid' de CSS.",
        description_eng: "Home page layout for a web application to search for luxury homes. Developed in vanilla JS, HTML and SASS. Focused on grid layout design",
        project_image: nexterImage,
        gitHub_links: ["https://github.com/David-Luque/Nexter_landing-page_grid-layout"],
        publicURL: "https://david-luque.github.io/Nexter_landing-page_grid-layout/"
    }, 
    {
        name: "Seeker Rocket",
        description_esp: "Aplicación web para almacenar y gestionar tu colección de juegos de mesa. Segundo proyecto en el bootcamp de IronHack, orientado al renderizado del lado del servidor. Desarrollado sobre NodeJS y Express, Handlebars y MongoDB.",
        description_eng: "Web application to store and manage your board games collection. Second project on IronHack bootcamp, oriented to server side rendering. Developed on NodeJS and Express, Handlebars and MongoDB",
        project_image: seelerRocketImage,
        gitHub_links: ["https://github.com/David-Luque/Seeker-rocket-project"],
        publicURL: "https://web-app-boardgames-project.herokuapp.com/"
    }, 
    {
        name: "Way of the Dragon The videogame",
        description_esp: "Videojuego arcade de estilo retro. Mi primer proyecto, también en el bootcamp de Ironhack, desarrollado en vanilla JS (canvas), CSS y HTML",
        description_eng: "Retro arcade style videogame. My first project, also in Ironhack bootcamp, developed on vanilla JS (canvas), CSS and HTML.",
        project_image: wayDragonImage,
        gitHub_links: ["https://github.com/David-Luque/Way-of-the-dragon-videogame"],
        publicURL: "https://david-luque.github.io/Way-of-the-dragon-videogame/"
    },
    {
        name: "Portfolio",
        description_esp: "Este sitio web. Proyecto desarrollado en Gatsby con SASS. ¡Enfocado a iniciar mi camino profesional en la industria del software! :)",
        description_eng: "This website. Project developed on gatsby with SASS, and focused on starting my professional path in the software industry! :)",
        project_image: portfolioImage,
        gitHub_links: ["https://github.com/David-Luque/portf-my"],
        publicURL: "https://mystifying-saha-3a377e.netlify.app/"
    }
];

export default projectsData;