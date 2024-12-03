export interface ChartWithHeaderProps {
    index?: number;
    colSize: Partial<Record<string, number>>;
    additionalClasses?: string;
    title: string;
    chart: ApexCharts.ApexOptions
    type: 'line' | 'area' | 'bar' | 'radar' | 'bubble' | 'donut';
    height: number;
}