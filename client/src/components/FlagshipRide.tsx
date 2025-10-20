import { Bike, Users, HeartHandshake, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./Section";
import Container from "./Container";
import rideImage from "@assets/generated_images/Flagship_ride_hero_image_09ce4852.png";

export default function FlagshipRide() {
  return (
    <Section id="ride" className="bg-muted/30">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">St. George Flagship Ride</h2>
            <p className="mt-3 text-muted-foreground">
              A destination cycling weekend in St. George, Utah—family-friendly routes, peer-to-peer fundraising, and community celebration. Proceeds support St. George Regional Hospital and national patient aid and research.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#register" data-testid="button-register-ride">
                  <Bike className="mr-2 h-5 w-5" />
                  Register to ride
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#volunteer" data-testid="button-volunteer-ride">
                  <Users className="mr-2 h-5 w-5" />
                  Volunteer at the ride
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#sponsor" data-testid="button-sponsor">
                  <HeartHandshake className="mr-2 h-5 w-5" />
                  Become a sponsor
                </a>
              </Button>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> May 2025 (exact dates TBA)
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> St. George, Utah
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Riders • Volunteers • Sponsors • Families
              </li>
            </ul>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src={rideImage}
                  alt="St. George Flagship Ride scenic route"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>2027 ride revenue (goal)</span>
                  <span>$375,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Corporate sponsorships</span>
                  <span>$37,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Major donors & foundations</span>
                  <span>$362,500</span>
                </div>
              </div>
              <div className="mt-4">
                <a href="#prospectus" className="inline-flex items-center gap-2 font-medium hover:underline" data-testid="link-prospectus">
                  View prospectus (PDF) <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
