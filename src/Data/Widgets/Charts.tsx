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