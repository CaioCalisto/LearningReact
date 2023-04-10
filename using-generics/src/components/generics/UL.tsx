export function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>, 
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
          <button onClick={() => itemClick(item)}>Another button</button>
        </li>
      ))}
    </ul>
  );
}