"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Alert, AlertDescription } from "./ui/alert";

type Props = {};

const AlertInfo = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
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
  );
};

export default AlertInfo;
