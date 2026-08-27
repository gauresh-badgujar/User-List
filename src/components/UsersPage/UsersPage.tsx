import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserGrid } from "../UserGrid/UserGrid";
import "./UsersPage.css";

const SKELETON_ROWS = Array.from({ length: 5 });

export function UsersPage() {
  const [search, setSearch] = useState("");

  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <div className="users-page">
      <header className="app-header">
        <div className="app-header__brand">
          <span className="app-header__logo" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <div>
            <span className="app-header__title">User Directory</span>
            <span className="app-header__subtitle">Manage and explore your team</span>
          </div>
        </div>
        {users && <span className="app-header__count">{users.length} Users</span>}
      </header>

      <div className="users-page__toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <button
          className="users-page__refetch-btn"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={isFetching ? "spin" : undefined}
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 1 1-2.64-6.36" />
            <path d="M21 3v6h-6" />
          </svg>
          {isFetching ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      {isLoading && (
        <ul className="skeleton-list" aria-label="Loading users" role="status">
          {SKELETON_ROWS.map((_, i) => (
            <li className="skeleton-row" key={i}>
              <span className="skeleton skeleton--avatar" />
              <span className="skeleton skeleton--text" style={{ width: "40%" }} />
              <span className="skeleton skeleton--text" style={{ width: "60%" }} />
              <span className="skeleton skeleton--text" style={{ width: "50%" }} />
            </li>
          ))}
        </ul>
      )}

      {isError && (
        <div className="state-panel" role="alert">
          <p className="state-panel__title">Unable to load users</p>
          <p className="state-panel__desc">
            {error instanceof Error ? error.message : "Something went wrong while fetching the user directory."}
          </p>
          <button className="state-panel__action" onClick={() => refetch()}>
            Try Again
          </button>
        </div>
      )}

      {!isLoading && !isError && (
        <UserGrid users={filteredUsers} hasQuery={search.trim().length > 0} />
      )}
    </div>
  );
}
