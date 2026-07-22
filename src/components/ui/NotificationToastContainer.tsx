import React from 'react';
import { NotificationItem } from '../../types/office';

interface NotificationToastContainerProps {
  notifications: NotificationItem[];
  onDismiss: (id: string) => void;
  onSelectFloor: (floorId: number) => void;
}

export const NotificationToastContainer: React.FC<NotificationToastContainerProps> = () => {
  // Toast notifications are disabled completely. Events remain in memory/logs only.
  return null;
};
