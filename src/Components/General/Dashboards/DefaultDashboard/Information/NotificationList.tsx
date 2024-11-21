import { ImagePath } from '@/Constant';
import { NotificationListProps } from '@/Types/Dashboard';
import { Routes } from '@/Utils/Routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NotificationList: React.FC<NotificationListProps> = ({ image, name, action, detail, time, active, status, buttons, last }) => {
  return (
    <div className={`d-flex align-items-center ${last ? "figma-line" : ""}`}>
      <Image src={`${ImagePath}/dashboard/user/${image}.png`} alt="" width={42} height={42} />
      <div className="flex-grow-1 ms-2">
        <Link href={Routes.Users.UserProfile}>
          <h5>
            {name} <strong>{action}</strong> {detail}
          </h5>
          <span>{time}</span>
        </Link>
        {buttons && (
          <>
            <button className="btn btn-secondary mt-1 mb-1">Decline</button>
            <button className="btn btn-primary mt-1 mb-1">Accept</button>
          </>
        )}
      </div>
      {active && (
        <div className="flex-shrink-0">
          <div className={`activity-dot-${status || 'primary'}`} />
        </div>
      )}
    </div>
  );
}

export default NotificationList
