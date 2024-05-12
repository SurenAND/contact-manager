import Contact from "../Contact/Contact";

const ContactList = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-2">
      <h2 className="font-bold text-lg">لیست کاربران</h2>
      <div className="w-full h-[400px] bg-gray-100 flex flex-wrap gap-5 overflow-y-auto border border-gray-100 shadow-lg rounded-lg py-2 px-5">
        {/* {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Contact
              key={item}
              firstName="شعیب"
              lastName="شاهین"
              phoneNumber="09123456789"
              relation="شخصی"
              email="shahin@gmail.com"
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default ContactList;
