import type { User } from "../types";
import "./UserCard.css";

export function UserCard({ user }: { user: User }) {
  return (
    <div className="user-card">
      <h3 className="user-card__name">{user.name}</h3>
      <p className="user-card__row">
        <span className="user-card__label">Username:</span> {user.username}
      </p>
      <p className="user-card__row">
        <span className="user-card__label">Email:</span> {user.email}
      </p>
      <p className="user-card__row">
        <span className="user-card__label">Phone:</span> {user.phone}
      </p>
      <p className="user-card__row">
        <span className="user-card__label">City:</span> {user.address.city}
      </p>
    </div>
  );
}
