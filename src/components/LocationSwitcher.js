"use client";

import { getLocationList } from "@/utils/LocationInfo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [locations, setLocations] = useState([]);
  console.log(locations);
  useEffect(() => {
    const getLocationLists = async () => {
      const locationList = await getLocationList();
      setLocations(locationList);
    };
    getLocationLists();
  }, []);
  return (
    <div className="relative">
      <button onClick={() => setShowLocation(!showLocation)}>
        <Image
          className="size-9"
          src="/icons/link.svg"
          alt="rain icon"
          width={36}
          height={36}
        />
      </button>
      {showLocation && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations &&
              locations.length > 0 &&
              locations.map((info) => (
                <li key={info.location}>
                  <Link
                    href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                  >
                    {info.location}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
