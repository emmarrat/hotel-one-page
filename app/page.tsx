import Image from 'next/image'
import AboutSection from './components/AboutSection/AboutSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import Navigation from './components/Navigation/Navigation'
import RoomsSection from './components/RoomsSection/RoomsSection'
import styles from './page.module.css'
import { SOCIAL_LINKS } from './shared/constants'
import { InstagramIcon, WhatsAppIcon } from './shared/icons'

export default function Home() {
	return (
		<div className={styles.page}>
			<Navigation />

			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<Image
						src='/images/logo.png'
						alt='Ton - Azure Boutique Hotel'
						width={250}
						height={250}
					/>
					<h2 className={styles.heroTitle}>Ton - Azure Boutique Hotel</h2>
					<p className={styles.heroSubtitle}>
						Уютный отель на берегу Иссык-Куля
					</p>
				</div>
			</section>

			<FeaturesSection />
			<AboutSection />
			<RoomsSection />

			<section id='contacts' className={styles.section}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Контакты</h2>
					<div className={styles.contactsContent}>
						<p className={styles.contactsDescription}>
							Следите за нами через наши социальные сети или свяжитесь с нами
							через WhatsApp.
						</p>
						<div className={styles.contactLinks}>
							<a
								href={SOCIAL_LINKS.INSTAGRAM}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.contactLink}
							>
								<InstagramIcon width={24} height={24} />
								Instagram
							</a>
							<a
								href={SOCIAL_LINKS.WHATSAPP}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.contactLink}
							>
								<WhatsAppIcon width={24} height={24} />
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</section>

			<footer className={styles.footer}>
				<div className={styles.container}>
					<p>&copy; 2026 Ton - Azure Boutique Hotel.</p>
				</div>
			</footer>
		</div>
	)
}
