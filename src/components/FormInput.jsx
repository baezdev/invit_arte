import React from "react";

export const FormInput = ({ type, name, placeholder, icon }) => {
  return (
    <div class="form__input">
      <span>
        <i class={icon}></i>
      </span>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
