'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
	X,
	ChevronLeft,
	ChevronRight,
	MessageCircle,
	Calendar,
} from 'lucide-react'
import { Room } from '../../types/room'
import { SOCIAL_LINKS } from '../../shared/constants'
import styles from './RoomModal.module.css'

interface RoomModalProps {
	room: Room | null
	isOpen: boolean
	onClose: () => void
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	if (!isOpen || !room) return null

	const nextImage = () => {
		setCurrentImageIndex(prev => (prev + 1) % room.images.length)
	}

	const prevImage = () => {
		setCurrentImageIndex(
			prev => (prev - 1 + room.images.length) % room.images.length
		)
	}

	const goToImage = (index: number) => {
		setCurrentImageIndex(index)
	}

	const handleWhatsAppClick = () => {
		window.open(SOCIAL_LINKS.WHATSAPP, '_blank')
	}

	const handleBookingClick = () => {
		alert('Ссылка на бронирование будет добавлена позже')
	}

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={e => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={onClose}>
					<X size={24} />
				</button>

				<div className={styles.modalContent}>
					<div className={styles.gallerySection}>
						<div className={styles.mainImage}>
							<Image
								src={room.images[currentImageIndex]}
								alt={room.title}
								fill
								className={styles.image}
								priority
							/>
							{room.images.length > 1 && (
								<>
									<button
										className={styles.navButton}
										onClick={prevImage}
										style={{ left: '1rem' }}
									>
										<ChevronLeft size={24} />
									</button>
									<button
										className={styles.navButton}
										onClick={nextImage}
										style={{ right: '1rem' }}
									>
										<ChevronRight size={24} />
									</button>
								</>
							)}
						</div>
						{room.images.length > 1 && (
							<div className={styles.thumbnailGrid}>
								{room.images.map((image, index) => (
									<div
										key={index}
										className={`${styles.thumbnail} ${
											index === currentImageIndex ? styles.active : ''
										}`}
										onClick={() => goToImage(index)}
									>
										<Image
											src={image}
											alt={`${room.title} ${index + 1}`}
											fill
											className={styles.thumbnailImage}
										/>
									</div>
								))}
							</div>
						)}
						<div className={styles.actions}>
							<button
								className={styles.whatsappButton}
								onClick={handleWhatsAppClick}
							>
								<MessageCircle size={20} />
								Написать в WhatsApp
							</button>
							<button
								className={styles.bookingButton}
								onClick={handleBookingClick}
							>
								<Calendar size={20} />
								Забронировать
							</button>
						</div>
					</div>

					<div className={styles.infoSection}>
						<h2 className={styles.modalTitle}>{room.title}</h2>
						<p className={styles.modalDescription}>{room.description}</p>

						<div className={styles.capacity}>
							<span>
								Вместимость: до {room.capacity}{' '}
								{room.capacity === 1 ? 'гостя' : 'гостей'}
							</span>
						</div>

						<div className={styles.features}>
							<h3 className={styles.featuresTitle}>Удобства номера</h3>
							<ul className={styles.featuresList}>
								{room.features.map((feature, index) => (
									<li key={index}>{feature}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
