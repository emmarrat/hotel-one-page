'use client';

import { useState } from 'react';
import { Room } from '../../types/room';
import { rooms } from '../../data/rooms';
import RoomCard from '../RoomCard/RoomCard';
import RoomModal from '../RoomModal/RoomModal';
import styles from './RoomsSection.module.css';

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <>
      <section id='rooms' className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Номера</h2>
          <div className={styles.roomsGrid}>
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onClick={() => handleRoomClick(room)}
              />
            ))}
          </div>
        </div>
      </section>
      <RoomModal
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
