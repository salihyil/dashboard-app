"use client";

import TabItem from "@/components/tabs/tab-item";
import TabList from "@/components/tabs/tab-list";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <div className="mx-36">
        <Alert
          className={`mb-14 bg-[#78B6FF4D]/30 transition transform visible , 
          ${cn(isVisible ? "animate-slideIn" : "animate-slideOut")}`}>
          <AlertDescription className="flex justify-between">
            <div>
              Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.
              <Link className="underline ml-2" href={"/"}>
                Start Free Trial
              </Link>
            </div>
            <X className="cursor-pointer text-muted-foreground" onClick={handleClose} />
          </AlertDescription>
        </Alert>
        <h1 className="font-bold text-3xl mb-8">Proxies & Scraping Infrastructure</h1>
        <div className="App">
          <TabList activeTabIndex={1}>
            <TabItem label="My Proxies">
              <p>My Proxies</p>
            </TabItem>
            <TabItem label="Dashboard">
              <div className="flex">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
                <Card>4</Card>
              </div>
            </TabItem>
          </TabList>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
