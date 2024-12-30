import { ImagePath, WeAreComingSoon } from "@/Constant"
import Image from "next/image"
import CountdownData from "../CountdownData"

const CommonCountdown = () => {
    return (
        <div className='comingsoon-inner text-center'>
            <Image priority width={114} height={38} className='img-fluid for-light' src={`${ImagePath}/logo/logo-1.png`} alt='coming soon' />
            <Image priority width={114} height={38} className='img-fluid for-dark' src={`${ImagePath}/logo/logo.png`} alt='coming soon' />
            <h5>{WeAreComingSoon}</h5>
            <div className='countdown' id='clockdiv'>
                <CountdownData />
            </div>
        </div>
    )
}

export default CommonCountdown
