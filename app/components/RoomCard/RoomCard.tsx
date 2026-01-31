'use client';

import { Room } from '../../types/room';
import styles from './RoomCard.module.css';

interface RoomCardProps {
  room: Room;
  onClick: () => void;
}

export default function RoomCard({ room, onClick }: RoomCardProps) {
  return (
    <div className={styles.roomCard} onClick={onClick}>
      <div className={styles.roomImagePlaceholder}>
        <span>{room.title}</span>
      </div>
      <div className={styles.roomInfo}>
        <h3 className={styles.roomTitle}>{room.title}</h3>
        <p className={styles.roomDescription}>{room.shortDescription}</p>
        <div className={styles.roomCapacity}>
          <span>До {room.capacity} {room.capacity === 1 ? 'гостя' : 'гостей'}</span>
        </div>
      </div>
    </div>
  );
}
