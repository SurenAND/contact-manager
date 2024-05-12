type SelectOptionProps = {
  values: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

const SelectOption = ({ values, onChange, value }: SelectOptionProps) => {
  return (
    <select
      className="text-sm focus:outline-none border border-gray-100 shadow-md rounded-md px-3 py-2 appearance-none"
      onChange={onChange}
    >
      <option value="" selected disabled hidden>
        {value}
      </option>
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
