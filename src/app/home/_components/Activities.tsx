"use client";

import { useState } from "react";
import Image from "next/image";
import { allActivities } from "../_data/allActivities";
import { dates } from "../_data/dates";

interface Activity {
  id: number;
  name: string;
  timing: string;
  duration: string;
  pickUp: string;
  background: string;
}

type DateId = keyof typeof allActivities;

const Activities = () => {
  const [selectedDateId, setSelectedDateId] = useState<DateId>("jan-27");
  const [selectedMonth, setSelectedMonth] = useState("JAN");
  const [selectedDate, setSelectedDate] = useState(27);

  const activitiesAvailable: Activity[] = allActivities[selectedDateId] || [];

  const calculateDayNumber = () => {
    const allDatesFlat = dates.flatMap((month) =>
      month.dates.map((d) => ({ ...d, month: month.month }))
    );

    const currentIndex = allDatesFlat.findIndex((d) => d.id === selectedDateId);

    return currentIndex + 1;
  };

  const dayNumber = calculateDayNumber();

  const handleDateClick = (dateId: string, month: string, date: number) => {
    setSelectedDateId(dateId as DateId);
    setSelectedMonth(month);
    setSelectedDate(date);
  };

  return (
    <div className="mt-7 space-y-4 mb-16">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Activities</h3>
        <span className="text-[#3643FB] dark:text-[#D1F462] border-b border-[#3643FB] dark:border-[#D1F462] text-xs font-semibold">
          See all
        </span>
      </div>
      <div className="dark:bg-[#333333] border dark:border-0 border-[#BFBFBF] rounded-xl h-28 px-2 py-3 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <button className="bg-[#313DDF] dark:bg-[#D3F462] text-white dark:text-[#333333] rounded-lg p-1 text-xs font-semibold border border-[#D3F462]">
            Day Plan
          </button>
          <button className="rounded-lg p-1 text-xs font-semibold border border-[#313DDF] dark:border-[#D3F462] text-[#313DDF] dark:text-[#D3F462]">
            14 Activities
          </button>
        </div>
        <div
          className="flex items-center gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {dates.map((date, index) => (
            <div key={index} className="rounded-lg flex items-center gap-2">
              {date.dates.map((d, i) => (
                <div
                  key={i}
                  onClick={() => handleDateClick(d.id, date.month, d.date)}
                  className={`bg-[#E5E5E5] dark:bg-[#292929] rounded-lg overflow-hidden 
                  ${
                    selectedDateId === d.id
                      ? "border-2 border-[#313DDF] dark:border-[#D3F462]"
                      : "border border-[#E5E5E5] dark:border-[#292929]"
                  } 
                  w-fit p-2 flex items-center relative cursor-pointer hover:opacity-80`}
                >
                  {i === 0 && (
                    <span
                      className={`text-xs font-semibold -rotate-90 ${
                        selectedDateId === d.id
                          ? "bg-[#313DDF] dark:bg-[#D3F462]"
                          : "bg-[#808080]"
                      }  text-white dark:text-[#0B0809] absolute -left-3.5 px-3 py-1`}
                    >
                      {date.month}
                    </span>
                  )}
                  <div
                    className={`flex flex-col items-center ${
                      i === 0 ? "w-14 pl-5" : "w-10"
                    }`}
                  >
                    <span className="text-xs font-semibold">{d.day}</span>
                    <span className="text-xs font-semibold">{d.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-xs font-semibold bg-[#3643FB] dark:bg-[#D1F462] text-white dark:text-[#0B0809] rounded-lg p-1">
          Day {dayNumber} {selectedDate}.{selectedMonth === "JAN" ? "01" : "02"}
          .2025
        </button>
        <button className="text-xs font-semibold text-[#3643FB] dark:text-[#D1F462] rounded-lg p-1 flex items-center gap-1">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.2187 0.75C3.81308 0.751613 3.42454 0.913458 3.13772 1.20027C2.85091 1.48709 2.68906 1.87563 2.68745 2.28125C2.68745 3.12212 3.37782 3.8125 4.2187 3.8125C5.05957 3.8125 5.74995 3.12212 5.74995 2.28125C5.74995 1.44037 5.05957 0.75 4.2187 0.75ZM4.2187 1.625C4.5862 1.625 4.87495 1.91375 4.87495 2.28125C4.87495 2.64875 4.5862 2.9375 4.2187 2.9375C3.8512 2.9375 3.56245 2.64875 3.56245 2.28125C3.56245 1.91375 3.8512 1.625 4.2187 1.625ZM1.85357 3.59375C1.73952 3.58619 1.62498 3.59074 1.51189 3.60731C1.27426 3.64772 1.05202 3.75173 0.868761 3.90831C0.486386 4.23294 0.264136 4.74919 0.103136 5.50781C0.0523862 5.75238 0.0676988 6.00525 0.185386 6.20519C0.303511 6.40513 0.488136 6.52631 0.650449 6.60156C0.976824 6.75206 1.2962 6.78094 1.47076 6.82031L1.67595 5.97244C1.41257 5.91294 1.1422 5.86481 1.0197 5.80881C0.958011 5.7795 0.949699 5.76244 0.951011 5.76769C0.944477 5.74066 0.944477 5.71246 0.951011 5.68544C1.09101 5.02262 1.29445 4.70281 1.4432 4.57812C1.59195 4.45344 1.71489 4.43288 1.99007 4.49588L2.1817 3.63487C2.07374 3.61156 1.96394 3.5978 1.85357 3.59375ZM2.6192 3.73069L1.97651 6.65625C1.90476 6.98438 2.03995 7.34006 2.30464 7.54481L3.84945 8.74794L4.23226 11.25H5.12126L4.71089 8.61144C4.67756 8.38929 4.56008 8.18847 4.38276 8.05056L2.83795 6.84744L3.28901 4.81044L3.74007 4.93338L4.51926 5.68587C4.77257 5.93 5.15364 5.98775 5.47651 5.8495L6.18745 5.54938V11.25H7.06245V3.8125H6.18745V4.60569L5.13482 5.05631L4.3552 4.30469C4.24836 4.20029 4.11657 4.12498 3.97239 4.08594L2.6192 3.73069ZM2.04476 8.02344L1.67551 9.13075L0.582199 11.25H1.56657L2.45557 9.54113C2.47745 9.49825 2.4967 9.44881 2.51026 9.40419L2.7837 8.59787L2.04476 8.02344Z"
              fill="currentColor"
              className="dark:fill-[#D3F462] fill-[#313DDF]"
            />
          </svg>
          {activitiesAvailable.length} Activities
        </button>
      </div>
      <div className="dark:border dark:border-[#D3F462] rounded-lg p-2 space-y-3">
        {activitiesAvailable.length > 0 ? (
          activitiesAvailable.map((activity) => (
            <div
              key={activity.id}
              className="h-32 dark:bg-[#4D4D4D] rounded-lg overflow-hidden flex gap-2 border border-[#BFBFBF] dark:border-[#4D4D4D]"
            >
              <div className="w-2/5">
                <Image
                  src={activity.background}
                  alt="Activity"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-3/5 flex flex-col justify-evenly">
                <h5 className="text-sm font-semibold">{activity.name}</h5>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold">
                    Timing:{" "}
                    <span className="font-normal">{activity.timing}</span>
                  </h6>
                  <h6 className="text-xs font-semibold">
                    Duration:{" "}
                    <span className="font-normal">{activity.duration}</span>
                  </h6>
                  <h6 className="text-xs font-semibold">
                    Pick up:{" "}
                    <span className="font-normal">{activity.pickUp}</span>
                  </h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-32 text-gray-400">
            No activities available for this date
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;
