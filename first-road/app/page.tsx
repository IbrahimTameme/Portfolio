import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Waves from "@/components/waves";
import Hero from "@/components/hero";
import SectionSeparator from "@/components/sectionSeparator";
import WhyUs from "@/components/whyUs";
import ProjectCards from "@/components/projectCards";

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

              <SectionSeparator
               rotation = {180}
                 />

      {/* Main Content Start here */}
      <div className="bg-body h-[100%] w-full">
        <div className="w-full">
          <h1 className="text-3xl text-center">
            <WhyUs />
            Main Content
          </h1>
          
          <ProjectCards />

        </div>
      </div>
      {/* Footer Content Start here */}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
