import "./SearchBar.css";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="search-bar-wrap">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        className="search-bar"
        type="text"
        placeholder="Search users by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
