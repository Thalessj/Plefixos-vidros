import Banner from "@/components/dashboard/Banner/page";
import CardsLayout from "@/components/dashboard/Cards/page";
import FAQSection from "@/components/dashboard/FAQ/page";
import WorksLayout from "@/components/dashboard/Works/page";
import Footer from "@/components/dashboard/Footer";
import MapImage from "@/components/dashboard/Map/page";

export default function Home() {
  return (
    <>
      <Banner />
      <CardsLayout />
      <WorksLayout />
      <MapImage />
      <FAQSection />
      <Footer />
    </>
  );
}
