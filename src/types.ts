// Language interface
// ----------------------------------------------------------------------------------

import { ReactImageGalleryItem } from "react-image-gallery";

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
    images: ReactImageGalleryItem[],
    description_en: string | JSX.Element,
    description_nl: string | JSX.Element,
    challenges_en: string[],
    challenges_nl: string[],
    tags: string[],
    github?: string,
    demo?: string,
    info?: string,
}

export interface CustomFormData {
    access_key: string,
    botcheck: boolean,
    email: string,
    from_name: string,
    message: string,
    name: string,
    subject: string,
}

export interface PostResult {
    data: CustomFormData,
    message: string,
    success: boolean,
}

export interface ISkill {
    name: string,
    icon: string,
    emphasis?: boolean,
}