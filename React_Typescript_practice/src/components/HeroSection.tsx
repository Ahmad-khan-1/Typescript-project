type HeroSectionProps<T extends string | number> = {
  label: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      </form>
    </div>
  );
};

export default HeroSection;
