import type { CSSProperties } from "react";
import type { User } from "../types";
import "./UserCard.css";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ponytail: cheap string hash for a stable per-user avatar hue, not cryptographic
function hueFor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash) % 360;
}

const ICONS = {
  mail: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  ),
  phone: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  city: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export function UserCard({ user }: { user: User }) {
  const hue = hueFor(user.name);
  return (
    <li className="user-row" style={{ "--hue": hue } as CSSProperties}>
      <div className="user-row__top">
        <div className="user-row__avatar" aria-hidden="true">
          {initials(user.name)}
        </div>
        <div className="user-row__identity">
          <span className="user-row__name">{user.name}</span>
          <span className="user-row__username">@{user.username}</span>
        </div>
      </div>
      <div className="user-row__field">
        <span className="user-row__label">{ICONS.mail} Email</span>
        <span className="user-row__value">{user.email}</span>
      </div>
      <div className="user-row__field">
        <span className="user-row__label">{ICONS.phone} Phone</span>
        <span className="user-row__value">{user.phone}</span>
      </div>
      <div className="user-row__field">
        <span className="user-row__label">{ICONS.city} City</span>
        <span className="user-row__value">{user.address.city}</span>
      </div>
    </li>
  );
}
