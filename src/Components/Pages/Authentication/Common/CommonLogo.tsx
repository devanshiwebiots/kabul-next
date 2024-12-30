import { ImagePath } from '@/Constant'
import { Routes } from '@/Utils/Routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CommonLogo = () => {
  return (
    <div>
        <Link className="logo" href={Routes.Dashboard.DefaultDashboard}>
          <Image priority width={114} height={38} className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="loginpage" />
          <Image priority width={114} height={38} className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="loginpage" />
        </Link>
      </div>
  )
}

export default CommonLogo
