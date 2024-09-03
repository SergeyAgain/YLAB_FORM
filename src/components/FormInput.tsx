import { FC } from "react";

export interface FormInputProps {
  additionalElement?: JSX.Element;
  type: string;
  placeholder: string;
  required: boolean;
  name: string;
  label?: string;
}

export const FormInput: FC<FormInputProps> = ({
  additionalElement,
  label,
  ...props
}) => {
  return (
    <label className="form__label">
      {label}
      <input className="form__input" {...props} />
      {additionalElement}
    </label>
  );
};
