const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
        <p className="font-medium text-[#333333] dark:text-white">
          Ready for the trip?
        </p>
      </div>
      <div className="size-12 rounded-full bg-[#FF7339] grid place-content-center">
        <span className="text-2xl font-medium text-white dark:text-black">
          C
        </span>
      </div>
    </div>
  );
};

export default Navbar;
