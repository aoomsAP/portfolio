import { Project } from "../../types";

export const projects: Project[] = [
    {
        title_en: "Alki Guitars",
        title_nl: "Alki Guitars",
        date: new Date("2022-12-18"),
        images: [
            {
                original: "images/projects/alki-guitars/alki-guitars1.webp",
                originalAlt: "Alki Guitars: Overview",
                originalTitle: "Overview",
            },
            {
                original: "images/projects/alki-guitars/alki-guitars2.webp",
                originalAlt: "Alki Guitars: Leaflet map",
                originalTitle: "Leaflet map",
            },
            {
                original: "images/projects/alki-guitars/alki-guitars3.webp",
                originalAlt: "Alki Guitars: Shop grid",
                originalTitle: "Shop grid",
            },
            {
                original: "images/projects/alki-guitars/alki-guitars4.gif",
                originalAlt: "Alki Guitars: Shopping cart",
                originalTitle: "Shopping cart",
            },
            {
                original: "images/projects/alki-guitars/alki-guitars5.webp",
                originalAlt: "Alki Guitars: Table",
                originalTitle: "Table",
            },
            {
                original: "images/projects/alki-guitars/alki-guitars6.gif",
                originalAlt: "Alki Guitars: Comment section",
                originalTitle: "Comment section",
            },
        ],
        description_en: "A simple static website about guitars to showcase newfound HTML, CSS and Javascript skills. There is no real functionality, but in it includes a working comment section, a customized Leaflet map, and a rudimentary shopping cart.",
        description_nl: "Een simpele statische website over gitaren om onze nieuwe kennis over HTML, CSS en Javascript te etaleren. Er is geen echte functionaliteit, maar er is een werkende opmerkingen sectie, een custom Leaflet map, en een rudimentair winkelmandje.",
        challenges_en: ["semantic html","responsive design with grid & flex","basic javascript"],
        challenges_nl: ["semantische html","responsief design met grid & flex","basis javascript"],
        tags: ["school project", "html", "css", "javascript"],
    },
    {
        title_en: "Lord Of The Rings Quiz",
        title_nl: "Lord Of The Rings Quiz",
        date: new Date("2023-12-27"),
        images: [],
        video: "https://www.youtube.com/watch?v=XCWxrdw_WOM",
        description_en: <>A quiz centered around Lord Of The Rings quotes, using <a href="https://the-one-api.dev/">The One API</a> and Express.js as a framework. A user can register and login, and preferences (favorite quotes, blacklist, high score) are saved in a MongoDB database.</>,
        description_nl: <>Een quiz over Lord Of The Rings quotes, op basis van <a href="https://the-one-api.dev/">The One API</a> en Express.js als framework. Een speler can registreren en inloggen, en diens voorkeuren (favoriete quotes, blacklist, high score) worden bijgehouden in een MongoDB database.</>,
        challenges_en: ["trello, scrum & github reviews: working in a team","independent project design trial and error","sessions, cookies & hashing"],
        challenges_nl: ["trello, scrum & github reviews: samenwerken in team","onafhankelijk project design trial en error","sessies, cookies & hashing",],
        tags: ["school project", "html", "css", "scss", "typescript", "javascript", "express.js", "bootstrap", "mongodb"],
        github: "https://github.com/aoomsAP/the-one-quiz",
        demo: "https://the-one-quiz.onrender.com/"
    },
    {
        title_en: "Flip The Flag",
        title_nl: "Flip The Flag",
        date: new Date("2024-01-10"),
        images: [
            {
                original: "images/projects/flip-the-flag/flip1.webp",
                originalAlt: "Flip-The-Flag: light home",
                originalTitle: "Homepage (light)",
            },
            {
                original: "images/projects/flip-the-flag/flip2.webp",
                originalAlt: "Flip-The-Flag: dark home",
                originalTitle: "Homepage (dark)",
            },
            {
                original: "images/projects/flip-the-flag/flip3.gif",
                originalAlt: "Flip-The-Flag: flipping a flag",
                originalTitle: "Flipping a flag",
            },
            {
                original: "images/projects/flip-the-flag/flip4.webp",
                originalAlt: "Flip-The-Flag: countries table with filtering & sorting",
                originalTitle: "Countries table with filtering & sorting",
            },
            {
                original: "images/projects/flip-the-flag/flip5.webp",
                originalAlt: "Flip-The-Flag: detail page",
                originalTitle: "Detail page",
            },
        ],
        description_en: <>A simple React.js application to showcase the <a href="https://restcountries.com/">REST Countries API</a>. The website allows a visitor to guess the country and/or capital names of a flag, or to simply browse and discover more details about a country. There are several filters & sorting options, a light/dark theme and language choice settings.</>,
        description_nl: <>Een simpele React.js applicatie die gebruik maakt van de <a href="https://restcountries.com/">REST Countries API</a>. De website nodigt een bezoeker uit om de namen van landen en/of hoofdsteden  te raden bij elke vlag, of om gewoon te browsen en meer details over een land te ontdekken. Er zijn verschillende filters & sorteeropties, alsook instellingen voor donker/light thema en taalkeuze.</>,
        challenges_en: ["reusable components","communication between components for filtering & sorting","thoughtful handling of hooks"],
        challenges_nl: ["herbruikbare componenten","communicatie tussen componenten voor filteren en sorteren","weloverwogen gebruik van hooks"],
        tags: ["school project", "react", "react.js", "typescript", "css"],
        github: "https://github.com/aoomsAP/flip-the-flag",
        demo: "https://flip-the-flag.vercel.app/"
    },
    // {
    //     title_en: "Portfolio Website v1",
    //     title_nl: "Portfolio Website v1",
    //     date: new Date("2024-05-10"),
    //     images: [],
    //     description_en: <>First crack at a simple portfolio website in React.js.</>,
    //     description_nl: <>Eerste poging tot een simpele portfolio website in React.js.</>,
    //     challenges_en: ["adapting react hook form for contact functionality","projects likely better suited for CMS","design vs accessibility"],
    //     challenges_nl: ["react hook form aanpassen voor contact functionaliteit","projecten waarschijnlijk beter geschikt voor CMS","design vs accessibiliteit"],
    //     tags: ["personal project", "react", "react.js", "typescript", "css"],
    //     github: "https://github.com/aoomsAP/flip-the-flag",
    //     demo: "https://flip-the-flag.vercel.app/"
    // }
]