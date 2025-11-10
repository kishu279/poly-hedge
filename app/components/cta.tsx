import React from "react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 px-6 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-lg text-blue-100 mb-8">
          Join leading enterprises using prediction markets for better
          decisions.
        </p>

        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
