import { cookies } from "next/headers";
import { Transaction } from "./columns";

export async function getTableData(): Promise<Transaction[]> {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch("https://recruitment-api.vercel.app/get-table", {
    headers: {
      "Content-Type": "application/json",
      authorization: token || "",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  return data;
}
