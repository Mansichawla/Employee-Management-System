import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-100 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-black  font-semibold text-sm px-3 py-1 rounded-md bg-red-600 ">
            Task Progress{" "}
          </h3>
          <h4 className=" text-black text-sm ">Deadline: 20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl text-black font-semibold">
          {" "}
          Make a youtube Video
        </h2>
        <p className="text-sm text-black mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
          exercitationem ut sapiente, magni quibusdam libero dicta sed
          reprehenderit eligendi qui et fuga eum saepe cupiditate vitae eos id
          blanditiis.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-green-100 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-black mt-5 ml-4 font-semibold text-sm px-3 py-1 rounded-md bg-red-600 ">
            Task Progress
          </h3>
          <h4 className=" text-black text-sm mr-4 mt-5 ">
            Deadline: 20 feb 2025
          </h4>
        </div>
        <h2 className="mt-5 ml-4 text-2xl text-black font-semibold">
          {" "}
          Make a youtube Video
        </h2>
        <p className="text-sm text-black mt-2 ml-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
          exercitationem ut sapiente, magni quibusdam libero dicta sed
          reprehenderit eligendi qui et fuga eum saepe cupiditate vitae eos id
          blanditiis.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-100 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-black mt-5 ml-4 font-semibold text-sm px-3 py-1 rounded-md bg-red-600 ">
            Task Progress
          </h3>
          <h4 className=" text-black text-sm mr-4 mt-5 ">
            Deadline: 20 feb 2025
          </h4>
        </div>
        <h2 className="mt-5 ml-4 text-2xl text-black font-semibold">
          {" "}
          Make a youtube Video
        </h2>
        <p className="text-sm text-black mt-2 ml-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
          exercitationem ut sapiente, magni quibusdam libero dicta sed
          reprehenderit eligendi qui et fuga eum saepe cupiditate vitae eos id
          blanditiis.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-100 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-black mt-5 ml-4 font-semibold text-sm px-3 py-1 rounded-md bg-red-600 ">
            Task Progress
          </h3>
          <h4 className=" text-black text-sm mr-4 mt-5 ">
            Deadline: 20 feb 2025
          </h4>
        </div>
        <h2 className="mt-5 ml-4 text-2xl text-black font-semibold">
          {" "}
          Make a youtube Video
        </h2>
        <p className="text-sm text-black mt-2 ml-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo
          exercitationem ut sapiente, magni quibusdam libero dicta sed
          reprehenderit eligendi qui et fuga eum saepe cupiditate vitae eos id
          blanditiis.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-red-100 rounded-xl">
        {" "}
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-red-100 rounded-xl"></div>
    </div>
  );
};

export default TaskList;
