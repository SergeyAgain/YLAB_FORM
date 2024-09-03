import { FC } from "react";
import OpenEyeIcon from "./icons/openEye";
import CloseEyeIcon from "./icons/closeEye";
export interface EyeIconButtonProps {
  onClick: VoidFunction;
  isOpen: boolean;
}
export const EyeIconButton: FC<EyeIconButtonProps> = ({ isOpen, onClick }) => {
  const EyeIcon = isOpen ? OpenEyeIcon : CloseEyeIcon;
  return (
    <button type="button" className="svg-button" onClick={onClick}>
      <EyeIcon className="form__svg" />
    </button>
  );
};
