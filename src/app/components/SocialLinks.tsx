import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Linkedin, 
  Instagram, 
  Mail, 
  BrandTiktok,
  Share2,
  X
} from 'lucide-react';

const SocialLinks = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/your-number-here",
      color: "hover:text-green-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/company/your-company",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/your-handle",
      color: "hover:text-pink-500"
    },
    {
      icon: <BrandTiktok className="w-5 h-5" />,
      label: "TikTok",
      href: "https://tiktok.com/@your-handle",
      color: "hover:text-black"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:contact@your-domain.com",
      color: "hover:text-red-500"
    }
  ];

  return (
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
            <Share2 className="w-6 h-6" />
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
  );
};

export default SocialLinks;