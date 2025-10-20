import { motion } from "framer-motion";
import { Sparkles, HandCoins, Users, Bike, Target, ShieldCheck, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import Container from "./Container";
import Pill from "./Pill";
import heroImage from "@assets/generated_images/Flagship_ride_hero_image_09ce4852.png";

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute left-1/2 top-[-10%] -translate-x-1/2 h-[800px] w-[1400px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Pill>
              <Sparkles className="h-4 w-4" />
              501(c)(3) • Founded 2025 • Multiple Myeloma
            </Pill>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Every mile powers hope. Every dollar fuels healing.
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              Born from a 3,100-mile ride for a friend, Wheeling for Healing (WFH) delivers urgent aid to patients and strategic funding for research and treatment infrastructure—so no one faces multiple myeloma alone.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow">
                <a href="#donate" data-testid="button-donate-hero">
                  <HandCoins className="mr-2 h-5 w-5" />
                  Donate now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#get-involved" data-testid="button-volunteer">
                  <Users className="mr-2 h-5 w-5" />
                  Volunteer
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#ride" data-testid="button-join-ride">
                  <Bike className="mr-2 h-5 w-5" />
                  Join the Flagship Ride
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-muted-foreground">
              <Pill><Target className="h-4 w-4" /> Patient Aid</Pill>
              <Pill><ShieldCheck className="h-4 w-4" /> Research</Pill>
              <Pill><Building2 className="h-4 w-4" /> Treatment Centers</Pill>
              <Pill><Users className="h-4 w-4" /> Community</Pill>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-1 overflow-hidden">
              <img
                src={heroImage}
                alt="Cyclists riding on scenic desert route in St. George, Utah"
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-8">
                <div className="text-center w-full">
                  <p className="text-xl font-semibold">St. George Flagship Ride • May 2025</p>
                  <p className="text-muted-foreground">Scenic routes, community energy, and cause-driven fundraising.</p>
                  <div className="mt-4">
                    <a href="#ride" className="inline-flex items-center gap-2 font-medium hover:underline" data-testid="link-explore-ride">
                      Explore the ride <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
