import type { User } from "../types";
import { UserCard } from "../UserCard/UserCard";
import "./UserGrid.css";

export function UserGrid({ users, hasQuery }: { users: User[]; hasQuery: boolean }) {
  if (users.length === 0) {
    return (
      <div className="state-panel">
        <p className="state-panel__title">
          {hasQuery ? "No users found" : "No users available"}
        </p>
        <p className="state-panel__desc">
          {hasQuery
            ? "Try searching with a different name."
            : "There are currently no users to display."}
        </p>
      </div>
    );
  }

  return (
    <div className="directory">
      <div className="directory__head" aria-hidden="true">
        <span />
        <span>Name</span>
        <span>Email</span>
        <span>Phone</span>
        <span>City</span>
      </div>
      <ul className="directory__list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
