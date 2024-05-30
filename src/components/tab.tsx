"use client";

import TabItem from "@/components/tabs/tab-item";
import TabList from "@/components/tabs/tab-list";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { formatDate, numberWithDots } from "@/lib/utils";
import { Info } from "@/types/Info";
import { useEffect, useState } from "react";

type Props = {};

const Tab = (props: Props) => {
  const [info, setInfo] = useState<Info>({
    expireTime: "",
    lastChargeAmount: "",
    lastCharge: "",
    totalDataUsage: 0,
    dailyUsage: 0,
  });

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch("/api/getInfo");
      const { data } = await response.json();

      setInfo(data);
    };
    getInfo();
  }, []);

  return (
    <TabList activeTabIndex={1}>
      <TabItem label="My Proxies">
        <p>My Proxies</p>
      </TabItem>
      <TabItem label="Dashboard">
        <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1400px]:grid-cols-4 gap-4">
          <Card className="bg-[#E3F5FF]">
            <CardHeader>
              <CardDescription className="font-semibold text-black text-sm">Subscription expires on</CardDescription>
            </CardHeader>
            <CardContent className="text-2xl">{formatDate(info.expireTime)} </CardContent>
          </Card>

          <Card className="bg-[#E5ECF6]">
            <CardHeader>
              <CardDescription className="font-semibold text-black text-sm">Last charge</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-2xl">{info.lastChargeAmount}</span> {info.lastCharge}
            </CardContent>
          </Card>

          <Card className="bg-[#E3F5FF]">
            <CardHeader>
              <CardDescription className="font-bold text-black">Total Usage Data</CardDescription>
            </CardHeader>
            <CardContent className="font-bold text-2xl">{numberWithDots(info.totalDataUsage)} GB</CardContent>
          </Card>

          <Card className="bg-[#E5ECF6]">
            <CardHeader>
              <CardDescription className="font-bold text-black">Daily Usage Data</CardDescription>
            </CardHeader>
            <CardContent className="font-bold text-2xl">{numberWithDots(info.dailyUsage)} GB</CardContent>
          </Card>
        </div>
      </TabItem>
    </TabList>
  );
};

export default Tab;
