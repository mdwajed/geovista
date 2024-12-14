import React from "react";
import Card from "./Card";
import Link from "next/link";

const NoLocationFound = ({ location }) => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center space-y-8 my-auto h-full">
        <h1 className="text-xl font-extrabold text-white">
          Don't find Location name {location}
        </h1>
        <Link href="/" className="bg-gray-800 hover:bg-gray-900 p-3 rounded-md">
          Go Bck Home
        </Link>
      </div>
    </Card>
  );
};

export default NoLocationFound;
