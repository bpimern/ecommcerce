import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gapy-2">
      <p className="text-xl font-semibold">404 Not Found</p>
      <p>Your pages in invalid</p>
      <Link
        href={"/"}
        className="border bg-gray-950 text-gray-200 hover:text-white duration-200 py-2 px-4 rounded-md mt-2"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
