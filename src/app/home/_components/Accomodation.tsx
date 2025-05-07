import Image from "next/image";
import { CircleCheck, RotateCcw } from "lucide-react";

const data = [
  {
    id: 1,
    name: "Shinagawa Prince Hotel",
    checkIn: "26.01.2025, 11:15 pm",
    checkOut: "28.01.2025, 11:15 am",
    time: "2 Nights",
    status: true,
    rating: "4.0 Very Good",
    background: "/hotels/1.jpg",
  },
  {
    id: 2,
    name: "Grand Hyatt Tokyo",
    checkIn: "03.02.2025, 2:00 pm",
    checkOut: "07.02.2025, 12:00 pm",
    time: "4 Nights",
    status: true,
    rating: "4.8 Excellent",
    background: "/hotels/2.jpg",
  },
  {
    id: 3,
    name: "Park Hotel Tokyo",
    checkIn: "15.03.2025, 3:00 pm",
    checkOut: "18.03.2025, 10:00 am",
    time: "3 Nights",
    status: false,
    rating: "4.2 Very Good",
    background: "/hotels/3.jpg",
  },
  {
    id: 4,
    name: "The Peninsula Tokyo",
    checkIn: "22.04.2025, 1:30 pm",
    checkOut: "25.04.2025, 11:00 am",
    time: "3 Nights",
    status: true,
    rating: "4.9 Exceptional",
    background: "/hotels/4.jpg",
  },
];

const Accomodation = () => {
  return (
    <div className="mt-7">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium">Accomodation</h3>
        <span className="text-[#3643FB] dark:text-[#D1F462] border-b border-[#3643FB] dark:border-[#D1F462] text-xs font-semibold">
          See all
        </span>
      </div>
      <div
        className="flex items-center overflow-x-auto gap-4"
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Accomodation;

interface CardProps {
  data: {
    id: number;
    name: string;
    checkIn: string;
    checkOut: string;
    time: string;
    status: boolean;
    rating: string;
    background: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="h-60 min-w-48 rounded-2xl overflow-hidden dark:bg-[#4D4D4D] border dark:border-0 border-[#BFBFBF]">
      <div className="h-1/2 bg-green-200 relative">
        <span className="bg-[#3643FB] text-[#F5F5F5] rounded py-0.5 px-1 text-[8px] flex items-center gap-1 font-semibold absolute bottom-2 left-2 z-10">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.71676 8.55402L2.4551 5.39047L0.00012207 3.26358L3.23393 2.98372L4.50042 0L5.76691 2.98313L9.00012 3.26298L6.54514 5.38988L7.28408 8.55342L4.50042 6.8743L1.71676 8.55402Z"
              fill="white"
            />
          </svg>
          {data.rating}
        </span>
        <Image
          src={data.background}
          height={1000}
          width={1000}
          alt="hotel"
          className="object-cover h-full w-full"
        />
        <div className="h-full w-full absolute inset-0 bg-black/10"></div>
      </div>
      <div className="h-1/2 px-2 py-3 space-y-1">
        <h4 className="text-sm font-semibold line-clamp-1">{data.name}</h4>
        <h4 className="text-xs font-semibold line-clamp-1">
          Check in: <span className="font-normal">{data.checkIn}</span>
        </h4>
        <h4 className="text-xs font-semibold line-clamp-1">
          Check out: <span className="font-normal">{data.checkOut}</span>
        </h4>
        <div className="flex items-center justify-between pt-3">
          <h4 className="text-xs font-semibold">{data.time}</h4>
          {data.status ? (
            <h4 className="text-xs font-semibold text-[#90EB61] flex items-center gap-1">
              <CircleCheck className="size-4" />
              Confirmed
            </h4>
          ) : (
            <h4 className="text-xs font-semibold text-[#FF3D00] flex items-center gap-1">
              <RotateCcw className="size-4" />
              Pending
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};
