"use client";
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { headerResponsive } from '@/Redux/Reducer/Layout/LayoutSlice';
import React, { useEffect } from 'react'
import { Row } from 'reactstrap';
import HeaderLogoWrapper from './HeaderLogoWrapper';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const Header = () => {
    const { toggleSidebar } = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(headerResponsive());
    }, []);

    return (
        <div className={`page-header ${toggleSidebar ? "close_icon" : ""}`}>
            <Row className="header-wrapper m-0">
                <HeaderLogoWrapper />
                <LeftHeader />
                <RightHeader />
            </Row>
        </div>
    )
}
export default Header;