'use client'

import { Calendar } from 'lucide-react'
import styles from './BookingLink.module.css'

export default function BookingLink() {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		alert('Ссылка на бронирование будет добавлена позже')
	}

	return (
		<a href='#' className={styles.contactLink} onClick={handleClick}>
			<Calendar size={24} />
			Бронирование
		</a>
	)
}
