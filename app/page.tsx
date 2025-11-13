"use client";

import dynamic from "next/dynamic";

const CapsuleThing = dynamic(() => import("./components/Capsule"), {
  ssr: false,
});

export default function Home() {
  return (
  <div>
    <CapsuleThing />
  </div>
  );
}
