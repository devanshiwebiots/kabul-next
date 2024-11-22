import { ImagePath } from '@/Constant';
import { NotificationListProps } from '@/Types/Dashboard';
import { Routes } from '@/Utils/Routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from 'reactstrap';

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
            <Button className="mt-1 mb-1">Decline</Button>
            <Button className="mt-1 mb-1" color="primary">Accept</Button>
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
