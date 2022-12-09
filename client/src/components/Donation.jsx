import React from 'react'
import Card from './Cards'

const Donation = () => {
  return (
  <div className="grid grid-cols-1 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div class="flex w-full">
    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-left text-teal-500">My Donations</h1>
    </div>
    <Card />
    <Card />
    <Card />
</div>
    );
};

export default Donation