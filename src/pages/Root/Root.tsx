import { Outlet } from "react-router-dom"
import { useContext } from "react";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import "./Root.css"

// components
import Menu from "../../components/Menu/Menu/Menu";
import Nav from "../../components/Nav/Nav";
import SiteSettings from "../../components/SiteSettings/SiteSettings/SiteSettings";
import { IMenuItem } from "../../types";
import Initials from "../../components/Initials/Initials";

const Root = () => {
    const { lexicon } = useContext(SiteSettingsContext);

    const navItems: IMenuItem[] = [
        { type: "navlink", text: "Home", url: "/" },
        { type: "navlink", text: lexicon.projects, url: "/projects" },
        { type: "navlink", text: "Contact", url: "/contact" },
    ]

    const footerItems: IMenuItem[] = [
        { type: "item", text: `© Alki Ooms` },
        { type: "link", text: "Github", url: "https://github.com/aoomsAP" },
    ]

    return (
        <>
            <header>
                <div>
                    <Initials size="4rem" />
                    <Nav navItems={navItems} />
                    <SiteSettings />
                </div>
            </header>

            <Outlet />

            <footer>
                <Menu items={footerItems} />
            </footer>
        </>
    )
}

export default Root;