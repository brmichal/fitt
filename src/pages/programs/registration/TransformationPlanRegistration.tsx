import { HealthProfileForm } from "@/components/forms/HealthProfileForm";
import Navbar from "@/components/Navbar";

const TransformationPlanRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Transformation Plan Registration</h1>
          <HealthProfileForm planType="transformation-plan" />
        </div>
      </div>
    </div>
  );
};

export default TransformationPlanRegistration;