'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1250, 2500, 3750],
                backgroundColor: ['#0747B6', '#2265D8', '#2F91FA']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank3']
    }

    return (
        <Doughnut data={data} />
    )
}

export default DoughnutChart