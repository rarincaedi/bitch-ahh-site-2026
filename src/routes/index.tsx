import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Restaurant } from "@/components/site/Restaurant";
import { EventHall } from "@/components/site/EventHall";
import { Rooms } from "@/components/site/Rooms";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Restaurant />
        <EventHall />
        <Rooms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
