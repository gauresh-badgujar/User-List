import "./SearchBar.css";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search users by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
