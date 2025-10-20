import { useState } from "react";
import { Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Section from "./Section";
import Container from "./Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive updates about our impact and upcoming events.",
    });
    setEmail("");
  };

  return (
    <Section id="newsletter" className="bg-muted/30">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Stay in the loop</h2>
            <p className="mt-3 text-muted-foreground">
              Get ride updates, impact stories, and ways to help. No spam—just meaningful moments.
            </p>
            <form className="mt-6 grid gap-3 max-w-md" onSubmit={handleSubmit}>
              <Input
                placeholder="Email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-email-newsletter"
              />
              <Button type="submit" className="w-full" data-testid="button-subscribe">
                Subscribe
              </Button>
              <p className="text-xs text-muted-foreground">
                By subscribing you agree to receive email updates from WFH.
              </p>
            </form>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:burke.moran@ribandchophouse.com" className="hover:underline" data-testid="link-email">
                    burke.moran@ribandchophouse.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+14064519192" className="hover:underline" data-testid="link-phone">
                    406-451-9192
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <a href="https://wheelingforhealing.com" className="hover:underline" data-testid="link-website">
                    wheelingforhealing.com
                  </a>
                </li>
              </ul>
              <div className="mt-4 text-sm">
                <a href="#prospectus" className="inline-flex items-center gap-2 font-medium hover:underline" data-testid="link-strategic-plan">
                  Download strategic plan <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
