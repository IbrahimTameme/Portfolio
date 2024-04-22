import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Waves  from "@/components/waves"
import Hero from "@/components/hero";

export default function Home() {
  return (

    <main className="h-full">
      {/* Header Start here*/}
      <header>
        <Navbar/>
      </header>

      {/* Hero Start here */}
      <div>
        <Hero/>
        <Waves/> 

      </div>

      {/* Main Content Start here */}
          <div>
          Main Content 

          </div>


      {/* Footer Content Start here */}
        <footer>
          <Footer/>
        </footer>


    </main>
  );
}
