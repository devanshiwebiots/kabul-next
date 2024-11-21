import { Routes } from "@/Utils/Routes";
import { FileText, Mail, Settings, User,Server } from "react-feather";

export const BookMarkData = [
    { icon: <FileText/>, title: "Forms", url: Routes.FormsControls.FormValidation },
    { icon: <User/>, title: "Profile", url: Routes.Users.UserProfile },
    { icon: <Server/>, title: "Tables", url: Routes.ReactstrapTable.BasicTable },
  ];

  export const NotificationsData = [
    { color: "primary", text: "Delivery processing", time: "10 min." },
    { color: "secondary", text: "Order Complete", time: "1 hr" },
    { color: "primary", text: "Tickets Generated", time: "3 hr" },
    { color: "info", text: "Delivery Complete", time: "6 hr" },
  ];

  export const MessageBoxData = [
    { image: "3", title: "Helen Walter", text: "Do you want to go see movie?" },
    { image: "6", title: "Jason Borne", text: "Thank you for rating us." },
    { image: "10", title: "Sarah Loren", text: "What`s project report update?" },
  ];
  
  export const ProfileHeaderData = [
    { id: 1, link: Routes.Users.UserProfile, icon: <User />, text: "Account" },
    { id: 2, link: Routes.LetterBox, icon: <Mail />, text: "Inbox" },
    { id: 3, link: Routes.Task, icon: <FileText />, text: "Taskboard" },
    { id: 4, link: Routes.Users.EditProfile, icon: <Settings />, text: "Settings" },
  ];

  export const LanguageData = [
    {
        languageParameter: "en",
        languageName: "English",
        languageIconClassName: "us",
        subTitle: "US"
    },
    {
        languageParameter: "du",
        languageName: "Deutsch",
        languageIconClassName: "de",
    },
    {
        languageParameter: "es",
        languageName: "Español",
        languageIconClassName: "es",
    },
    {
        languageParameter: "fr",
        languageName: "Français",
        languageIconClassName: "fr",
    },
    {
        languageParameter: "pt",
        languageName: "Português",
        languageIconClassName: "pt",
        subTitle: "BR"
    },
    {
        languageParameter: "cn",
        languageName: "简体中文",
        languageIconClassName: "cn",
    },
    {
        languageParameter: "ae",
        languageName: "لعربي",
        languageIconClassName: "ae",
        subTitle: "ae"
    },
];