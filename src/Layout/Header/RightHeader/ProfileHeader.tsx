"use client";
import { Href, ImagePath, LogOutText, Admin } from "@/Constant";
import { ProfileHeaderData } from "@/Data/Layout/Header";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";

const HeaderProfile = () => {
  const { data: session } = useSession();
  const handleLogout = () => {
    signOut();
  };

  return (
    <li className='profile-nav onhover-dropdown p-0 m-0'>
      <div className='d-flex align-items-center profile-media'>
        <Image className='b-r-10 img-40' width={40} height={40} src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt='' />
        <div className='flex-grow-1'>
          <span>{session?.user?.email}</span>
          <p className='mb-0'>{session?.user?.name || Admin}<i className="middle fa fa-angle-down"/></p>
        </div>
      </div>
      <ul className='profile-dropdown onhover-show-div'>
        {ProfileHeaderData?.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>
              {item.icon}
              <span>{item.text} </span>
            </Link>
          </li>
        ))}
        <li onClick={handleLogout}>
          <Link href={Href}>
            <LogOut />
            <span>{LogOutText}</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};
export default HeaderProfile;
