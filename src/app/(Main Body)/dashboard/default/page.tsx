'use client'
import React, { FunctionComponent, useEffect, useState } from 'react'

const DefaultDashboard = () => {
    const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
    useEffect(() => {
        (async () => {
            if (typeof window !== "undefined") {
                const newClient = (await import("@/Components/General/Dashboards/DefaultDashboard")).default;
                setClient(() => newClient);
            }
        })();
    }, []);
    return MyAwesomeMap ? <MyAwesomeMap /> : "";
}
export default DefaultDashboard;