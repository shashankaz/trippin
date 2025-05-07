import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Flight from "./_components/Flight";
import Accomodation from "./_components/Accomodation";
import Activities from "./_components/Activities";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="dark:bg-black dark:text-[#F5F5F5] min-h-screen px-4 py-8">
      <Navbar />
      <Header />
      <Flight />
      <Accomodation />
      <Activities />
      <Footer />
    </div>
  );
};

export default Home;
