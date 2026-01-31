import styles from './Navigation.module.css'

export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<div className={styles.navContainer}>
				<h1 className={styles.logo}>Ton - Azure Boutique Hotel</h1>

				<ul className={styles.navLinks}>
					<li>
						<a href='#about'>О нас</a>
					</li>
					<li>
						<a href='#rooms'>Номера</a>
					</li>
					<li>
						<a href='#contacts'>Контакты</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
