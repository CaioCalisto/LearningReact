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
        {displayText} {!expanded && "..."}
      </Typography>
      {children && children.toString().length > maxLength && (

          <button onClick={toggleExpanded} className={"flex justify-end"}>
            <div className={"border-b-2"} style={{borderColor: "var(--BLUE-50)"}}>
              <Typography style={style} size={size} weight={weight} color={"var(--BLUE-50)"}>
                {expanded ? "See less" : "Read more"}
              </Typography>
            </div>

          </button>
        )}
    </div>
  );
}
