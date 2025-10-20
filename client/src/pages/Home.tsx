import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Mission from "@/components/Mission";
import Stories from "@/components/Stories";
import Programs from "@/components/Programs";
import FlagshipRide from "@/components/FlagshipRide";
import GetInvolved from "@/components/GetInvolved";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background text-foreground">
      <Header />
      <Hero />
      <ImpactStats />
      <Mission />
      <Stories />
      <Programs />
      <FlagshipRide />
      <GetInvolved />
      <Newsletter />
      <Footer />
    </div>
  );
}
