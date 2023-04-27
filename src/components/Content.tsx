import React from "react";

const Content: React.FC = () => {
  return (
    <div className="flex h-[30rem] justify-center items-center">
      <div className="w-[30rem] flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-center">
          Organize your
          <br />
          work and life, finally.
        </h1>
        <h2 className="text-2xl text-center">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </h2>
        <button className="bg-red-500 text-xl text-white font-bold w-52 h-14 rounded-xl hover:shadow-lg">
          Open Todoist
        </button>
      </div>
    </div>
  );
};

export default Content;
