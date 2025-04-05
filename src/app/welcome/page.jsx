import { Bebas_Neue, Bungee_Tint, Poppins, Roboto } from 'next/font/google';
import React from 'react';

const bebas = Bebas_Neue({
    weight:['400'], subsets: ['latin']
})


export const metadata = {
    title: "Welcome",
    description: "Welcome to next res",
  };

const welcomePage = () => {
    return (
        <div className={`${bebas.className} text-4xl text-blue-700 text-center`}>
           Hi , Welcome to next meal <br />here you can get your desired meal
        </div>
    );
};

export default welcomePage;