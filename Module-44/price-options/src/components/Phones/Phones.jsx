import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map(phone => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1])
          };
          return obj;
        });
        setPhone(phoneWithFakeData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Phone Count: {phone.length}</h2>
      <BarChart width={1200} height={400} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  );
};

export default Phones;
