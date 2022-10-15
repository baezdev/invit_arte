import React from "react";

export const FormButton = ({ text, icon }) => {
  return (
    <button class="form__button form__button-primary">
      <span class="form__button-text">{text}</span>
      <span class="form__button-icon">
        <i class={icon}></i>
      </span>
    </button>
  );
};
