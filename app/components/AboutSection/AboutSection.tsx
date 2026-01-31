import Image from 'next/image'
import styles from './AboutSection.module.css'

const GALLERY_IMAGES = [
	{
		src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
		alt: 'Отель у озера',
	},
	{
		src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
		alt: 'Номер в отеле',
	},
	{
		src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
		alt: 'Вид на горы',
	},
	{
		src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
		alt: 'Территория отеля',
	},
	{
		src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop',
		alt: 'Пляж и озеро',
	},
	{
		src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
		alt: 'Бассейн',
	},
]

export default function AboutSection() {
	return (
		<section id='about' className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.sectionTitle}>О нас</h2>

				<div className={styles.aboutText}>
					<p className={styles.aboutDescription}>
						Добро пожаловать в Ton - Azure Boutique Hotel — уютный отель на
						берегу живописного озера Иссык-Куль. Мы предлагаем комфортабельное
						размещение круглый год в окружении великолепной природы.
					</p>
					<div className={styles.territoryBlock}>
						<h3 className={styles.territoryTitle}>Наша территория</h3>
						<ul className={styles.territoryList}>
							<li>Уютное кафе с видом на озеро</li>
							<li>Конференц-зал для деловых мероприятий</li>
							<li>Парковка для гостей</li>
							<li>WiFi во всех номерах</li>
							<li>Каждый номер оснащен санузлом</li>
							<li>Круглогодичная работа</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.galleryWrapper}>
				<div className={styles.galleryTrack}>
					{GALLERY_IMAGES.map((img, i) => (
						<div key={i} className={styles.gallerySlide}>
							<Image
								src={img.src}
								alt={img.alt}
								width={600}
								height={400}
								className={styles.galleryImage}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
