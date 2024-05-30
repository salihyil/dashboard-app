"use client";

import Sidebar from "@/components/sidebar";
import { getCookie } from "cookies-next";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const data = getCookie("token");

        if (data) {
          setUser(data);
        }
      } catch (e) {
        // Handle error
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const obj = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  if (loading && !user) return <div>Loading...</div>;

  return (
    <AppContext.Provider value={obj}>
      <main className="flex items-start justify-start w-full relative">
        {user && <Sidebar />}
        <div className="w-full h-full p-6">{children}</div>
      </main>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
