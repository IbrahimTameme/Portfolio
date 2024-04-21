import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (

    <main className="h-full">
      {/* Header Start here*/}
      <header>
        <Navbar/>
      </header>

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
