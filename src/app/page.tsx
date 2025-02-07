'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Recycle, 
  Wrench, 
  Scale, 
  Share2,
  Package,
  Smartphone,
  ChevronDown,
  Plus,
  Minus,
  Circle,
  MessageCircle, 
  Linkedin, 
  Instagram, 
  Mail,
  X
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  image: string;
}


const PackerWebsite = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      x: 20,
      y: 30,
      title: "Schnellwechsel-Kupplung",
      description: "Werkzeuglose Montage an jedes Fahrrad"
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [isSackkarre, setIsSackkarre] = useState(false);
  
  const hotspotData = {
    trailer: {
      position: { left: '45%', top: '55%' },
      title: "Innovative Rahmenstruktur",
      description: "Stabiler 3D-gedruckter Rahmen, trägt bis zu 200kg im Anhänger-Modus"
    },
      sackkarre: {
        position: {left: '45%', top: '55%' },
        title: "Verstärkte Lastaufnahme",
        description: "Optimierte Lastverteilung für bis zu 200kg im Sackkarre-Modus"
      }
    };
  
    const currentHotspot = isSackkarre ? hotspotData.sackkarre : hotspotData.trailer;

    const features: Feature[] = [
      {
        title: "Schnelle Transformation",
        description: "Vom Fahrradanhänger zur Sackkarre in wenigen Sekunden",
        details: "Das innovative Klappsystem ermöglicht einen schnellen Wechsel zwischen beiden Nutzungsmodi ohne Werkzeug.",
        icon: <Recycle className="w-6 h-6" />,
        image: "/images//images/pak_img_01.jpg"
      },
      {
        title: "Hohe Belastbarkeit",
        description: "Trägt bis zu 120kg als Sackkarre",
        details: "Robuste Konstruktion aus hochwertigem Material für maximale Stabilität und Langlebigkeit.",
        icon: <Scale className="w-6 h-6" />,
        image: "/images//images/pak_img_01.jpg"
      },
      {
        title: "Universal Kupplung",
        description: "Passt an jedes Fahrrad",
        details: "Die spezielle Schnellwechsel-Kupplung ermöglicht eine werkzeuglose Montage an allen gängigen Fahrradtypen.",
        icon: <Wrench className="w-6 h-6" />,
        image: "/images//images/pak_img_01.jpg"
      }
    ];
    

  const specs = [
    { label: "Gewicht", value: "8.8 kg" },
    { label: "Max. Zuladung als Sackkarre", value: "120 kg" },
    { label: "Max. Zuladung als Anhänger", value: "50 kg" },
    { label: "Maße (zusammengeklappt)", value: "60 x 40 cm" },
    { label: "Kompatibilität", value: "Alle Fahrradtypen" }
  ];

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
  {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/+4916098233150",
      color: "hover:text-green-500"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/ttekkler/",
      color: "hover:text-pink-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:info@tekkler.com",
      color: "hover:text-red-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sisermann/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100" />
      
      {/* Background Image */}
      <Image
        src="/images/pak_img_01.jpg"
        alt="Packer in action"
        fill
        priority
        className="object-cover opacity-100"
        sizes="100vw"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black">
          PACKER
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white-600">
          Der innovative Fahrradanhänger, der sich in eine Sackkarre verwandelt
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          Jetzt entdecken
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg bg-white shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl ${
                expandedFeature === index ? 'lg:col-span-3 md:col-span-2' : ''
              }`}
              onClick={() => toggleFeature(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400 bg-black p-2 rounded">{feature.icon}</div>
                {expandedFeature === index ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedFeature === index ? 'mt-4 max-h-96' : 'max-h-0'
              }`}>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Interactive Product View */}
      <div className="w-screen bg-white">
            <h2 className="text-4xl font-bold text-center py-8 text-black">
              Entdecke den Packer
            </h2>
            <p className="text-gray-600 text-center mb-16">
              Hover über die Punkte um mehr über die Features zu erfahren
            </p>
            <div className="relative w-full aspect-square bg-gray-50">
            <button
              onClick={() => setIsSackkarre(!isSackkarre)}
              className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 
                text-black px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              {isSackkarre ? "Zeige Anhänger" : "Zeige Sackkarre"}
            </button>
            <div className="relative w-full aspect-square bg-gray-50">
              <img
                src={`/images/${isSackkarre ? 'pak_img_13.jpg' : 'pak_img_01.jpg'}`}
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
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8 text-black">
                Sieh den Packer in Aktion
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Erlebe wie einfach sich der Packer im Alltag einsetzen lässt
              </p>
              <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/IELewAJOYEM" 
                  title="Packer Demo Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>

      {/* Social Links */}
      <div className="fixed bottom-4 right-4 z-50">
            <div className="relative">
              {/* Toggle Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all duration-300"
              >
                {isExpanded ? (
                  <X className="w-6 h-6" />
                ) : (
                  "Kontaktiere uns"
                )}
              </button>
      
              {/* Social Links */}
              <div className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${
                isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
              }`}>
                <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col gap-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 ${link.color}`}
                    >
                      {link.icon}
                      <span className="text-sm font-medium text-gray-700">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

      {/* Specs Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Technische Daten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 text-center border border-gray-200"
              >
                <div className="text-gray-600 mb-2">{spec.label}</div>
                <div className="text-2xl font-bold text-black">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackerWebsite;