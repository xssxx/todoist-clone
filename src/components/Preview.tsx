import React from "react";

const Preview: React.FC = () => {
  const imageUrl: string =
    "https://res.cloudinary.com/imagist/image/fetch/f_auto/q_auto/c_scale,w_1120/https://todoist.com/static/home/hero/illustration_w_2026.png?_a=ATCqVcY0";

  return (
    <div className="flex w-full justify-center">
      <img src={imageUrl} />
    </div>
  );
};

export default Preview;
