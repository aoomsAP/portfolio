import { Project } from "../../types";

export const projects: Project[] = [
    {
        title_en: "Alki Guitars",
        title_nl: "Alki Guitars",
        date: new Date("2022-12-18"),
        images: [],
        description_en: "For the class Web Technology, we had to write a simple static website centered around a hobby to showcase our newfound HTML, CSS and Javascript skills. The website required no back-end implementation, but it includes a working comment section, a customized Leaflet map, and rudimentary shopping cart.",
        description_nl: "Voor het vak Webtechnologie moesten we een simpele statische website schrijven over een hobby, om onze pasgeleerde kennis over HTML, CSS en Javascript te etaleren. Back-end implementatie was niet vereist, maar de front-end bevat onder andere een werkende comment sectie, een custom Leaflet map, en een rudimentair winkemandje.",
        challenges_en: ["semantic html","grid & flex in css","basic javascript"],
        challenges_nl: ["semantische html","grid & flex in css","basis javascript"],
        tags: ["school project", "html", "css", "javascript"],
    },
    {
        title_en: "Lord Of The Rings Quiz",
        title_nl: "Lord Of The Rings Quiz",
        date: new Date("2023-12-27"),
        images: [],
        description_en: <>As a group project, we got the assignment to create a dynamic web application using a public API and Express.js as a framework. Using <a href="https://the-one-api.dev/">The One API</a>, we made a quiz around Lord Of The Rings quotes. User registration and login is managed with sessions and cookies, users can add and remove their favorite or blacklisted quotes, and their high scores are also saved in a MongoDB database.</>,
        description_nl: <>Als groepsproject kregen we de taak om een dynamische web applicatie te creëeren met een publieke API en Express.js als framework. Met <a href="https://the-one-api.dev/">The One API</a> maakten we een quiz over Lord Of The Rings quotes. Registratie en login van gebruikers wordt geregeld met sessies en cookies, gebruikers kunnen hun favoriete of geblackliste quotes toevoegen of verwijderen, en high scores worden ook bijgehouden in een MongoDB database.</>,
        challenges_en: ["sessions and cookies","scrum: working in a team"],
        challenges_nl: ["sessies en cookies","scrum: samenwerken in team"],
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
                original: "images/projects/flip-the-flag/flip1.png",
                originalAlt: "Flip-The-Flag homepage",
                originalTitle: "Homepage",
            },
            {
                original: "images/projects/flip-the-flag/flip2.png",
                originalAlt: "Flip-The-Flag overview page",
                originalTitle: "Overview",
            },
            {
                original: "images/projects/flip-the-flag/flip3.png",
                originalAlt: "Flip-The-Flag detail page",
                originalTitle: "Detail",
            },
        ],
        description_en: <>For the class Webframeworks, we had to create a simple React.js application using a public API. I used the <a href="https://restcountries.com/">REST Countries API</a> for a website that allows a visitor to guess the country and/or capital names of a flag, or simply browse and discover more details about a country. The website includes several filters & sorting options, and offers light/dark theme and language choice settings.</>,
        description_nl: <>Voor het vak Webframeworks kregen we de opdracht om een simpele React.js applicatie te creëren die gebruik maakt van een public API. Met de <a href="https://restcountries.com/">REST Countries API</a> maakte ik een website die een gebruiker uitnodigt om de namen van landen en/of hoofdsteden  te raden bij elke vlag, of gewoon te browsen en meer details over een land te ontdekken. De website bevat verschillende filters & sorteeropties, alsook instellingen voor donker/light thema en taalkeuze.</>,
        challenges_en: ["reusable components","property drilling"],
        challenges_nl: ["herbruikbare componenten","property drilling"],
        tags: ["school project", "react", "react.js", "typescript", "tsx", "css"],
        github: "https://github.com/aoomsAP/flip-the-flag",
        demo: "https://flip-the-flag.vercel.app/"
    },
    {
        title_en: "Portfolio Website",
        title_nl: "Portfolio Website",
        date: new Date("2024-05-10"),
        images: [],
        description_en: <>First crack at a simple portfolio website in React.js.  </>,
        description_nl: <>Eerste poging tot een simpele portfolio website in React.js.</>,
        challenges_en: ["adapting react hook form","projects section likely better suited for CMS","attention to accessibility"],
        challenges_nl: ["react hook form aanpassen","projecten pagina waarschijnlijk beter geschikt voor CMS","aandacht voor accessibiliteit"],
        tags: ["personal project", "react", "react.js", "typescript", "tsx", "css"],
        github: "https://github.com/aoomsAP/flip-the-flag",
        demo: "https://flip-the-flag.vercel.app/"
    }
]