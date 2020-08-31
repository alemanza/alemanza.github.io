// Works
import Waavi from '../assets/images/waavi.jpg'
import logoWaavi from '../assets/images/logoWaavi.png'
import BBVA from '../assets/images/bbva.jpg'
import logoGFT from '../assets/images/logoGFT.png'
import Trive from '../assets/images/trive.jpg'
import logoTrive from '../assets/images/logoTrive.png'
import Despe from '../assets/images/despe.jpg'
import logoDespe from '../assets/images/logoDespe.png'
import Clarin from '../assets/images/clarin.jpg'
import logoClarin from '../assets/images/logoClarin.png'

// Skills
import Html from '../assets/images/skills/htmlcss3.svg'
import Js from '../assets/images/skills/js.svg'
import Figma from '../assets/images/skills/figma.svg'
import Git from '../assets/images/skills/git.svg'
import Graphql from '../assets/images/skills/graphql.svg'
import Mongo from '../assets/images/skills/mongo.svg'
import Node from '../assets/images/skills/node.svg'
import ReactJs from '../assets/images/skills/react.svg'
import Sketch from '../assets/images/skills/sketch.svg'
import Vue from '../assets/images/skills/vue.svg'
import Zeplin from '../assets/images/skills/zeplin.svg'

// SOCIAL
export const SOCIAL = [
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/alejandro-manza/' },
    { icon: 'mail', url: 'mailto:alejandromanza@gmail.com' },
    { icon: 'instagram', url: 'https://www.instagram.com/alitomanza/' },
]

// WORKS
export const WORKS_TITLE = 'Equipos donde he trabajado'

export const WORKS = [
    {
        img: Waavi,
        logo: logoWaavi,
        dates: '2019 - 2020',
        name: 'Waavi Studios',
        position: 'Frontend Developer & Designer',
        description: [
            `En Waavi Studios trabajé como frontend developer
        utilizando VUEjs en el desarrollo de aplicaciones
        para distintos clientes.`,
            `También participé en la planificación y ejecución de
        proyectos, partiendo desde los wireframes hasta la
        realización del diseño en Figma y luego su
        implementación en el código.`,
        ],
        link: 'https://waavi.com/',
        y: 3.8,
    },
    {
        img: BBVA,
        logo: logoGFT,
        dates: '2019',
        name: 'GFT',
        position: 'Frontend Developer',
        description: [
            `En la consultora GFT trabajé en un proyecto para la banca BBVA, orientado a web components (Polymer / Lit Elements).`,
            `Conformé un equipo que se encargaba de llevar adelante nuevas features que fueron implementadas en la aplicación mobile. Utilizamos Scrum, lo que nos ayudó muchísimo en la organización de las tareas.`,
        ],
        link: 'https://gft.com/es/es/index/',
        y: 4.6,
    },
    {
        img: Trive,
        logo: logoTrive,
        dates: '2019',
        name: 'GOTrive.com',
        position: 'Frontend Developer',
        description: [
            `En GoTrive, formé parte del equipo que se encargó de llevar adelante el lanzamiento del nuevo producto motos.gotrive.com.`,
            `Utilizando NUXT (VueJs), tomando datos de una API mediante Axios e implementando librerías tanto de UI como de métodos de pago como Stripe.`,
        ],
        link: 'https://gotrive.com/',
        y: 5.45,
    },
    {
        img: Despe,
        logo: logoDespe,
        dates: '2014 - 2018',
        name: 'Despegar.com',
        position: 'Frontend Developer',
        description: [
            `En Despegar.com, formé parte del equipo de Homebox, encargado del mantenimiento y la actualización de la Home principal y la Caja de Búsqueda. Conformaba un equipo de 4 frontenders siendo referente en maquetación e interacciones de UI. Trabajé utilizando metodologías ágiles con compañeros de producto, UX y IT.`,
            `En los primeros 3 años en la empresa, formé parte de un proyecto que hoy en día ayuda a la consistencia del diseño de todas las interfaces del sitio. Se trata de una librería de CSS que unifica todos los elementos de la UI, basándose en los principios de Atomic Design. Allí me encargaba del desarrollo de cada componente con su respectiva documentación, dando soporte a todos los equipos para su correcta implementación.`,
        ],
        link: 'https://despegar.com.ar/',
        y: 6.2,
    },
    {
        img: Clarin,
        logo: logoClarin,
        dates: '2013 - 2014',
        name: 'Clarin.com',
        position: 'Frontend Developer',
        description: [
            `Clarín.com es el soporte digital de uno de los diarios más leídos de la República Argentina. Allí formé parte del equipo que llevó a cabo el rediseño que fue productivo en el año 2014.`,
            `Junto a mi equipo, nos encargamos de la maquetación del sitio en todas sus secciones, trabajando con metodologías ágiles en conjunto con los sectores de producto, redacción, diseño y IT.`,
        ],
        link: 'https://clarin.com/',
        y: 7,
    },
]

export const DEGREES = [
    {
        year: '2018 - 2020',
        name: 'VUE - React',
        place: 'Udemy + Platzi',
    },
    {
        year: '2012 - 2013',
        name: 'Desarrollo Frontend',
        place: 'Educación IT + Platzi',
    },
    {
        year: '2011',
        name: 'Diseño gráfico',
        place: 'Universidad de Buenos Aires',
    },
]

export const SKILLS1 = [
    {
        title: 'HTML / CSS3',
        img: Html,
        value: 100,
    },
    {
        title: 'JAVASCRIPT',
        img: Js,
        value: 85,
    },
    {
        title: 'VUE.JS',
        img: Vue,
        value: 85,
    },
    {
        title: 'REACT.JS',
        img: ReactJs,
        value: 85,
    },
]

export const SKILLS2 = [
    {
        title: 'NODE.JS',
        img: Node,
        value: 75,
    },
    {
        title: 'MONGODB',
        img: Mongo,
        value: 75,
    },
    {
        title: 'GRAPHQL',
        img: Graphql,
        value: 60,
    },
]

export const SKILLS3 = [
    {
        title: 'GIT',
        img: Git,
        value: 85,
    },
    {
        title: 'FIGMA',
        img: Figma,
        value: 80,
    },
    {
        title: 'SKETCH',
        img: Sketch,
        value: 80,
    },
    {
        title: 'ZEPLIN',
        img: Zeplin,
        value: 85,
    },
]

export const FOOTER_ITEMS = [
    {
        text: 'Madrid - España',
        icon: 'location',
    },
    {
        text: '+34 677 75 30 43',
        icon: 'phone',
        tel: true,
    },
    {
        text: 'Ciudadano Italiano',
        icon: 'map',
    },
]

export const FOOTER_LINKS = [
    {
        text: 'Alejandro Manza',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/alejandro-manza/',
    },
    {
        text: 'Hablemos',
        icon: 'mail',
        url: 'mailto:alejandromanza@gmail.com',
    },
]
