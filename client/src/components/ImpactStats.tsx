import Section from "./Section";
import Container from "./Container";
import Stat from "./Stat";

export default function ImpactStats() {
  return (
    <Section id="impact" className="bg-muted/30">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <Stat kpi="$110k+" label="Raised on inaugural ride" />
          <Stat kpi="3" label="Hospitals supported" />
          <Stat kpi="40+" label="Patients helped with urgent aid" />
          <Stat kpi="3,100" label="Miles ridden for hope" />
        </div>
      </Container>
    </Section>
  );
}
