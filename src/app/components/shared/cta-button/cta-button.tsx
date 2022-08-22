import React, { FC } from "react";
import { Button } from "./cta-button-styles";

interface CtaButtonProps {
  isMain: boolean;
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

const CTAButton: FC<CtaButtonProps> = ({
  isMain,
  text,
  onClick,
  disabled = false
}) => {
  return (
    <Button main={isMain} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CTAButton;
