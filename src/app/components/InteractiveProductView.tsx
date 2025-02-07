'use client'
import React, { useState } from 'react';
import { Circle } from 'lucide-react';

const InteractiveProductView = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSackkarre, setIsSackkarre] = useState(false);

  const hotspotData = {
    trailer: {
      position: { left: '45%', top: '55%' },
      title: "Innovative Rahmenstruktur",
      description: "Stabiler 3D-gedruckter Rahmen, trägt bis zu 200kg im Anhänger-Modus"
    },
    sackkarre: {
      position: { left: '55%', top: '45%' },
      title: "Verstärkte Lastaufnahme",
      description: "Optimierte Lastverteilung für bis zu 200kg im Sackkarre-Modus"
    }
  };

  const currentHotspot = isSackkarre ? hotspotData.sackkarre : hotspotData.trailer;

  return (
    <div className="w-screen bg-white">
      <h2 className="text-4xl font-bold text-center py-8 text-black">
        Entdecke den Packer
      </h2>
      <p className="text-gray-600 text-center mb-16">
        Hover über die Punkte um mehr über die Features zu erfahren
      </p>
      <button
        onClick={() => setIsSackkarre(!isSackkarre)}
        className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 
          text-black px-4 py-2 rounded-lg font-semibold transition-colors"
      >
        {isSackkarre ? "Zeige Anhänger" : "Zeige Sackkarre"}
      </button>
      <div className="relative w-full aspect-[16/9] bg-gray-50">
        <img
          src={`/api/placeholder/${isSackkarre ? '1601' : '1600'}/900`}
          alt={`Packer ${isSackkarre ? 'Sackkarre' : 'Fahrradanhänger'}`}
          className="w-full h-full object-contain transition-opacity duration-300"
        />
        <div
          className="absolute"
          style={currentHotspot.position}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <Circle 
              className={`w-4 h-4 ${isHovered ? 'text-yellow-400 animate-pulse' : 'text-yellow-400'} 
                cursor-pointer -translate-x-1/2 -translate-y-1/2`}
              fill={isHovered ? "currentColor" : "none"}
            />
            
            <div className={`absolute z-10 top-full mt-2 left-0 w-48 bg-white shadow-lg 
              rounded-lg p-3 transition-opacity duration-200
              ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <h3 className="font-semibold text-black mb-1">{currentHotspot.title}</h3>
              <p className="text-sm text-gray-600">{currentHotspot.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProductView;