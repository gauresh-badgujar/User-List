import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserGrid } from "../UserGrid/UserGrid";
import "./UsersPage.css";

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
      <h1 className="users-page__title">Users</h1>

      <div className="users-page__controls">
        <SearchBar value={search} onChange={setSearch} />
        <button
          className="users-page__refetch-btn"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? "Refreshing..." : "Refetch Users"}
        </button>
      </div>

      {isLoading && <p className="users-page__status">Loading users...</p>}

      {isError && (
        <p className="users-page__status users-page__status--error">
          {error instanceof Error ? error.message : "Something went wrong."}
        </p>
      )}

      {!isLoading && !isError && <UserGrid users={filteredUsers} />}
    </div>
  );
}
