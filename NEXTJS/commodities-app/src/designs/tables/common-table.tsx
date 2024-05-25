import React, { ReactNode } from "react";
import { Typography } from "@/designs";

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type ColumnDefinitionType<T extends object> = {
  header: string;
  attribute?: NestedKeyOf<T>;
  customValue?: (data: T) => ReactNode;
  width?: string;
};

type Props<T extends object> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T>>;
};

function CommonTable<T extends object>({ data, columns }: Props<T>) {
  return (
    <table>
      <thead style={{ backgroundColor: "var(--GRAY-5)" }}>
        <tr>
          {columns.map((column) => (
            <th
              className="text-justify border-r-4 px-2"
              style={{ borderColor: "var(--GRAY-50)" }}
              key={`table-header-${column.header}`}
            >
              <Typography style="body" size="s" weight="regular">
                {column.header}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataRow, dataIndex) => (
          <tr className="border-b-2" style={{ borderColor: "var(--GRAY-50)" }} key={`table-row-${dataIndex}`}>
            {columns.map((column, columnIndex) => (
              <td className="p-2" width={column.width} key={`table-row-cel-${columnIndex}`}>
                <Typography style="body" size="s" weight="regular">
                  {getColumnValue(
                    dataRow,
                    column.attribute,
                    column.customValue,
                  )}
                </Typography>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function getColumnValue<T extends object>(
  obj: T,
  path?: NestedKeyOf<T>,
  customValue?: (data: T) => ReactNode,
): ReactNode {
  let result: any = obj;
  if (path === undefined && customValue !== undefined) {
    return customValue(obj);
  }

  if (path !== undefined) {
    const keys = path.split(".");

    for (const key of keys) {
      result = result[key] ?? "";
    }
  }

  return <>{result}</>;
}

export default CommonTable;
export type { ColumnDefinitionType };
