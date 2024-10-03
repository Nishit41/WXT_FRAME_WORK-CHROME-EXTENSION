import { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');
  const dummyResponse = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`;

  const handleGenerate = () => {
    setResponse(dummyResponse);  // Static response
  };

  return (
    <div className="inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Close button */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        {/* Modal content */}
        <h2 className="text-center text-xl font-bold mb-4">AI Message Generator</h2>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter your command..."
          className="w-full border p-2 mb-4"
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Generate
        </button>

        {/* Display generated response */}
        {response && (
          <div className="mt-4">
            <p className="mb-2">{response}</p>
            <button
              onClick={() => {
                const messageInput = document.querySelector('.msg-form__contenteditable');
                if (messageInput) messageInput.textContent = response;
                onClose();  // Close modal after insertion
              }}
              className="bg-green-500 text-white w-full p-2 rounded"
            >
              Insert
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
