import type { User } from "./types";

// jsonplaceholder's 10 users always come back with these usernames;
// use that as a stable key to swap every displayed field for Indian data.
const INDIAN_USERS: Record<
  string,
  { name: string; username: string; email: string; phone: string; city: string }
> = {
  Bret: { name: "Aarav Sharma", username: "aarav.sharma", email: "aarav.sharma@gmail.com", phone: "+91 98765 43210", city: "Mumbai" },
  Antonette: { name: "Priya Patel", username: "priya.patel", email: "priya.patel@gmail.com", phone: "+91 98765 43211", city: "Ahmedabad" },
  Samantha: { name: "Rohan Mehta", username: "rohan.mehta", email: "rohan.mehta@gmail.com", phone: "+91 98765 43212", city: "Pune" },
  Karianne: { name: "Ananya Iyer", username: "ananya.iyer", email: "ananya.iyer@gmail.com", phone: "+91 98765 43213", city: "Chennai" },
  Kamren: { name: "Vikram Nair", username: "vikram.nair", email: "vikram.nair@gmail.com", phone: "+91 98765 43214", city: "Kochi" },
  "Leopoldo_Corkery": { name: "Neha Gupta", username: "neha.gupta", email: "neha.gupta@gmail.com", phone: "+91 98765 43215", city: "Delhi" },
  "Elwyn.Skiles": { name: "Arjun Reddy", username: "arjun.reddy", email: "arjun.reddy@gmail.com", phone: "+91 98765 43216", city: "Hyderabad" },
  "Maxime_Nienow": { name: "Sneha Joshi", username: "sneha.joshi", email: "sneha.joshi@gmail.com", phone: "+91 98765 43217", city: "Indore" },
  Delphine: { name: "Karan Malhotra", username: "karan.malhotra", email: "karan.malhotra@gmail.com", phone: "+91 98765 43218", city: "Chandigarh" },
  "Moriah.Stanton": { name: "Divya Krishnan", username: "divya.krishnan", email: "divya.krishnan@gmail.com", phone: "+91 98765 43219", city: "Bengaluru" },
};

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status}`);
  }
  const users: User[] = await res.json();
  return users.map((user) => {
    const indian = INDIAN_USERS[user.username];
    if (!indian) return user;
    return {
      ...user,
      name: indian.name,
      username: indian.username,
      email: indian.email,
      phone: indian.phone,
      address: { ...user.address, city: indian.city },
    };
  });
}
