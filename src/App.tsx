import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Nutrition from "./pages/Nutrition";
import Training from "./pages/Training";
import Programs from "./pages/Programs";
import PersonalTraining from "./pages/programs/PersonalTraining";
import GroupClasses from "./pages/programs/GroupClasses";
import NutritionPlans from "./pages/programs/NutritionPlans";
import OnlineCoaching from "./pages/programs/OnlineCoaching";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import LifestylePlanRegistration from "./pages/programs/registration/LifestylePlanRegistration";
import PerformancePlanRegistration from "./pages/programs/registration/PerformancePlanRegistration";
import TransformationPlanRegistration from "./pages/programs/registration/TransformationPlanRegistration";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/training" element={<Training />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/personal-training" element={<PersonalTraining />} />
            <Route path="/programs/group-classes" element={<GroupClasses />} />
            <Route path="/programs/nutrition-plans" element={<NutritionPlans />} />
            <Route path="/programs/online-coaching" element={<OnlineCoaching />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs/lifestyle-plan-registration" element={<LifestylePlanRegistration />} />
            <Route path="/programs/performance-plan-registration" element={<PerformancePlanRegistration />} />
            <Route path="/programs/transformation-plan-registration" element={<TransformationPlanRegistration />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;