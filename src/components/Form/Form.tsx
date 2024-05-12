import Button from "../shared/Button/Button";
import SelectOption from "../shared/SelectOption/SelectOption";

const Form = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-lg">اضافه / ویرایش کاربران</h2>

      <div className="w-full flex flex-col justify-center gap-3 border border-gray-100 shadow-lg rounded-lg py-2 px-5">
        {/* First Name */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className="text-sm font-semibold select-none"
            htmlFor="first-name"
          >
            نام:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="first-name"
            placeholder="نام ..."
          />
          <p className="text-xs text-red-700 select-none">
            لطفا نام را وارد کنید
          </p>
        </div>

        {/* Last Name */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className="text-sm font-semibold select-none"
            htmlFor="last-name"
          >
            نام خانوادگی:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="last-name"
            placeholder="نام خانوادگی ..."
          />
          <p className="text-xs text-red-700 select-none">
            لطفا نام خانوادگی را وارد کنید
          </p>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className="text-sm font-semibold select-none"
            htmlFor="phone-number"
          >
            شماره موبایل:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="phone-number"
            placeholder="شماره موبایل ..."
          />
          <p className="text-xs text-red-700 select-none">
            لطفا شماره موبایل را وارد کنید
          </p>
        </div>

        {/* Relation */}
        <div className="flex flex-col justify-center gap-1">
          <label className="text-sm font-semibold select-none">نسبت:</label>
          <SelectOption values={["دوست", "همکار", "خانواده"]} value="نسبت" />
          <p className="text-xs text-red-700 select-none">
            لطفا نسبت خود را وارد کنید
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col justify-center gap-1">
          <label
            className="text-sm font-semibold select-none"
            htmlFor="email-address"
          >
            ایمیل:
          </label>
          <input
            className="border border-gray-100 shadow-md rounded-md focus:outline-none px-3 py-2 text-sm"
            type="text"
            id="email-address"
            placeholder="ایمیل ..."
          />
          <p className="text-xs text-red-700 select-none">
            لطفا ایمیل خود را وارد کنید
          </p>
        </div>

        {/* Add Button */}
        <Button
          innerText="اضافه کردن"
          bgColor="bg-gray-500"
          textColor="white"
          px="3"
          py="2"
        />
      </div>
    </div>
  );
};

export default Form;
