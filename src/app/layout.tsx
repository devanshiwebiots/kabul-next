import SessionWrapper from "../CommonComponents/SessionWrapper";
import { getServerSession } from "next-auth";
import authoption from "./api/auth/[...nextauth]/authOption";
import "../../src/index.scss";
import { Poppins, Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import I18nProvider from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--poppins",
});

const roboto = Roboto({
    weight: ["300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--roboto",
});

const RootLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const lng = await detectLanguage();
    const session = await getServerSession(authoption);
    return (
        <I18nProvider language={lng}>
            <html lang='en'>
                <head>
                    <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
                    <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
                    <title>Kabul - Next Admin Template</title>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
                </head>
                <body suppressHydrationWarning={true} className={`${roboto.variable} ${poppins.variable} `}>
                    <SessionWrapper session={session}>
                        {children}
                        <Toaster />
                    </SessionWrapper>
                </body>
            </html>
        </I18nProvider>
    );
}

export default RootLayout;