import React from 'react'
import Card from './Cards'

const Donation = () => {
  return (
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-left text-teal-500">My Donations</h1>
    <Card />
    <Card />
    <Card />
</div>
    );
};

export default Donation