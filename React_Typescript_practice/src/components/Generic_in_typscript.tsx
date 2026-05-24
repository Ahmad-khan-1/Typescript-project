type ListProps<T> = {
  item: T[];
};

const GenericComp = <T,>({ item }: ListProps<T>) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {item.map((item, index) => (
        <p key={index}>{String(item)}</p>
      ))}
    </div>
  );
};
export default GenericComp;
