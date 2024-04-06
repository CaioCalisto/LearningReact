import React, { useState } from "react";
import Typography, { TypographyProps } from "./typography";

type TextAreaProps = {
  maxLength: number;
} & TypographyProps;

export default function TextArea({
  style,
  size,
  weight,
  color,
  maxLength,
  children,
}: TextAreaProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const displayText = expanded
    ? children
    : children?.toString().slice(0, maxLength);

  return (
    <div className={"flex flex-col gap-2"}>
      <Typography style={style} size={size} weight={weight} color={color}>
        {displayText}
      </Typography>
      {children && children.toString().length > maxLength && (
        <button onClick={toggleExpanded} className={"flex justify-end"}>
          <Typography style={style} size={size} weight={weight}>
            {expanded ? "See less" : "See more"}
          </Typography>
        </button>
      )}
    </div>
  );
}
