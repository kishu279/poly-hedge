import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20 px-6 bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-neutral-100 mb-2">
              Get Started Today
            </h2>
            <p className="text-neutral-400 text-lg">
              Ready to transform your decision-making?
            </p>
          </div>

          {/* Right Section - Contact Links */}
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100"
            >
              Contact Sales
            </Button>

            {/* Social & Contact Links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@polyhedge.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>

              <a
                href="https://linkedin.com/company/polyhedge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://x.com/polyhedge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm">X</span>
              </a>

              <a
                href="https://github.com/polyhedge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
