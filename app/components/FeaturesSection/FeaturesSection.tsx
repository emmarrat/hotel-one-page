import { Mountain, Heart, Coffee, Wifi } from 'lucide-react'
import styles from './FeaturesSection.module.css'

export default function FeaturesSection() {
	return (
		<section className={styles.featuresSection}>
			<div className={styles.container}>
				<div className={styles.featuresGrid}>
					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>
							<Mountain size={32} />
						</div>
						<h3 className={styles.featureTitle}>Живописный вид</h3>
						<p className={styles.featureDescription}>
							Прямой вид на озеро Иссык-Куль и горные вершины
						</p>
					</div>
					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>
							<Heart size={32} />
						</div>
						<h3 className={styles.featureTitle}>Семейная атмосфера</h3>
						<p className={styles.featureDescription}>
							Уютный семейный отель с теплой домашней обстановкой
						</p>
					</div>
					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>
							<Coffee size={32} />
						</div>
						<h3 className={styles.featureTitle}>Завтраки включены</h3>
						<p className={styles.featureDescription}>
							Вкусные домашние завтраки из местных продуктов
						</p>
					</div>
					<div className={styles.featureCard}>
						<div className={styles.featureIcon}>
							<Wifi size={32} />
						</div>
						<h3 className={styles.featureTitle}>Все удобства</h3>
						<p className={styles.featureDescription}>
							Wi-Fi, парковка, терраса с видом на озеро
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
