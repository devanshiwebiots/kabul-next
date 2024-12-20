import { CryptoAnnotations, CryptocurrencyPrices, Finance, LiveProducts, MonthlySales, OrderStatus, StockMarket, TurnOver, Uses } from "@/Constant";
import { CryptoAnnotationsChart, CryptocurrencyPricesChart, FinanceChart, LiveProductsChart, MonthlySalesChart, OrderStatusChart, StockMarketChart, TotalEarningChart, TotalExpenseChart, TotalProductChart, TotalProjectChart, TotalSalesChart, TurnOverChart, UsesChart } from "./Charts";

export const MarketingData = [
    {
        title: 'Web & mobile app',
        subtitle: 'Dribble Presentation',
        date: 'June 18, 2024',
        messageCount: 18,
        linkCount: 8,
        progress: 70,
        color: "primary",
        iconId: 'improvement',
        users: ['1', '2', '3'],
    },
    {
        title: 'NFT website design',
        subtitle: 'Pinterest Promotion',
        date: 'June 15, 2024',
        messageCount: 20,
        linkCount: 10,
        color: "success",
        progress: 60,
        iconId: 'NFT',
        users: ['8', '4', '7'],
        class: 'nft-card',
    },
    {
        title: 'Project dashboard',
        subtitle: 'Twitter Marketing',
        date: 'June 25, 2024',
        messageCount: 30,
        linkCount: 12,
        color: "danger",
        progress: 50,
        iconId: 'management',
        users: ['9', '5', '6'],
        class: 'twitter-card',
    },
];

export const CategoriesSalesData = [
    { label: 'Income', value: 21654, color: 'primary' },
    { label: 'Visitors', value: 62842, color: 'secondary' },
    { label: 'Expense', value: 37210, color: 'danger' },
];

export const BudgetData = [
    {
        title: 'Design',
        amount: '35,842.00',
        color: 'primary',
        icon: 'design',
    },
    {
        title: 'Development',
        amount: '5,647.00',
        color: 'secondary',
        icon: 'development',
    },
    {
        title: 'Others',
        amount: '3,237.00',
        color: 'success',
        icon: 'other',
    },
];

export const OrderOverviewData = [
    { value: 40, label: 'Online Order', progress: 50, color: 'primary' },
    { value: 60, label: 'Offline Order', progress: 70, color: 'secondary' },
    { value: 20, label: 'Cash On Delivery', progress: 30, color: 'success' },
];

export const TotalIncomeData = [
    {
        title: 'Total Earning',
        value: '20.790',
        change: '16.06',
        chartOptions: TotalEarningChart,
        chartType: 'bar' as 'bar',
        chartHeight: 95,
    },
    {
        title: 'Total Expense',
        value: '4,683.90',
        change: '10.34',
        chartOptions: TotalExpenseChart,
        chartType: 'area' as 'area',
        chartHeight: 100,
    },
];

export const ActiveTasksData = [
    {
        name: "Regina Cooper",
        description: "Create userflow social application design",
    },
    {
        name: "Install Appointment",
        description: "Homepage design for slimmuch product",
    },
    {
        name: "Regina Cooper",
        description: "Interactive prototype design - web design",
    },
    {
        name: "Regina Cooper",
        description: "Create Application design for topbuzz",
    },
];

export const ProductSliderData = [
    {
        name: "iPhone 14 Pro",
        price: "21.45",
        originalPrice: "65.40",
        dealFrom: "48",
        image: "7",
        timer: [
            { value: "28", label: "Days" },
            { value: "03", label: "Hours" },
            { value: "14", label: "Min" },
            { value: "45", label: "Sec" },
        ],
    },
    {
        name: "Apple Airpods",
        price: "20.35",
        originalPrice: "35.43",
        dealFrom: "38",
        image: "8",
        timer: [
            { value: "20", label: "Days" },
            { value: "05", label: "Hours" },
            { value: "30", label: "Min" },
            { value: "15", label: "Sec" },
        ],
    },
    {
        name: "Apple Watch Series 7",
        price: "25.30",
        originalPrice: "45.40",
        dealFrom: "25",
        image: "9",
        timer: [
            { value: "15", label: "Days" },
            { value: "06", label: "Hours" },
            { value: "18", label: "Min" },
            { value: "30", label: "Sec" },
        ],
    },
];

export const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

export const WeeklySalesData = [
    {
        title: 'Customers',
        count: '1.485',
        percentage: '+4.6%',
        iconId: 'male',
        colorClass: 'primary',
    },
    {
        title: 'Revenue',
        count: '$5.873',
        percentage: '+3.10%',
        iconId: 'money',
        colorClass: 'secondary',
    },
];

export const TotalChangeData = [
    {
        title: "Total Sale",
        value: "$3654.00",
        chartType: "area" as "area",
        chartOptions: TotalSalesChart,
        chartHeight: 200,
    },
    {
        title: "Total Project",
        value: "12569",
        chartType: "bar" as "bar",
        chartOptions: TotalProjectChart,
        chartHeight: 215,
    },
    {
        title: "Total Product",
        value: "93M",
        chartType: "area" as "area",
        chartOptions: TotalProductChart,
        chartHeight: 200,
    },
];

export const OtherChartsData = [
    {
        title: LiveProducts,
        chart: LiveProductsChart,
        type: "area" as "area",
        height: 320,
        colSize: { xl: 7, lg: 12 },
        additionalClasses: 'xl-50'
    },
    {
        title: TurnOver,
        chart: TurnOverChart,
        type: "area" as "area",
        height: 317,
        colSize: { xl: 5, lg: 12 },
        additionalClasses: 'xl-50'
    },
    {
        title: CryptocurrencyPrices,
        chart: CryptocurrencyPricesChart,
        type: "area" as "area",
        height: 400,
        colSize: { xl: 6, lg: 12 },
        additionalClasses: 'xl-50'
    },
    {
        title: CryptoAnnotations,
        chart: CryptoAnnotationsChart,
        type: "line" as "line",
        height: 400,
        colSize: { xl: 6, lg: 12 },
        additionalClasses: 'xl-50'
    },
    {
        title: StockMarket,
        chart: StockMarketChart,
        type: 'line' as 'line',
        height: 450,
        colSize: { sm: 12 },
        additionalClasses: 'box-col-12 donut-chart-widget',
    },
    {
        title: Finance,
        chart: FinanceChart,
        type: 'line' as 'line',
        height: 350,
        colSize: { xl: 5, lg: 12 },
        additionalClasses: 'box-col-5',
    },
    {
        title: OrderStatus,
        chart: OrderStatusChart,
        type: 'line' as 'line',
        height: 350,
        colSize: { xl: 7, lg: 12 },
        additionalClasses: 'box-col-7',
    },
    {
        title: MonthlySales,
        chart: MonthlySalesChart,
        type: 'radar' as 'radar',
        height: 300,
        colSize: { xl: 5, lg: 12 },
        additionalClasses: 'xl-50 box-col-5 small-chart-widget chart-widgets-small',
    },
    {
        title: Uses,
        chart: UsesChart,
        type: 'bubble' as 'bubble',
        height: 300,
        colSize: { xl: 7, lg: 12 },
        additionalClasses: 'xl-50 box-col-7 small-chart-widget',
    },
];

