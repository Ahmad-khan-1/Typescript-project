type HeroSectionProps<T extends string | number> = {
  label: string;
  value: T;
  onChange: () => void;
};

const HeroSection = <T extends string | number>({
  label,
  value,
  onChange,
}: HeroSectionProps<T>) => {
  return (
    <div>
      <form>
        <label>{label}</label>

        <input type="text" value={value} onChange={onChange} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default HeroSection;
