import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Waves from "@/components/waves";
import Hero from "@/components/hero";
import SectionSeparator from "@/components/sectionSeparator";
import WhyUs from "@/components/whyUs";

export default function Home() {
  return (
    <main className="">
      {/* Header Start here*/}
      <Navbar />

      {/* Hero Start here */}
      <div >
        <Hero/>
    
        {/* <Waves/>  */}

      </div>

              <SectionSeparator/>

      {/* Main Content Start here */}
      
      <WhyUs/>
      {/* Footer Content Start here */}
        <footer>
          <Footer/>
        </footer>
    </main>
  );
}
