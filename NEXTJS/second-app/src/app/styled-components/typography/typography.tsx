import "./typography.css";

type TypographyProps = {
  readonly type: "TITLE" | "BODY";
  readonly size: "XL" | "L" | "M" | "S" | "XS";
  readonly weight: "REGULAR" | "MEDIUM" | "SEMIBOLD" | "BOLD";
  readonly children: string;
  readonly color?: string;
};
export function Typography({
  type,
  size,
  weight,
  color,
  children,
}: TypographyProps) {
  const fontStyle = `${type}-${size}-${weight}`;
  const style = color ? { color: color } : {};

  return (
    <span className={fontStyle} style={style}>
      {children}
    </span>
  );
}
