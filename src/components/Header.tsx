"use client";
import Link from "next/link";
const Header = () => {
  const navigation = [
    {
      _id: 1,
      title: "Home",
      href: "/",
    },
    {
      _id: 2,
      title: "Phone",
      href: "/phone",
    },
    {
      _id: 3,
      title: "Phone Case",
      href: "/phonecase",
    },
    {
      _id: 4,
      title: "Accessories",
      href: "/accessories",
    },
    {
      _id: 5,
      title: "Watches",
      href: "/watches",
    },
  ];
  return (
    <div className="w-full h-20 bg-gray-950 text-gray-200 sticky top-0 z-20">
      <ol className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-8">
        {navigation.map((item) => (
          <Link key={item._id} href={item.href}>
            <li className="font-semibold hover:text-yellow-200 duration-200">
              {item.title}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default Header;
