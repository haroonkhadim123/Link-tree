"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ListPage() {
  const router= useRouter();
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const res = await fetch('/api/generate',{cache: 'no-store'});
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
    const handleclick = async () => {
    try {
      const res = await fetch("/api/generate", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handle: items[0]?.handle, // 👈 unique user handle
        }),
      });

      if (!res.ok) throw new Error("Delete failed");

      // ✅ Remove data from frontend instantly
      setItems([]);

      
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-purple-300 relative">
      <span onClick={handleclick} className="text-blue-700 p-3 cursor-pointer flex items-centre justify-center border-0 rounded-2xl absolute left-6 top-6">  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>Back Home</span>
      {items.map((item, index) => (
        <div key={index} className="md:mt-6 mt-20 md:w-[30%] w-[90%] p-2 flex flex-col items-center gap-2">
          <Image width={100} height={100} className=" rounded-full" src={item.pic || 'default pic'} alt="" />
          <span className="text-center font-bold">{item.desc}</span>
        {item.links.map((link, i) => (
     <a href={link.link} className="bg-white p-2 text-black w-full" key={i}>{link.shorttext}</a> // ← this is where shorttext comes from
    ))}
        </div>
      ))}
    </div>
  );
}
