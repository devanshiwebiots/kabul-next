import { DailyOrders, DailyRevenue, OrdersValue, TotalSells } from "@/Constant";
import { DailyOrdersChart, DailyRevenueChart, OrdersValueChart, TotalSellsChart } from "./Charts";

export const SalesData = [
    {
        class: "",
        title: TotalSells,
        icon: "coin",
        value: "12,463",
        percentage: "+ 20.08",
        color:"success",
        month: "Jan",
        chartOptions: TotalSellsChart,
    },
    {
        class: "-2",
        title: OrdersValue,
        icon: "shopping",
        value: "78,596",
        percentage: "- 10.02",
        color:"danger",
        month: "Aug",
        chartOptions: OrdersValueChart,
    },
    {
        class: "-3",
        title: DailyOrders,
        icon: "sent",
        value: "95,789",
        percentage: "+ 13.23",
        color:"success",
        month: "May",
        chartOptions: DailyOrdersChart,
    },
    {
        class: "-4",
        title: DailyRevenue,
        icon: "revenue",
        value: "41,954",
        percentage: "- 17.06",
        color:"danger",
        month: "July",
        chartOptions: DailyRevenueChart,
    },
];

export const TotalOrderData = [
    {
        image: "watch",
        name: "Mi Watch Revolve",
        date: "20 April 2024",
        orderId: "748669",
        customerId: "4657",
        price: "35.00",
        statusClass: "primary",
    },
    {
        image: "flower",
        name: "Stylish Plant Pot",
        date: "10 June 2024",
        orderId: "744U8F",
        customerId: "7637",
        price: "25.00",
        statusClass: "secondary",
    },
    {
        image: "bench",
        name: "Dark Oak Chair",
        date: "13 May 2024",
        orderId: "329478",
        customerId: "3927",
        price: "10.00",
        statusClass: "primary",
    },
    {
        image: "shoes",
        name: "0 Sneakers For Men",
        date: "12 April 2023",
        orderId: "742445",
        customerId: "6146",
        price: "50.00",
        statusClass: "secondary",
    },
];

export const TotalAppointmentData = [
    {
        name: "James Prather",
        statusTime: "1 Hour",
        statusClass: "online",
        date: "16 August",
        btnColor:"primary",
        buttonText: "Pending",
    },
    {
        name: "Robert Johnson",
        statusTime: "Now",
        statusClass: "busy",
        date: "21 September",
        btnColor:"secondary",
        buttonText: "Done",
        icon: "fa fa-check-circle",
    },
    {
        name: "Brian McKamey",
        statusTime: "2 Day After",
        statusClass: "offline",
        date: "06 March",
        btnColor:"success",
        buttonText: "Pending",
    },
    {
        name: "Graham Wolfe",
        statusTime: "Day End",
        statusClass: "online",
        date: "12 February",
        btnColor:"info",
        buttonText: "Pending",
    },
    {
        name: "Walter Kendall",
        statusTime: "2 Day After",
        statusClass: "offline",
        date: "06 March",
        btnColor:"danger",
        buttonText: "Pending",
    },
];

export const RatingData = [
    { score: "4.6", percentage: "95" },
    { score: " 6.2", percentage: "61" },
    { score: "5.0", percentage: "34" },
    { score: "1.3", percentage: "91" },
];

export const AuditLogData = [
    {
        statusClass: 'primary',
        iconClass: 'check',
        taskTitle: 'RP204_salesfores generated',
        assignee: 'Andre Sluczka',
        time: '2hr ago',
    },
    {
        statusClass: 'secondary',
        iconClass: 'exclamation',
        taskTitle: 'R304_salesforece undeployed',
        assignee: 'Andre Sluczka',
        time: '4hr ago',
    },
    {
        statusClass: 'danger',
        iconClass: 'times',
        taskTitle: 'R304_salesforece loast...',
        assignee: 'Andre Sluczka',
        time: '10 Jun',
    },
    {
        statusClass: 'primary',
        iconClass: 'check',
        taskTitle: 'Dev created a new environment.',
        assignee: 'Andre Sluczka',
        time: '22 Oct',
    },
    {
        statusClass: 'primary',
        iconClass: 'check',
        taskTitle: 'Project salesforce built.',
        assignee: 'Andre Sluczka',
        time: '25 Oct',
        className: 'd-xxl-block d-xl-none d-lg-block',
    },
];
