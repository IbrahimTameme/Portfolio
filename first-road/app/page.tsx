import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Waves  from "@/components/waves"
import Hero from "@/components/hero";
export default function Home() {
  return (

    <main className="">
      {/* Header Start here*/}
      <header>
        <Navbar/>
      </header>
       
      {/* Hero Start here */}
      <div >
        <Hero/>
    
        <Waves/> 

      </div>
      {/* Main Content Start here */}
          <div className="bg-primary h-[100%] w-full">
            <div className="h-[600px] w-full">
              <h1 className="text-3xl text-center">Main Content </h1>
            </div>
          

          </div>


      {/* Footer Content Start here */}
        <footer>
          <Footer/>
        </footer>


    </main>
  );
}
