import React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/components/sections/Hero";
import CapabilityAnchors from "@/components/sections/CapabilityAnchors";
import IndustrySolutions from "@/components/sections/IndustrySelector";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WorkflowExplorer from "@/components/sections/WorkflowExplorer";
import FeatureOverview from "@/components/sections/FeatureOverview";
import OwnerDashboard from "@/components/sections/OwnerDashboard";
import CustomerStorySection from "@/components/sections/CustomerStory";
import SetupSteps from "@/components/sections/SetupSteps";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import DemoSection from "@/components/sections/DemoSection";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileActionBar from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Customer proof / Capability anchors */}
        <CapabilityAnchors />
        {/* 3. Industry Solutions (Step 1 placement: right after hero & proof, before workflow demonstration) */}
        <IndustrySolutions />
        {/* 4. Problem & Answers */}
        <ProblemSolution />
        {/* 5. Product Workflow in Action */}
        <WorkflowExplorer />
        {/* 6. 10 Core Features Overview */}
        <FeatureOverview />
        {/* 7. Owner Attention Dashboard */}
        <OwnerDashboard />
        {/* 8. Customer Reviews & Video Stories (Step 2 placement: after owner dashboard, before setup & pricing) */}
        <CustomerStorySection />
        {/* 9. Setup Journey Steps */}
        <SetupSteps />
        {/* 10. Pricing & Module Comparison */}
        <Pricing />
        {/* 11. FAQ Accordion */}
        <FAQ />
        {/* 12. Final Call-to-Action with Demo Form */}
        <DemoSection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
