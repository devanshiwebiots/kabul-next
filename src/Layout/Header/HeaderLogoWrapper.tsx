import SVG from '@/CommonComponents/SVG';
import { ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setToggleSidebar } from '@/Redux/Reducer/Layout/LayoutSlice';
import { Routes } from '@/Utils/Routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Col } from 'reactstrap';

const HeaderLogoWrapper = () => {
    const dispatch = useAppDispatch();
    const { toggleSidebar } = useAppSelector((state) => state.layout)

    return (
        <Col xs='auto' className="header-logo-wrapper p-0">
            <div className="logo-wrapper">
                <Link href={Routes.Dashboard.DefaultDashboard}>
                    <Image className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} priority alt="" width={100} height={34} />
                    <Image className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} priority alt="" width={100} height={34} />
                </Link>
            </div>
            <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))}>
                <SVG className="sidebar-toggle" iconId='fill-animation'  />
            </div>
        </Col>
    )
}
export default HeaderLogoWrapper;