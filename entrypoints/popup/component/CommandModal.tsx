import React, { useState } from "react";
import { GenerateIcon } from "../utils/GenerateIcon";
import { dummyText, EMPTY_STRING } from "../utils/constant";
import { Modal } from "./modal";

interface CommandModalProps {
  closeModal: () => void;
}

const CommandModal: React.FC<CommandModalProps> = ({ closeModal }) => {
  const [command, setCommand] = useState(EMPTY_STRING);
  const [dummyResponse, setDummyResponse] = useState(EMPTY_STRING);
  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };
  console.log("Generated Response command:", command);
  const handleSubmit = () => {
    setDummyResponse(dummyText);
  };

  return (
    <div>
      {dummyResponse === EMPTY_STRING ? (
        <Modal
          handleCommandChange={handleCommandChange}
          handleSubmit={handleSubmit}
          command={EMPTY_STRING}
        />
      ) : (
        <Modal command={dummyResponse} />
      )}
    </div>
  );
};

export default CommandModal;
