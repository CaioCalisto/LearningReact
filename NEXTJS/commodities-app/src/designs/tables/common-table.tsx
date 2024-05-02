import React, { ReactNode } from "react";

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
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={`table-header-${column.header}`}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataRow, dataIndex) => (
          <tr key={`table-row-${dataIndex}`}>
            {columns.map((column, columnIndex) => (
              <td key={`table-row-cel-${columnIndex}`}>
                {getColumnValue(dataRow, column.attribute, column.customValue)}
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
