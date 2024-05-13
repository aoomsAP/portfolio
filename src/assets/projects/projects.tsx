import { IProject } from "../../types";

export const projects: IProject[] = [

    // -----------------------------------------------------------------------------------------

    {
        slug: "alki-guitars",
        title_en: "Alki Guitars",
        title_nl: "Alki Guitars",
        date: new Date("2022-12-18"),
        featured_image_en: {
            original: "images/projects/alki-guitars/alki-guitars1.webp",
            originalAlt: "Alki Guitars",
            originalTitle: "Alki Guitars",
        },
        featured_image_nl: {
            original: "images/projects/alki-guitars/alki-guitars1.webp",
            originalAlt: "Alki Guitars",
            originalTitle: "Alki Guitars",
        },
        images_en: [
            {
                original: "../images/projects/alki-guitars/alki-guitars1.webp",
                originalAlt: "Alki Guitars: Overview",
                originalTitle: "Overview",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars2.webp",
                originalAlt: "Alki Guitars: Leaflet map",
                originalTitle: "Leaflet map",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars3.webp",
                originalAlt: "Alki Guitars: Shop grid",
                originalTitle: "Shop grid",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars4.gif",
                originalAlt: "Alki Guitars: Shopping cart",
                originalTitle: "Shopping cart",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars5.webp",
                originalAlt: "Alki Guitars: Table",
                originalTitle: "Table",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars6.gif",
                originalAlt: "Alki Guitars: Comment section",
                originalTitle: "Comment section",
            },
        ],
        images_nl: [
            {
                original: "../images/projects/alki-guitars/alki-guitars1.webp",
                originalAlt: "Alki Guitars: Overzicht",
                originalTitle: "Overzicht",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars2.webp",
                originalAlt: "Alki Guitars: Leaflet kaart",
                originalTitle: "Leaflet kaart",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars3.webp",
                originalAlt: "Alki Guitars: Winkel items",
                originalTitle: "Winkel items",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars4.gif",
                originalAlt: "Alki Guitars: Winkelkarretje",
                originalTitle: "Winkelkarretje",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars5.webp",
                originalAlt: "Alki Guitars: Tabel",
                originalTitle: "Tabel",
            },
            {
                original: "../images/projects/alki-guitars/alki-guitars6.gif",
                originalAlt: "Alki Guitars: Opmerkingen",
                originalTitle: "Opmerkingen",
            },
        ],
        summary_en: "A simple static website about guitars to showcase newfound HTML, CSS and Javascript skills.",
        summary_nl: "Een simpele statische website over gitaren om onze nieuwe kennis over HTML, CSS en Javascript te etaleren.",
        description_en: "A simple static website about guitars to showcase newfound HTML, CSS and Javascript skills. There is no real functionality, but in it includes a working comment section, a customized Leaflet map, and a rudimentary shopping cart.",
        description_nl: "Een simpele statische website over gitaren om onze nieuwe kennis over HTML, CSS en Javascript te etaleren. Er is geen echte functionaliteit, maar er is een werkende opmerkingen sectie, een custom Leaflet map, en een rudimentair winkelmandje.",
        challenges_en: ["semantic html", "responsive design with grid & flex", "basic javascript"],
        challenges_nl: ["semantische html", "responsief design met grid & flex", "basis javascript"],
        tags_en: ["school project", "html", "css", "javascript"],
        tags_nl: ["school project", "html", "css", "javascript"]
    },

    // -----------------------------------------------------------------------------------------

    {
        slug: "lotr-quiz",
        title_en: "Lord Of The Rings Quiz",
        title_nl: "Lord Of The Rings Quiz",
        date: new Date("2023-12-27"),
        featured_image_en: {
            original: "images/projects/the-one-quiz/the-one-quiz.png",
            originalAlt: "The One Quiz",
            originalTitle: "The One Quiz",
        },
        featured_image_nl: {
            original: "images/projects/the-one-quiz/the-one-quiz.png",
            originalAlt: "The One Quiz",
            originalTitle: "The One Quiz",
        },
        video: "https://www.youtube.com/embed/XCWxrdw_WOM?si=egVEprysVHBSDXOY",
        summary_en: <>A quiz centered around Lord Of The Rings quotes, using <a href="https://the-one-api.dev/">The One API</a> and Express.js as a framework.</>,
        summary_nl: <>Een quiz over Lord Of The Rings quotes, op basis van <a href="https://the-one-api.dev/">The One API</a> en Express.js als framework.</>,
        description_en: <>A quiz centered around Lord Of The Rings quotes, using <a href="https://the-one-api.dev/">The One API</a> and Express.js as a framework. A user can register and login, and preferences (favorite quotes, blacklist, high score) are saved in a MongoDB database.</>,
        description_nl: <>Een quiz over Lord Of The Rings quotes, op basis van <a href="https://the-one-api.dev/">The One API</a> en Express.js als framework. Een speler can registreren en inloggen, en diens voorkeuren (favoriete quotes, blacklist, high score) worden bijgehouden in een MongoDB database.</>,
        challenges_en: ["trello, scrum & github reviews: working in a team", "independent project design trial and error", "sessions, cookies & hashing"],
        challenges_nl: ["trello, scrum & github reviews: samenwerken in team", "onafhankelijk project design trial en error", "sessies, cookies & hashing",],
        tags_en: ["school project", "html", "css", "scss", "typescript", "javascript", "express.js", "bootstrap", "mongodb"],
        tags_nl: ["school project", "html", "css", "scss", "typescript", "javascript", "express.js", "bootstrap", "mongodb"],
        github: "https://github.com/aoomsAP/the-one-quiz",
        demo: "https://the-one-quiz.onrender.com/"
    },

    // -----------------------------------------------------------------------------------------

    {
        slug: "flip-the-flag",
        title_en: "Flip The Flag",
        title_nl: "Flip The Flag",
        date: new Date("2024-01-10"),
        featured_image_en: {
            original: "images/projects/flip-the-flag/flip1.webp",
            originalAlt: "Flip-The-Flag",
            originalTitle: "Flip-The-Flag",
        },
        featured_image_nl: {
            original: "images/projects/flip-the-flag/flip1.webp",
            originalAlt: "Flip-The-Flag",
            originalTitle: "Flip-The-Flag",
        },
        images_en: [
            {
                original: "../images/projects/flip-the-flag/flip1.webp",
                originalAlt: "Flip-The-Flag: light home",
                originalTitle: "Homepage (light)",
            },
            {
                original: "../images/projects/flip-the-flag/flip2.webp",
                originalAlt: "Flip-The-Flag: dark home",
                originalTitle: "Homepage (dark)",
            },
            {
                original: "../images/projects/flip-the-flag/flip3.gif",
                originalAlt: "Flip-The-Flag: flipping a flag",
                originalTitle: "Flipping a flag",
            },
            {
                original: "../images/projects/flip-the-flag/flip4.webp",
                originalAlt: "Flip-The-Flag: countries table with filtering & sorting",
                originalTitle: "Countries table with filtering & sorting",
            },
            {
                original: "../images/projects/flip-the-flag/flip5.webp",
                originalAlt: "Flip-The-Flag: detail page",
                originalTitle: "Detail page",
            },
        ],
        images_nl: [
            {
                original: "../images/projects/flip-the-flag/flip1.webp",
                originalAlt: "Flip-The-Flag: licht home",
                originalTitle: "Home pagina (licht)",
            },
            {
                original: "../images/projects/flip-the-flag/flip2.webp",
                originalAlt: "Flip-The-Flag: donker home",
                originalTitle: "Home pagina (donker)",
            },
            {
                original: "../images/projects/flip-the-flag/flip3.gif",
                originalAlt: "Flip-The-Flag: een vlag omdraaien",
                originalTitle: "Een vlag omdraaien",
            },
            {
                original: "../images/projects/flip-the-flag/flip4.webp",
                originalAlt: "Flip-The-Flag: landen tabel met filter & sorteeropties",
                originalTitle: "Landen tabel met filter & sorteeropties",
            },
            {
                original: "../images/projects/flip-the-flag/flip5.webp",
                originalAlt: "Flip-The-Flag: detail pagina",
                originalTitle: "Detail pagina",
            },
        ],
        summary_en: <>A simple React.js application to showcase the <a href="https://restcountries.com/">REST Countries API</a>.</>,
        summary_nl: <>Een simpele React.js applicatie die gebruik maakt van de <a href="https://restcountries.com/">REST Countries API</a>.</>,
        description_en: <>A simple React.js application to showcase the <a href="https://restcountries.com/">REST Countries API</a>. The website allows a visitor to guess the country and/or capital names of a flag, or to simply browse and discover more details about a country. There are several filters & sorting options, a light/dark theme and language choice settings.</>,
        description_nl: <>Een simpele React.js applicatie die gebruik maakt van de <a href="https://restcountries.com/">REST Countries API</a>. De website nodigt een bezoeker uit om de namen van landen en/of hoofdsteden  te raden bij elke vlag, of om gewoon te browsen en meer details over een land te ontdekken. Er zijn verschillende filters & sorteeropties, alsook instellingen voor donker/light thema en taalkeuze.</>,
        challenges_en: ["reusable components", "communication between components for filtering & sorting", "thoughtful handling of hooks"],
        challenges_nl: ["herbruikbare componenten", "communicatie tussen componenten voor filteren en sorteren", "weloverwogen gebruik van hooks"],
        tags_en: ["school project", "react", "react.js", "typescript", "css"],
        tags_nl: ["school project", "react", "react.js", "typescript", "css"],
        github: "https://github.com/aoomsAP/flip-the-flag",
        demo: "https://flip-the-flag.vercel.app/"
    },

    // -----------------------------------------------------------------------------------------

    {
        slug: "vlaamse-programmeerwedstrijd",
        title_en: "Flemish Programming Contest 2024",
        title_nl: <>Vlaamse Programmeer&shy;wedstrijd 2024</>,
        date: new Date("2024-03-06"),
        featured_image_en: {
            original: "images/projects/vpw/vpw.JPG",
            originalAlt: "Vlaamse Programmeerwedstrijd 2024",
            originalTitle: "Vlaamse Programmeerwedstrijd 2024",
        },
        featured_image_nl: {
            original: "images/projects/vpw/vpw.JPG",
            originalAlt: "Flemish Programming Contest 2024",
            originalTitle: "Flemish Programming Contest 2024",
        },
        summary_en: <>With two fellow students, I participated in the Flemish Programming Contest edition of 2024.</>,
        summary_nl: <>Met twee medestudenten nam ik deel aan de 2024 editie van de Vlaamse Programmeerwedstrijd.</>,
        description_en: <>With two fellow students, I participated in the Flemish Programming Contest edition of 2024. Our team came in 10th, but we were first amongst the graduate students in our category. Preparing for the competition was half the fun, so we solved questions from previous editions both individually and as a team, which can be browsed in the Github link below.</>,
        description_nl: <>Met twee medestudenten nam ik deel aan de 2024 editie van de Vlaamse Programmeerwedstrijd. Ons team behaalde de 10de plaats, maar we waren de eerste graduaatstudenten in onze categorie. Oefenenen voor de wedstrijd was even leuk als deelnemen, dus hebben we zowel individueel als in team enkele opgaves van vorige edities uitgewerkt, die geraadpleegd kunnen worden in de Github link hieronder.</>,
        challenges_en: ["time sensitive programming", "more mathematical and algorithmic problems", "processing and brainstorming problems in a team","small advantages and disadvantages of different programming languages for problem-solving"],
        challenges_nl: ["programmeren onder tijdsdruk", "meer wiskundige en algoritmische problemen", "probemen verwerken en brainstormen in een team","kleine voordelen en nadelen van verschillende programmeertalen in probleemoplossing"],
        tags_en: ["personal project", "vpw", "competition", "javascript", "c#"],
        tags_nl: ["persoonlijk project", "vpw", "competition", "javascript", "c#"],
        github: "https://github.com/aoomsAP/vlaamseprogrammeerwedstrijd",
    },

    // -----------------------------------------------------------------------------------------

    {
        slug: "portfolio",
        title_en: "Portfolio v1",
        title_nl: "Portfolio v1",
        date: new Date("2024-04-10"),
        featured_image_en: {
            original: "images/projects/portfolio/portfolio.png",
            originalAlt: "Portfolio Website",
            originalTitle: "Portfolio Website",
        },
        featured_image_nl: {
            original: "images/projects/portfolio/portfolio.png",
            originalAlt: "Portfolio Website",
            originalTitle: "Portfolio Website",
        },
        summary_en: <>First crack at a simple portfolio website in React.js.</>,
        summary_nl: <>Eerste poging tot een simpele portfolio website in React.js.</>,
        description_en: <>First crack at a simple portfolio website in React.js. Halfway through I decided to implement a CMS-type blog or portfolio, which was flying too close to the sun, particulary when making the website manually bilingual. For now the choice of technology & design is therefore ineffecient.</>,
        description_nl: <>Eerste poging tot een simpele portfolio website in React.js. Halverwege besliste ik om een soort CMS-blog of portfolio te implementeren, wat achteraf te hoog gegrepen bleek, in het bijzonder omdat ik de website manueel tweetalig heb gemaakt. Voorlopig is de keuze van technologie en design dus behoorlijk inefficiënt.</>,
        todo_en: ["filtering projects by tag", "improving accessibility: high contrast theme", "refactor to proper CMS project"],
        todo_nl: ["projecten filteren per tag", "accessibiliteit verbetern: Hoog contrast thema", "herwerken naar volwaardig CMS project"],
        tags_en: ["personal project", "react", "react.js", "typescript", "css"],
        tags_nl: ["persoonlijk project", "react", "react.js", "typescript", "css"],
        github: "https://github.com/aoomsAP/portfolio",
        wip: true,
    },

    // -----------------------------------------------------------------------------------------

    {
        slug: "judoclub",
        title_en: "Judo Club",
        title_nl: "Judoclub",
        date: new Date("2024-05-13"),
        featured_image_en: {
            original: "images/projects/judoclub/judoclub.png",
            originalAlt: "Judo Club Website",
            originalTitle: "Judo Club Website",
        },
        featured_image_nl: {
            original: "images/projects/judoclub/judoclub.png",
            originalAlt: "Judoclub Website",
            originalTitle: "Judoclub Website",
        },
        summary_en: <>Website for a judo club in Wordpress, with membership management, amongst other things.</>,
        summary_nl: <>Website voor een judo club in Wordpress, met ondere andere leden management </>,
        challenges_en: ["block editor in Wordpress", "Hosting server setup", "researching & configuring plugins", "basics of custom Wordpress functions in PHP"],
        challenges_nl: ["blok editor in Wordpress", "Hosting server setup", "research & configuratie van plugins", "basis van custom Wordpress functies in PHP"],
        tags_en: ["school project", "cms", "wordpress", "php"],
        tags_nl: ["school project", "cms", "wordpress", "php"],
        wip: true,
    },

    // -----------------------------------------------------------------------------------------

    {
        slug: "orchestra-api",
        title_en: "Orchestra API",
        title_nl: "Orchestra API",
        date: new Date("2024-05-13"),
        featured_image_en: {
            original: "images/projects/orchestra-api/orchestra.jpg",
            originalAlt: "Orchestra API",
            originalTitle: "Orchestra API",
        },
        featured_image_nl: {
            original: "images/projects/orchestra-api/orchestra.jpg",
            originalAlt: "Orkesten API",
            originalTitle: "Orkesten API",
        },
        summary_en: <>An API centered around Countries, Orchestras and Musicians, with ASP.NET Core both as MVC and as a Minimal API, and a local MySQL database.</>,
        summary_nl: <>Een API over Landen, Orkesten en Muzikanten, met ASP.NET Core zowel als MVC als Minimal API, en een lokale MySQL database.</>,
        challenges_en: ["writing & configuring an API", "understanding & using ASP.NET Core as a framework", "MVC: developing a sense of mindful software design", "improved understanding of how to structure data"],
        challenges_nl: ["een API schrijven en configuren", "ASP.NET Core begrijpen en gebruiken als framework", "MVC: ontwikkelen van bewust software design", "verbeterd inzicht in het structureren van data"],
        tags_en: ["school project", "asp.net", "c#", "mysql"],
        tags_nl: ["school project", "asp.net", "c#", "mysql"],
        github: "https://github.com/aoomsAP/orchestra-api",
        wip: true,
    }
]