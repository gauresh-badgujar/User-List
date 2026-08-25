import type { User } from "../types";
import { UserCard } from "../UserCard/UserCard";
import "./UserGrid.css";

export function UserGrid({ users }: { users: User[] }) {
  if (users.length === 0) {
    return <p className="user-list__empty">No users match your search.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
