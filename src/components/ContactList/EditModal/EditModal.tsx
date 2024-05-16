import { useEffect, useState } from "react";
import EditIcon from "../../../assets/edit.svg";
import Button from "../../shared/Button/Button";
import SelectOption from "../../shared/SelectOption/SelectOption";
import { getAPI } from "../../../api/GET";
import { ContactType } from "../../../api/api.type";
import { useTheme } from "../../../hooks/useTheme";

type EditModalProps = {
  openEdit: boolean;
  onClose: () => void;
  action: (id: number, data: ContactType) => void;
  idToEdit: React.MutableRefObject<number>;
};

const EditModal = ({ openEdit, onClose, action, idToEdit }: EditModalProps) => {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relation, setRelation] = useState("نسبت");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const id = idToEdit.current;
    if (!!id && !!openEdit) {
      getAPI(`contacts/${id}`).then((res: any) => {
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setPhoneNumber(res.phoneNumber);
        setRelation((prev) => (prev = res.relation));
        setEmail(res.email);
      });
    }
  }, [openEdit]);

  // change theme
  const { mode } = useTheme();

  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        openEdit ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col justify-center items-center gap-5 text-center rounded-xl shadow p-6 transition-all ${
          openEdit ? "scale-100 opacity-100" : "scale-125 opacity-0"
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
        {/* edit icon */}
        <img className="w-12 mt-5" src={EditIcon} alt="edit" />
        {/* edit form */}

        {/* First Name */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className={`text-sm font-semibold select-none ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
            htmlFor="first-name"
          >
            نام:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="first-name"
            placeholder="نام ..."
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              //   setFirstNameError(false);
            }}
          />
          {/* {firstNameError && (
            <p className="text-xs text-red-700 select-none">
              لطفا نام را وارد کنید
            </p>
          )} */}
        </div>

        {/* Last Name */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className={`text-sm font-semibold select-none ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
            htmlFor="last-name"
          >
            نام خانوادگی:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="last-name"
            placeholder="نام خانوادگی ..."
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              //   setLastNameError(false);
            }}
          />
          {/* {lastNameError && (
            <p className="text-xs text-red-700 select-none">
              لطفا نام خانوادگی را وارد کنید
            </p>
          )} */}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className={`text-sm font-semibold select-none ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
            htmlFor="phone-number"
          >
            شماره موبایل:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="phone-number"
            placeholder="شماره موبایل ..."
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              //   setPhoneNumberError(false);
            }}
          />
          {/* {phoneNumberError && (
            <p className="text-xs text-red-700 select-none">
              لطفا شماره موبایل را وارد کنید
            </p>
          )} */}
        </div>

        {/* Relation */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className={`text-sm font-semibold select-none ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            نسبت:
          </label>
          <SelectOption
            values={["دوست", "همکار", "خانواده"]}
            value={relation}
            onChange={(e) => {
              setRelation(e.target.value);
              //   setRelationError(false);
            }}
          />
          {/* {relationError && (
            <p className="text-xs text-red-700 select-none">
              لطفا نسبت خود را وارد کنید
            </p>
          )} */}
        </div>

        {/* Email */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className={`text-sm font-semibold select-none ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
            htmlFor="email-address"
          >
            ایمیل:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="email-address"
            placeholder="ایمیل ..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              //   setEmailError(false);
            }}
          />
          {/* {emailError && (
            <p className="text-xs text-red-700 select-none">
              لطفا ایمیل خود را وارد کنید
            </p>
          )} */}
        </div>
        {/* buttons */}
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
            innerText="ویرایش"
            bgColor="bg-blue-500"
            textColor="white"
            px="5"
            py="2"
            onClick={() => {
              action(idToEdit.current, {
                firstName,
                lastName,
                phoneNumber,
                relation,
                email,
              });
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
