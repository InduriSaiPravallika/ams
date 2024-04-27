import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="py-[64px] bg-green-600 flex flex-col justify-center items-center py-4 px-6 mt-auto">
      <p className="text-white font-sm">
        &copy; Powered by Fusion Five{" "}
        <span className="font-medium">{year}</span>
      </p>
    </div>
  );
};

export default Footer;
