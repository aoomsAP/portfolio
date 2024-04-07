import { Outlet } from "react-router-dom"
import { useContext, useState } from "react";
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

    const [showNav, setShowNav] = useState<boolean>(false);

    return (
        <>
            <header>
                <div className="nav-desktop">
                    <Initials size="4rem" />
                    <Nav navItems={navItems} />
                    <SiteSettings />
                </div>
                <div className="nav-mobile">
                    <div className="nav-mobile_header">
                    <Initials size="4rem" />
                    <button className="nav-icon" onClick={() => setShowNav(showNav ? false : true)}>
                        <i className="bi bi-list" style={{ display: (showNav ? "none" : "block") }}></i>
                        <i className="bi bi-x-lg" style={{ display: (showNav ? "block" : "none") }}></i>
                    </button>
                    </div>
                    <div className="nav-mobile_menu"style={{ display: (showNav ? "block" : "none") }}>
                        <Nav navItems={navItems} mobile={true} />
                        <hr />
                        <SiteSettings mobile={true} />
                    </div>
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