import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex w-full justify-start p-10 bg-yellow-50 h-2 items-center">
        <ul className="flex flex-row gap-4 text-gray-500">
          <li className="cursor-pointer">Security</li>
          <li className="cursor-pointer">Privacy</li>
          <li className="cursor-pointer">Terms</li>
          <li>© Doist Inc.</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
