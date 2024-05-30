import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value

  const res = await fetch("https://recruitment-api.vercel.app/get-info", {
    headers: {
      "Content-Type": "application/json",
      authorization: token ?? "",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
