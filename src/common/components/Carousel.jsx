import React from 'react';
import Card from './Card'; // Import the Card component

const ClientsCarousel = () => {
  return (
    <section className="bg-black text-white py-8">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8">Our Clients</h2>
      <p className="text-center text-lg font-extralight leading-8">
        We are trusted by the world’s most innovative teams
      </p>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
        </div>
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
          <div className="mx-4 inline-block">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
