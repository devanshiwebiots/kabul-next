import ConfigDB from "@/Config/ThemeConfig";
import { ApexOptions } from "apexcharts";

const primary = ConfigDB.color.primary_color;
const secondary = ConfigDB.color.secondary_color;

export const CategoriesSalesChart: ApexOptions = {
    series: [52, 35, 15, 45],
    chart: {
        type: 'donut',
        height: 200,
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 1700,
        options: {
            chart: {
                height: 150
            },
        },
    }, {
        breakpoint: 1440,
        options: {
            chart: {
                height: 205
            },
        },
    }, {
        breakpoint: 992,
        options: {
            chart: {
                height: 160
            },
        },
    }
        , {
        breakpoint: 421,
        options: {
            chart: {
                height: 170
            },
        },
    }
    ],
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "70%",
                labels: {
                    show: true,
                    value: {
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        fontSize: "14px",
                        color: "#848789",
                        fontFamily: "Outfit', sans-serif",
                        fontWeight: 400,
                        label: "Total",
                        formatter: () => "60%",
                    },
                },
            },
        },
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val / 100 + "$";
            },
        },
    },
    colors: [primary, '#e69800', '#54BA4Acf', secondary],
};

export const CategoriesEarnedChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62],
    }],
    chart: {
        type: 'area',
        height: 200,
        // offsetY: -20,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            //   bottom: 3,
            blur: 2,
            color: primary,
            opacity: 0.2,
        },
    },
    colors: [primary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
};

export const ProjectCreatedChart: ApexOptions = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [220, 250, 210, 210, 270, 220, 250, 260, 210, 230]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [210, 170, 240, 160, 200, 170, 200, 150, 260, 170, 210, 170, 240, 160, 250, 140, 200, 140, 220, 220]
    }],
    chart: {
        height: 335,
        type: 'area',
        stacked: false,
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'stepline'
    },
    plotOptions: {
        bar: {
            columnWidth: '100px'
        }
    },
    colors: ['#bebebe', primary],
    // dropShadow: {
    //     enabled: true,
    //     top: 5,
    //     left: 6,
    //     bottom: 5,
    //     blur: 2,
    //     color: primary,
    //     opacity: 0.5,
    // },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: true,
            }
        },
    },
    xaxis: {
        categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "July", "", "Aug", "", "Sep", "", "Oct", ""],
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
        axisBorder: {
            show: false
        },
    },
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Project Created' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const BudgetChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [15, 14, 11, 20, 10, 15, 11],
    }],
    chart: {
        type: 'area',
        height: 120,
        offsetY: 10,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            // bottom: 3,
            blur: 2,
            color: primary,
            opacity: 0.2,
        },
    },
    colors: [primary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: primary,
            strokeColor: "#fff",
            size: 6,
            shape: "circle"
        },
        ],
    },
};

export const MonthlySaleChart: ApexOptions = {
    series: [{
        name: 'Growth',
        data: [0, 14, 5, 20, 14, 30]
    }],
    chart: {
        height: 120,
        type: 'line',
        stacked: true,
        offsetY: 40,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
        borderColor: '#000000',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },

    colors: [primary],
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    xaxis: {
        labels: {
            show: false
        },
    },
    yaxis: {
        min: -10,
        max: 40,
        labels: {
            show: false
        }
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 0,
            fillColor: primary,
            strokeColor: primary,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 1,
            fillColor: primary,
            strokeColor: primary,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: primary,
            strokeColor: primary,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: primary,
            strokeColor: primary,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: primary,
            strokeColor: primary,
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "#fff",
            strokeColor: primary,
            size: 5,
            shape: "circle"
        },
        ],
    },
};

export const InvoicesChart: ApexOptions = {
    series: [
        {
            data: [
                40, 50, 50, 50, 25, 25, 25, 60, 60, 60, 60, 45, 45, 45, 45, 25, 25, 25,
                25, 25, 60,
            ],
        },
    ],
    chart: {
        type: "line",
        height: 70,
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: true,
            top: 8,
            left: 3,
            blur: 2,
            color: primary,
            opacity: 0.4,
        },
    },
    stroke: {
        curve: "stepline",
        width: 2,
    },
    colors: [primary],
    fill: {
        opacity: [0.5, 0.25, 1],
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    markers: {
        hover: {
            sizeOffset: 4,
        },
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 1,
                fillColor: "#fff",
                strokeColor: primary,
                size: 3,
                shape: "circle",
            },
            {
                seriesIndex: 0,
                dataPointIndex: 4,
                fillColor: "#fff",
                strokeColor: primary,
                size: 3,
                shape: "circle",
            },
            {
                seriesIndex: 0,
                dataPointIndex: 7,
                fillColor: "#fff",
                strokeColor: primary,
                size: 3,
                shape: "circle",
            },
            {
                seriesIndex: 0,
                dataPointIndex: 11,
                fillColor: "#fff",
                strokeColor: primary,
                size: 3,
                shape: "circle",
            },
            {
                seriesIndex: 0,
                dataPointIndex: 15,
                fillColor: "#fff",
                strokeColor: primary,
                size: 3,
                shape: "circle",
            },
            {
                seriesIndex: 0,
                dataPointIndex: 20,
                fillColor: "#fff",
                strokeColor: primary,
                size: 3,
                shape: "circle",
            },
        ],
    },
    responsive: [
        {
            breakpoint: 1320,
            options: {
                chart: {
                    offsetX: 0,
                }
            },
        },
        {
            breakpoint: 1236,
            options: {
                chart: {
                    height: 80,
                }
            },
        },
        {
            breakpoint: 381,
            options: {
                chart: {
                    width: 200,
                    offsetX: 25,
                }
            },
        },
    ],
};

export const TotalEarningChart: ApexOptions = {
    series: [
        {
            name: 'series2',
            data: [15, 25, 20, 35, 60, 30, 20, 30, 20, 35, 25, 20],
        },
    ],
    colors: ["var(--theme-default)", "#d2601a"],
    chart: {
        height: 95,
        type: 'bar',
        sparkline: {
            enabled: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            distributed: true,
            columnWidth: "50%",
            barHeight: '38%',
            dataLabels: {
                position: 'top',
            },
        }
    },
    responsive: [
        {
            breakpoint: 1700,
            options: {
                chart: {
                    height: 86,
                },
            },
        },
        {
            breakpoint: 1699,
            options: {
                chart: {
                    height: 95,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 5,
                    },
                },
            },
        },
        {
            breakpoint: 376,
            options: {
                chart: {
                    height: 50,
                },
            },
        },
    ],
};

export const TotalExpenseChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    }],
    chart: {
        height: 100,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            // bottom: 3,
            blur: 2,
            color: primary,
            opacity: 0.2,
        },
    },
    colors: ["var(--theme-default)"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    tooltip: {
        enabled: false
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 12,
            fillColor: primary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }],
    }
};

export const OnlineOrdersChart: ApexOptions = {
    series: [
        {
            name: "Activity",
            data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
        },
    ],
    chart: {
        height: 130,
        type: "bar",
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 3,
            columnWidth: "40%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        labels: {
            show: false
        },
    },
    colors: ['#678f4433', '#678f4433', '#678f4433', '#678f4433', '#678f4433', primary, '#678f4433', '#678f4433', '#678f4433', '#678f4433', '#678f4433', '#678f4433', '#678f4433', '#678f4433', '#678f4433'],
};

export const OfflineOrdersChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    }],
    chart: {
        type: 'area',
        offsetY: 30,
        height: 172,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            //   bottom: 3,
            blur: 2,
            color: secondary,
            opacity: 0.2,
        },
    },
    colors: [secondary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 12,
            fillColor: secondary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }],
    },
    responsive: [{
        breakpoint: 1661,
        options: {
            chart: {
                height: 140
            },
        },
    }
    ],
};

export const TotalSalesChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    }],
    chart: {
        type: 'area',
        height: 200,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            //   bottom: 3,
            blur: 2,
            color: primary,
            opacity: 0.2,
        },
    },
    colors: [primary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 12,
            fillColor: primary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }],
    },
};

export const TotalProjectChart: ApexOptions = {
    series: [
        {
            name: 'series2',
            data: [15, 25, 20, 35, 55, 30, 20, 30, 20, 35, 25, 20, 15, 25, 20, 35, 50, 30, 20, 30, 20, 35, 25, 20],
        },
    ],
    colors: ["var(--theme-default)", "var(--theme-secondary)"],
    chart: {
        height: 215,
        offsetY: 20,
        type: 'bar',
        sparkline: {
            enabled: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            distributed: true,
            columnWidth: "50%",
            barHeight: '38%',
            dataLabels: {
                position: 'top',
            },
        }
    },
    // responsive: [
    //   {
    //     breakpoint: 1700,
    //     options: {
    //       chart: {
    //         height: 86,
    //       },
    //     },
    //   },
    //   {
    //     breakpoint: 1699,
    //     options: {
    //       chart: {
    //         height: 95,
    //       },
    //     },
    //   },
    //   {
    //     breakpoint: 1460,
    //     options: {
    //       grid: {
    //         padding: {
    //           top: 0,
    //           right: 0,
    //           bottom: 0,
    //           left: 5,
    //         },
    //       },
    //     },
    //   },
    //   {
    //     breakpoint: 376,
    //     options: {
    //       chart: {
    //         height: 50,
    //       },
    //     },
    //   },
    // ],
};

export const TotalProductChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [15, 14, 11, 20, 10, 15, 11],
    }],
    chart: {
        type: 'area',
        height: 200,
        offsetY: 10,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            // bottom: 3,
            blur: 2,
            color: secondary,
            opacity: 0.2,
        },
    },
    colors: [secondary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: secondary,
            strokeColor: "#fff",
            size: 6,
            shape: "circle"
        },
        ],
    },
};