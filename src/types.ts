// Language interface
// ----------------------------------------------------------------------------------

export interface Lexicon {
    [key: string]: string,
}

export interface Dictionary {
    [language: string]: Lexicon
}

// Component interfaces
// ----------------------------------------------------------------------------------

export interface IMenuItem {
    type: "item" | "link" | "navlink",
    text: string,
    url?: string,
}

export interface Project {
    title_en: string,
    title_nl: string,
    date: Date,
    imgBig: string,
    imgSmall: string,
    description_en: string | JSX.Element,
    description_nl: string | JSX.Element,
    tags: string[],
    github?: string,
    demo?: string,
    info?: string,
}