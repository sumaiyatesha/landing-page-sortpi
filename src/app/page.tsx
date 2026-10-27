import React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/components/sections/Hero";
import CapabilityAnchors from "@/components/sections/CapabilityAnchors";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WorkflowExplorer from "@/components/sections/WorkflowExplorer";
import IndustrySelector from "@/components/sections/IndustrySelector";
import FeatureOverview from "@/components/sections/FeatureOverview";
import OwnerDashboard from "@/components/sections/OwnerDashboard";
import SetupSteps from "@/components/sections/SetupSteps";
import Pricing from "@/components/sections/Pricing";
import CustomerStorySection from "@/components/sections/CustomerStory";
import FAQ from "@/components/sections/FAQ";
import DemoSection from "@/components/sections/DemoSection";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileActionBar from "@/components/layout/MobileActionBar";

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
        <FeatureOverview />
        <OwnerDashboard />
        <SetupSteps />
        <Pricing />
        <CustomerStorySection />
        <FAQ />
        <DemoSection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
