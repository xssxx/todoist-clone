import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-52 bg-yellow-50 justify-center items-center gap-10">
      <ul className="flex flex-col items-center">
        <li>300,000+ REVIEWS</li>
        <li>★★★★★</li>
        <li>App Store and Google Play</li>
      </ul>
      <ul className="flex flex-col justify-center items-center">
        <li>USED BY INDIVIDUALS AND TEAMS AT</li>
        <li>Amazon Disney</li>
        <li>Shopify NYU Apple</li>
      </ul>
    </div>
  );
};

export default Contact;
