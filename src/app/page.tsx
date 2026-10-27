import React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/components/sections/Hero";
import CapabilityAnchors from "@/components/sections/CapabilityAnchors";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WorkflowExplorer from "@/components/sections/WorkflowExplorer";
import IndustrySelector from "@/components/sections/IndustrySelector";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CapabilityAnchors />
        <ProblemSolution />
        <WorkflowExplorer />
        <IndustrySelector />
      </main>
    </div>
  );
}
