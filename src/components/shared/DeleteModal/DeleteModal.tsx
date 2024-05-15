import TrashIcon from "../../../assets/trash.svg";
import Button from "../Button/Button";
type DeleteModalProps = {
  open: boolean;
  onClose: () => void;
  action: () => void;
};

const DeleteModal = ({ open, onClose, action }: DeleteModalProps) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col justify-center items-center text-center bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        {/* trash icon */}
        <img className="w-12 mt-5" src={TrashIcon} alt="trash" />
        {/* context */}
        <div className="mx-auto my-4 w-48">
          <h3 className="text-lg font-black text-gray-800">تایید حذف</h3>
          <p className="text-sm to-gray-500">
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
