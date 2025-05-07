import Footer from "./Footer";

interface UnderConstructionProps {
  pageName: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-3 dark:text-white">
          {pageName} Page
        </h1>
        <p className="text-xl dark:text-gray-300 text-center mb-6">
          Under Construction
        </p>
        <div className="w-full max-w-md h-4 bg-[#BFBFBF] dark:bg-gray-700 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-[#303DDF] dark:bg-[#D3F462] w-1/3"></div>
        </div>
        <p className="dark:text-gray-400 text-center">
          We&apos;re working hard to bring you an amazing experience.
          <br />
          Please check back soon!
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default UnderConstruction;
