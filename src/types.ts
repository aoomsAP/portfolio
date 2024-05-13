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

export interface IProject {
    slug: string,
    title_en: string | JSX.Element,
    title_nl: string | JSX.Element,
    date: Date,
    update?: Date,
    featured_image_en: ReactImageGalleryItem,
    featured_image_nl: ReactImageGalleryItem,
    images_en?: ReactImageGalleryItem[],
    images_nl?: ReactImageGalleryItem[],
    video?: string,
    summary_en: string | JSX.Element,
    summary_nl: string | JSX.Element,
    description_en?: string | JSX.Element,
    description_nl?: string | JSX.Element,
    challenges_en?: string[],
    challenges_nl?: string[],
    todo_en?: string[],
    todo_nl?: string[],
    tags_en: string[],
    tags_nl: string[],
    github?: string,
    demo?: string,
    wip?: boolean,
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