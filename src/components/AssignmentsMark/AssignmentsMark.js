import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const AssignmentsMark = () => {
    const data = [
        {
            name: "Page A",
            mark: 4000,
            quiz: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            mark: 3000,
            quiz: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            mark: 2000,
            quiz: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            mark: 2780,
            quiz: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            mark: 1890,
            quiz: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            mark: 2390,
            quiz: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            mark: 3490,
            quiz: 4300,
            amt: 2100
        }
    ];
    return (
        <ResponsiveContainer width="100%" height="100%" >
        <div className='bg-indigo-300 font-bold text-black'>
            
            <LineChart width={600} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="black" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend  stroke="#8884d8"/>
                <Line type="monotone" dataKey="quiz" stroke="green"/>
                <Line type="monotone" dataKey="mark" stroke="red" />
            </LineChart>
            
        </div>
        </ResponsiveContainer>
    );
};

export default AssignmentsMark;