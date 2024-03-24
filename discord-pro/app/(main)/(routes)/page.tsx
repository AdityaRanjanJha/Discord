
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import test from "node:test";

export default function Home() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl="/"
      />
      <ModeToggle/>
    </div>
  );
}
