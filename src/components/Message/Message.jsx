import React from "react";

const Message = ({ message }) => {
  return (
    <>
      <div className="flex flex-col justify-center ">
        {/* Toast Notification Success */}
        <div className="flex  items-center font-semibold bg-green-400 border-l-4 border-secondary py-2 px-3 shadow-md mb-2">
          {/* icons  */}
          <div className="text-secondary rounded-full bg-white px-2 py-1">
            <i className="fas fa-check text-2xl "></i>
          </div>
          {/* message */}
          <div className="text-white max-w-xs px-4">{message}</div>
        </div>
      </div>
    </>
  );
};

export default Message;
