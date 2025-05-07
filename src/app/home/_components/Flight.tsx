import Image from "next/image";

const Flight = () => {
  return (
    <div className="h-32 bg-[#3643FB] rounded-2xl mt-7 p-3 relative overflow-hidden text-white">
      <div className="bg-[#313DDF] rounded-2xl h-full w-full flex flex-col justify-between p-1">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h4 className="font-semibold">Flight Details</h4>
            <p className="text-sm">26.01.2025, 10:50 am</p>
          </div>
          <span className="text-[#D1F462] border-b border-[#D1F462] text-xs font-medium">
            See all
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-semibold">DEL</span>
            <span className="text-xs">Delhi, India</span>
          </div>
          <div>
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.372 6.47003C18.5148 6.61066 18.5951 6.80128 18.5951 7.00003C18.5951 7.19878 18.5148 7.38941 18.372 7.53003L12.2682 13.53C12.1984 13.6037 12.1141 13.6628 12.0205 13.7038C11.927 13.7448 11.8259 13.7668 11.7235 13.7686C11.621 13.7704 11.5193 13.7519 11.4243 13.7142C11.3293 13.6764 11.243 13.6203 11.1705 13.5491C11.0981 13.4779 11.041 13.393 11.0026 13.2996C10.9642 13.2062 10.9454 13.1062 10.9472 13.0055C10.949 12.9048 10.9714 12.8055 11.0131 12.7135C11.0548 12.6215 11.1149 12.5387 11.1899 12.47L15.9915 7.75003H1.55614C1.35379 7.75003 1.15972 7.67101 1.01664 7.53036C0.873554 7.38971 0.793171 7.19894 0.793171 7.00003C0.793171 6.80112 0.873554 6.61035 1.01664 6.4697C1.15972 6.32905 1.35379 6.25003 1.55614 6.25003H15.9915L11.1899 1.53003C11.1149 1.46137 11.0548 1.37857 11.0131 1.28657C10.9714 1.19457 10.949 1.09526 10.9472 0.994554C10.9454 0.893851 10.9642 0.793822 11.0026 0.700434C11.041 0.607045 11.0981 0.522212 11.1705 0.450993C11.243 0.379774 11.3293 0.32363 11.4243 0.285909C11.5193 0.248188 11.621 0.229663 11.7235 0.23144C11.8259 0.233217 11.927 0.255258 12.0205 0.29625C12.1141 0.337242 12.1984 0.396344 12.2682 0.470031L18.372 6.47003Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">NRT</span>
            <span className="text-xs">Narita, Tokyo</span>
          </div>
        </div>
      </div>

      <Image
        src="/plane.png"
        height={1000}
        width={1000}
        alt="Plane"
        className="absolute -top-8 -right-36 -scale-x-100 -rotate-6"
      />
    </div>
  );
};

export default Flight;
