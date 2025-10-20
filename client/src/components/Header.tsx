import { Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" data-testid="link-home">
          <div className="grid h-9 w-9 place-content-center rounded-xl border">
            <Bike className="h-5 w-5" />
          </div>
          <div className="text-lg font-bold tracking-tight">Wheeling for Healing</div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#mission" className="hover:underline" data-testid="link-mission">Mission</a>
          <a href="#impact" className="hover:underline" data-testid="link-impact">Impact</a>
          <a href="#stories" className="hover:underline" data-testid="link-stories">Stories</a>
          <a href="#programs" className="hover:underline" data-testid="link-programs">Programs</a>
          <a href="#ride" className="hover:underline" data-testid="link-ride">Flagship Ride</a>
          <a href="#get-involved" className="hover:underline" data-testid="link-get-involved">Get Involved</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
            <a href="#newsletter" data-testid="button-newsletter">Newsletter</a>
          </Button>
          <Button asChild size="sm" className="shadow">
            <a href="#donate" data-testid="button-donate">Donate</a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
