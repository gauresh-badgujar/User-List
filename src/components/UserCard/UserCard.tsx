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

export function UserCard({ user }: { user: User }) {
  return (
    <div className="user-card">
      <div className="user-card__header">
        <div className="user-card__avatar">{initials(user.name)}</div>
        <div>
          <h3 className="user-card__name">{user.name}</h3>
          <span className="user-card__username">@{user.username}</span>
        </div>
      </div>
      <div className="user-card__body">
        <p className="user-card__row">
          <span className="user-card__label">Email</span>
          <span className="user-card__value">{user.email}</span>
        </p>
        <p className="user-card__row">
          <span className="user-card__label">Phone</span>
          <span className="user-card__value">{user.phone}</span>
        </p>
        <p className="user-card__row">
          <span className="user-card__label">City</span>
          <span className="user-card__value">{user.address.city}</span>
        </p>
      </div>
    </div>
  );
}
