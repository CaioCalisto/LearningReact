export function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>, 
  HTMLUListElement // this is to receive className and css
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