import SunIcon from "../../assets/sun.svg";
import { useTheme } from "../../hooks/useTheme";
const Header = () => {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative flex justify-center items-center bg-header bg-center bg-cover p-3 rounded-b-full mb-5">
      <h1 className="text-white text-xl font-bold">
        وب اپلیکیشن مدیریت مخاطبین
      </h1>
      <img
        onClick={toggleMode}
        className={`w-5 absolute left-10 bg-white p-0.5 rounded-full cursor-pointer ${
          mode === "dark" ? "invert" : ""
        }`}
        src={SunIcon}
        alt="Light Mode"
      />
    </div>
  );
};

export default Header;
