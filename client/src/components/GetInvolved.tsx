import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import Container from "./Container";

const options = [
  {
    title: "Donate",
    body: "Fuel microgrants, research, and treatment center upgrades.",
    href: "#donate",
    cta: "Give now",
  },
  {
    title: "Volunteer",
    body: "Join event crews, logistics, rider support, or grant review.",
    href: "#volunteer",
    cta: "Sign up",
  },
  {
    title: "Partner",
    body: "Sponsor the ride, match gifts, or co-host community events.",
    href: "#sponsor",
    cta: "Start a partnership",
  },
  {
    title: "Ride",
    body: "Register solo or with a team and fundraise mile by mile.",
    href: "#register",
    cta: "Register",
  },
];

export default function GetInvolved() {
  return (
    <Section id="get-involved">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get involved</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {options.map((option, i) => (
            <Card key={i} data-testid={`card-involved-${i}`}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{option.body}</p>
                <div className="mt-3">
                  <a href={option.href} className="inline-flex items-center gap-2 font-medium hover:underline" data-testid={`link-${option.title.toLowerCase()}`}>
                    {option.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
