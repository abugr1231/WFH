import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import Container from "./Container";

export default function Mission() {
  return (
    <Section id="mission">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mission, Vision & Story</h2>
            <p className="text-muted-foreground">
              <strong>Mission:</strong> Deliver urgent financial relief and strategic funding to accelerate better outcomes for people impacted by multiple myeloma.
            </p>
            <p className="text-muted-foreground">
              <strong>Vision:</strong> A world where those impacted have timely access to resources, care, and breakthroughs they need to thrive.
            </p>
            <p className="text-muted-foreground">
              In 2024, friends of Chris Seab—including founders Burke Moran, Robert Guba, and Mike Jastram—pedaled coast to coast to fight back. That act of solidarity sparked a registered nonprofit in 2025 and a growing movement powered by riders, donors, and volunteers.
            </p>
            <div className="flex gap-4">
              <a href="#stories" className="inline-flex items-center gap-2 font-medium hover:underline" data-testid="link-impact-stories">
                Read impact stories <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 font-medium hover:underline" data-testid="link-programs-mission">
                See our programs <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <Card className="border-dashed">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Core values</h3>
              <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" /> Integrity & empathy
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" /> Measurable impact
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" /> Stewardship of every dollar
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" /> Community first
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
