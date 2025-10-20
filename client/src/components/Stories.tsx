import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import Container from "./Container";
import patientAidImage from "@assets/generated_images/Patient_aid_story_image_ceef3908.png";
import researchImage from "@assets/generated_images/Research_advancement_image_b8099132.png";
import communityImage from "@assets/generated_images/Community_engagement_image_e139f3f6.png";

const stories = [
  {
    image: patientAidImage,
    title: "Patient Aid Microgrant",
    quote: "We could travel for a clinical consult without choosing between rent and care.",
  },
  {
    image: researchImage,
    title: "Research Advancement",
    quote: "Your support is bringing us closer to breakthrough treatments for multiple myeloma.",
  },
  {
    image: communityImage,
    title: "Community Support",
    quote: "The volunteer network helped us navigate treatment and feel supported every step.",
  },
];

export default function Stories() {
  return (
    <Section id="stories" className="bg-muted/30">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Real lives changed</h2>
        <p className="mt-3 text-muted-foreground max-w-prose">
          From immediate aid for underinsured families to support for breakthrough research, your gifts turn into outcomes that matter. Here are a few snapshots of our impact.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stories.map((story, i) => (
            <Card key={i} data-testid={`card-story-${i}`}>
              <CardContent className="p-6">
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{story.title}</h3>
                <p className="text-sm text-muted-foreground">"{story.quote}"</p>
                <div className="mt-3 text-sm">
                  <a href="#donate" className="inline-flex items-center gap-2 font-medium hover:underline" data-testid={`link-fund-aid-${i}`}>
                    Fund more aid <ArrowRight className="h-4 w-4" />
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
