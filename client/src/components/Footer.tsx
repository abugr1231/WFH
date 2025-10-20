import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wheeling for Healing • EIN: 501(c)(3)
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#privacy" className="hover:underline" data-testid="link-privacy">
            Privacy
          </a>
          <a href="#terms" className="hover:underline" data-testid="link-terms">
            Terms
          </a>
          <a href="#brand" className="hover:underline" data-testid="link-brand">
            Brand assets
          </a>
        </div>
      </Container>
    </footer>
  );
}
