# React + Vite

the link :  https://food-website-using-react-by-chandan.vercel.app/
host by vercel

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
















import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [buyers, setBuyers] = useState([]); // State to hold fetched buyers
  const api = 'http://localhost:1337/api/manage-buyers?populate=*';

  useEffect(() => {
    axios.get(api)
      .then((res) => {
        console.log(res);
        setBuyers(res.data.data); // Set the fetched buyers
      })
      .catch((error) => {
        console.error("Error fetching buyers:", error);
      });
  }, []);

  return (
    <div>
      {buyers && buyers.map((item, index) => (
        <div key={index}>
          <p> {/* Display each buyer's name and email in a paragraph */}
            {item.name} - {item.email} {/* Combine name and email in one paragraph */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Axios;
