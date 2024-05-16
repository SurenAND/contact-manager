import { useState } from "react";
import Button from "../shared/Button/Button";
import SelectOption from "../shared/SelectOption/SelectOption";
import { ContactType } from "../../api/api.type";
import { postAPI } from "../../api/POST";
import { useTheme } from "../../hooks/useTheme";

const Form = ({ setContacts }: { setContacts: (contacts: any) => void }) => {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relation, setRelation] = useState("نسبت");
  const [email, setEmail] = useState("");

  // validation states
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [relationError, setRelationError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    if (firstName && lastName && phoneNumber && relation !== "نسبت" && email) {
      const newContact = {
        firstName,
        lastName,
        phoneNumber,
        relation,
        email,
      };
      postAPI("contacts", newContact).then((res) => {
        setContacts((prev: ContactType[]) => [...prev, res]);
      });

      // clear inputs
      setFirstName((prev) => (prev = ""));
      setLastName((prev) => (prev = ""));
      setPhoneNumber((prev) => (prev = ""));
      setRelation((prev) => (prev = "نسبت")); //FIXME
      setEmail((prev) => (prev = ""));
    } else {
      !!!firstName && setFirstNameError(true);
      !!!lastName && setLastNameError(true);
      !!!phoneNumber && setPhoneNumberError(true);
      relation === "نسبت" && setRelationError(true);
      !!!email && setEmailError(true);
    }
  };

  // change theme
  const { mode } = useTheme();

  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-2">
      <h2
        className={`font-bold text-lg ${
          mode === "dark" ? "text-white" : "text-black"
        }`}
      >
        اضافه / ویرایش کاربران
      </h2>

      <div
        className={`w-full flex flex-col justify-center gap-3 border border-gray-100 shadow-lg rounded-lg py-2 px-5 ${
          mode === "dark" ? "bg-gray-500" : "bg-white"
        }`}
      >
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
              setFirstNameError(false);
            }}
          />
          {firstNameError && (
            <p className="text-xs text-red-700 select-none">
              لطفا نام را وارد کنید
            </p>
          )}
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
              setLastNameError(false);
            }}
          />
          {lastNameError && (
            <p className="text-xs text-red-700 select-none">
              لطفا نام خانوادگی را وارد کنید
            </p>
          )}
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
              setPhoneNumberError(false);
            }}
          />
          {phoneNumberError && (
            <p className="text-xs text-red-700 select-none">
              لطفا شماره موبایل را وارد کنید
            </p>
          )}
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
              setRelationError(false);
            }}
          />
          {relationError && (
            <p className="text-xs text-red-700 select-none">
              لطفا نسبت خود را وارد کنید
            </p>
          )}
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
              setEmailError(false);
            }}
          />
          {emailError && (
            <p className="text-xs text-red-700 select-none">
              لطفا ایمیل خود را وارد کنید
            </p>
          )}
        </div>

        {/* Add Button */}
        <Button
          innerText="اضافه کردن"
          bgColor={mode === "dark" ? "bg-gray-800" : "bg-gray-500"}
          textColor="white"
          px="3"
          py="2"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Form;
