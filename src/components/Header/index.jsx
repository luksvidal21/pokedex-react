import './Header.css'
import logo from "../../assets/pokedex-logo.png"

export default function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" />
            </header>
        </>
    )
}