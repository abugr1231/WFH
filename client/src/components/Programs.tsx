import { Target, ShieldCheck, Building2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import Container from "./Container";

const programs = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Patient Aid & Emergency Relief",
    body: "$500–$2,000 microgrants for travel, lodging, and uncovered costs.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Advancing Research",
    body: "High-impact projects at leading centers (e.g., UAMS Myeloma Cure Project).",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Treatment Infrastructure",
    body: "Grants for equipment, facility upgrades, and professional development.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Public Engagement",
    body: "Events, storytelling, and ambassadors to grow a supportive community.",
  },
];

const roadmapCards = [
  {
    title: "Our growth roadmap",
    content: (
      <ul className="mt-3 text-sm text-muted-foreground space-y-2">
        <li>Phase I (2025–2026): Build systems, launch patient aid, solidify fundraising.</li>
        <li>Phase II (2026–2027): Scale programs and pilot expansions.</li>
        <li>Phase III (2027–2028): Full integration with staffed ops and dashboards.</li>
      </ul>
    ),
  },
  {
    title: "2027 funding goal",
    content: (
      <p className="mt-2 text-sm text-muted-foreground">
        $775,000 annually with 80%+ to mission areas via P2P fundraising, corporate partners, major donors, and foundations.
      </p>
    ),
  },
  {
    title: "Transparency",
    content: (
      <p className="mt-2 text-sm text-muted-foreground">
        Annual reports, impact dashboards, and grantee highlights will be published here.
      </p>
    ),
  },
];

export default function Programs() {
  return (
    <Section id="programs">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What your support powers</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, idx) => (
            <Card key={idx} data-testid={`card-program-${idx}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  {p.icon}
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {roadmapCards.map((card, i) => (
            <Card key={i} data-testid={`card-roadmap-${i}`}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
