"use client";

import Sidebar from "@/components/sidebar";
import { getCookie } from "cookies-next";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentToken = async () => {
      try {
        setLoading(true);
        const data = getCookie("token");

        if (data) {
          setToken(data);
        }
      } catch (e) {
        // Handle error
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentToken();
  }, []);

  const obj = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  if (loading && !token) return <div>Loading...</div>;

  return (
    <AppContext.Provider value={obj}>
      <main className="flex items-start justify-start w-full relative">
        {token && <Sidebar />}
        <div className="w-full h-full p-6">{children}</div>
      </main>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
