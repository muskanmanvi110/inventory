import React, { useEffect, useState } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

const data = [
  { name: 'Product A', price: 4000, discount: 2400 },
  { name: 'Product B', price: 3000, discount: 1398 },
  { name: 'Product C', price: 2000, discount: 980 },
  { name: 'Product D', price: 2780, discount: 908 },
  { name: 'Product E', price: 1890, discount: 400 },
  { name: 'Product F', price: 2390, discount: 800 },
  { name: 'Product G', price: 3490, discount: 1300 },
];

const data1 = [
  { name: 'Product A', price: 4000, sales: 240 },
  { name: 'Product B', price: 3000, sales: 398 },
  { name: 'Product C', price: 2000, sales: 980 },
  { name: 'Product D', price: 2780, sales: 390 },
  { name: 'Product E', price: 1890, sales: 480 },
  { name: 'Product F', price: 2390, sales: 800 },
  { name: 'Product G', price: 3490, sales: 430 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>TOTAL PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>900</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>30</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>DONATIONS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>46</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>WASTE REDUCTION</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>88%</h1>
        </div>
      </div>

      {ready && (
        <div className='charts'>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
                <Bar dataKey="discount" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
