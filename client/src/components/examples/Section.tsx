import Section from '../Section';

export default function SectionExample() {
  return (
    <Section id="example" className="bg-muted/30">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Section Example</h2>
        <p className="text-muted-foreground">This is a reusable section wrapper</p>
      </div>
    </Section>
  );
}
