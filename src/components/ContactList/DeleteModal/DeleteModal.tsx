import TrashIcon from "../../../assets/trash.svg";
import { useTheme } from "../../../hooks/useTheme";
import Button from "../../shared/Button/Button";
type DeleteModalProps = {
  openDelete: boolean;
  onClose: () => void;
  action: () => void;
};

const DeleteModal = ({ openDelete, onClose, action }: DeleteModalProps) => {
  // change theme
  const { mode } = useTheme();

  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        openDelete ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col justify-center items-center text-center rounded-xl shadow p-6 transition-all ${
          openDelete ? "scale-100 opacity-100" : "scale-125 opacity-0"
        } ${mode === "dark" ? "bg-gray-600" : "bg-white"}`}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 p-1 rounded-lg text-gray-400  ${
            mode === "dark" ? "hover:text-white" : "hover:text-gray-600"
          }`}
        >
          X
        </button>
        {/* trash icon */}
        <img className="w-12 mt-5" src={TrashIcon} alt="trash" />
        {/* context */}
        <div className="mx-auto my-4 w-48">
          <h3
            className={`text-lg font-black text-gray-800 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            تایید حذف
          </h3>
          <p
            className={`text-sm to-gray-500 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            آیا مطمئن هستید که می خواهید این مخاطب را حذف کنید؟
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            innerText="انصراف"
            bgColor="bg-gray-400"
            textColor="white"
            px="5"
            py="2"
            onClick={onClose}
          />
          <Button
            innerText="حذف"
            bgColor="bg-red-500"
            textColor="white"
            px="5"
            py="2"
            onClick={() => {
              action();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
