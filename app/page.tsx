import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Waves from "@/components/waves";
import Hero from "@/components/hero";
import SectionSeparator from "@/components/sectionSeparator";
import WhyUs from "@/components/whyUs";
import ProjectCards from "@/components/projectCards";
import ContactUS from '@/components/contactUs';

export default function Home() {
  return (
    <main className="">
      {/* Header Start here*/}
      <Navbar />

      {/* Hero Start here */}
      <div>
        <Hero />

        {/* <Waves/>  */}
      </div>


      {/* Main Content Start here */}


          <SectionSeparator
            rotation = {'rotate-180'}
          />
            <WhyUs />

          <SectionSeparator
              rotation = {'rotate-0'}
          />
          <ContactUS/>

          <SectionSeparator
              rotation = {'rotate-180'}
          />
          <ProjectCards />





      {/* Footer Content Start here */}
      <footer>
        <Footer />
      </footer>


    </main>
  );
}
