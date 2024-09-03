import { FC, FormEventHandler, useRef, useState } from "react";
import { Message } from "../types";
import { getAuthData, getPasswordError } from "../helpers";
import { fakeApi } from "../fakeApi";
import { FormInput } from "./FormInput";
import { EyeIconButton } from "./EyeIconButton";

export const Form: FC = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [message, setMessage] = useState<Message>({
    message: "",
    error: false,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = ref.current;
    if (!form) {
      console.error("не удалось отобразить форму");
      return;
    }
    const authData = getAuthData(new FormData(form));
    const passwordError = getPasswordError(authData.password);
    setMessage({ message: passwordError, error: Boolean(passwordError) });
    if (passwordError) return;
    setIsSubmitDisabled(true);
    fakeApi(authData)
      .then((data) => {
        setMessage({ error: false, message: data });
        form.reset();
      })
      .catch((err) => setMessage({ message: err.message, error: true }))
      .finally(() => setIsSubmitDisabled(false));
  };

  const handleEyeIconClick = () => setIsPasswordShowed((prev) => !prev);
  const messageClassName = message.error ? "error message" : "message";
  console.log({ isSubmitDisabled });

  return (
    <form ref={ref} onSubmit={handleSubmit} className="form">
      <FormInput
        label="Почта"
        name="email"
        type="email"
        placeholder="example@mail.com"
        required
      />
      <FormInput
        label="Пароль"
        name="password"
        type={isPasswordShowed ? "text" : "password"}
        placeholder="от 6 символов"
        required
        additionalElement={
          <EyeIconButton
            isOpen={!isPasswordShowed}
            onClick={handleEyeIconClick}
          />
        }
      />
      <button
        type="submit"
        className="form__submit"
        disabled={isSubmitDisabled}
      >
        Отправить
      </button>
      <p className={messageClassName}>{message.message}</p>
    </form>
  );
};
