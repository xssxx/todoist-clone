import React from "react";

const Phone: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center">
      {/* 1 */}
      <div className="flex-col flex md:flex-row w-full items-center">
        <section className="flex w-full md:w-1/2 justify-end">
          <div className="flex flex-col text-center md:text-start md:w-1/2 md:mr-32 gap-4 m-2">
            <p className="text-sm md:text-md">Get more done</p>
            <span className="text-xl md:text-4xl font-semibold">
              Add your tasks.
              <br />
              Organize your life.
              <br />
              Achieve more every day.
            </span>
            <p className="text-md md:text-lg">
              Add tasks like “Read work emails every day at 10am” to fill your
              to-do list in seconds using Todoist’s powerful natural language
              recognition and recurring dates.
            </p>
          </div>
        </section>
        <section className="w-1/2 md:p-12">
          <img src="https://todoist.com/static/home/features/get-more-done-1008.webp" />
        </section>
      </div>
      {/* 2 */}
      <div className="flex flex-col w-108 md:flex-row w-full items-center">
        <section className="w-1/2 md:p-12">
          <img src="https://todoist.com/static/home/features/clear-your-mind-1008.webp" />
        </section>
        <section className="flex w-full md:w-1/2 justify-end">
          <div className="flex flex-col text-center md:text-start md:w-1/2 md:mr-32 gap-4 m-2 mt-32">
            <p className="text-sm md:text-md">Clear your mind</p>
            <span className="text-xl md:text-4xl font-semibold">
              Reach that mental clarity
              <br />
              you’ve been longing for.
            </span>
            <p className="text-md md:text-lg">
              Your to-do lists are automatically sorted into Today, Upcoming and
              custom Filter views to help you focus on your most important
              things.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Phone;
