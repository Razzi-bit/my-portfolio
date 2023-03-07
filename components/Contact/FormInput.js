import React from "react";

const FormInput = ({ text, type, placeholder, name, id, errors, handelChanges, clearError }) => {
  return (
    <div className="flex flex-col p-2 flex-1">
      <label htmlFor={id} className="p-1 text-[#fff]">
        {text}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`p-2 rounded-xl w-full focus:outline-none focus:ring focus:ring-details text-second ${
          errors && "outline outline-2 outline-[#ff4141]"
        }`}
        onChange={handelChanges}
        onFocus={clearError}
      />
      {errors && <span className="p-1 text-base text-[#ff4141]">{errors}</span>}
    </div>
  );
};

export default FormInput;
