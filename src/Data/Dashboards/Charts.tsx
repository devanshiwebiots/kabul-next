import ConfigDB from "@/Config/ThemeConfig";
import { ApexOptions } from "apexcharts";

const primary = ConfigDB.color.primary_color;
const secondary = ConfigDB.color.secondary_color;

export const RevenueGrowthChart: ApexOptions = {
    series: [
        {
            name: 'Good',
            data: [170, 250, 350, 150, 230, 120, 330, 350, 280, 300, 250, 110],
        },
        {
            name: 'Very Good',
            data: [290, 180, 120, 290, 370, 250, 230, 200, 140, 220, 220, 330],
        },
    ],
    colors: [primary, secondary],
    chart: {
        type: 'bar',
        height: 260,
        width: '100%',
        offsetY: 10,
        offsetX: 0,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                position: 'top',
            },
        },
    },

    grid: {
        show: false,
        padding: {
            left: -8,
            right: 0,
        },
    },
    dataLabels: {
        enabled: false,
    },
    // plotOptions: {
    //     bar: {
    //         horizontal: false,
    //         borderRadius: 8,
    //         columnWidth: '45%',
    //         barHeight: '100%',
    //         s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
    //         e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
    //     },
    // },

    stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
    },
    tooltip: {
        shared: true,
        intersect: false,
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
        y: {
            // show: false,
        },
    },
    yaxis: {
        show: false,
        min: 0,
        max: 400,
        logBase: 100,
        tickAmount: 4,
    },
    xaxis: {
        // show: false,
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
    legend: {
        show: false,
    },
};