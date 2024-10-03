import React, { useState } from "react";
import { Icon as VectorIcon } from "../utils/Icon";
import CommandModal from "./CommandModal";

const InputWithCommandModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsModalOpen(false);
    }
  };

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative w-64 p-4 group" onBlur={handleBlur}>
        {!isModalOpen && (
          <>
            <textarea
              className="resize-none border bg-gray-100 border-gray-300 rounded-md p-2 w-full h-28 focus:outline-none"
              placeholder="Write a message..."
            />
            <button
              onClick={handleIconClick}
              aria-label="AI Icon"
              className="absolute top-20 right-6 shadow-md rounded-2xl p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <VectorIcon />
            </button>
          </>
        )}
      </div>
      {isModalOpen && <CommandModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default InputWithCommandModal;
