import { EMPTY_STRING } from "../utils/constant";
import { GenerateIcon } from "../utils/GenerateIcon";

interface Props {
  command: string;
  handleCommandChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: () => void;
}

export const Modal = ({
  command,
  handleCommandChange,
  handleSubmit,
}: Props) => (
  <div className="bg-white rounded-lg shadow-lg p-2">
    <div className={`${command !== EMPTY_STRING ? "pl-20" : EMPTY_STRING}`}>
      <input
        type="text"
        value={
          command === EMPTY_STRING
            ? EMPTY_STRING
            : "Reply thanking for the opportunity"
        }
        onChange={(e) => handleCommandChange?.(e)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
        disabled={command === EMPTY_STRING ? false : true}
      />
    </div>
    {command !== EMPTY_STRING && (
      <div className="w-full bg-blue-50 p-2 rounded-md">{command}</div>
    )}
   {command !== EMPTY_STRING && <div>
      <input
        type="text"
        value={""}
        placeholder="Your Prompt"
        className="w-full border border-gray-300 p-2 rounded my-2"
      />
    </div>}

    <div className="flex justify-end mt-2">
      {command === EMPTY_STRING ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 flex gap-2 text-white font-bold  px-4 py-1 rounded"
        >
          <GenerateIcon />
          Generate
        </button>
      ) : (
        <>
          <button
            onClick={() => {}}
            className="bg-blue-500 hover:bg-blue-700 flex gap-2 text-white font-bold  px-4 py-1 rounded"
          >
            <GenerateIcon />
            ReGenerate
          </button>
        </>
      )}
    </div>
  </div>
);
