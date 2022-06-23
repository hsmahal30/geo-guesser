import styles from "./navbar.styles.module.css"

export default function NavBar() {
    return (
        <header>
            <p className={styles.logo}> LOGO</p>
            <nav>
                <ul className={styles.navLinks}>
                    <li><a href='#'>Map</a></li>
                    <li><a href='#'>Flags</a></li>
                    <li><a href='#'>Location</a></li>
                    <li><a href='#'>Leaderboard</a></li>
                </ul>
            </nav>
        </header>
    )
}