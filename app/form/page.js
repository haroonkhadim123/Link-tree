"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [pic, setpic] = useState("");
  const [links, setlink] = useState([{ link: "", shorttext: "" }]);
  const [desc, setdesc] = useState("");

  const addlink = () => {
    setlink([...links, { link: "", shorttext: "" }]);
  };

  const handlesubmit = async (e) => {
    e.preventDefault(); // prevent default form submit
    if (handle === "" || pic === "" || desc === "" || links.length === 0) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ handle, links, pic, desc }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Bittree created successfully");
        router.push(`/list`);
      } else {
        toast.error(result.message || "Something went wrong");
      }

      sethandle("");
      setpic("");
      setdesc("");
      setlink([{ link: "", shorttext: "" }]);
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="min-h-screen w-screen bg-[#E9C0E9] absolute top-0 flex flex-col-reverse md:flex-row items-center justify-center py-10 md:py-0 px-5 md:px-20 gap-10 md:gap-20">
      {/* FORM SECTION */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <form onSubmit={handlesubmit} className="w-full flex flex-col gap-5">
          <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl">
            Create your Bittree
          </h1>

          {/* Step 1 */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-900 font-bold">Step 1: Claim your Handle</p>
            <input
              className="bg-white rounded-full p-2 w-full dark:text-black"
              type="text"
              value={handle}
              placeholder="Claim your handle"
              onChange={(e) => sethandle(e.target.value)}
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-900">Step 2: Add Links</h1>
            {links.map((item, index) => (
              <div className="flex md:flex-row flex-col gap-2" key={index}>
                <input
                  className="bg-white rounded-full p-2 flex-1 dark:text-black"
                  type="text"
                  value={item.link}
                  placeholder="Enter your link"
                  onChange={(e) => {
                    const updatedLinks = [...links];
                    updatedLinks[index] = { ...updatedLinks[index], link: e.target.value };
                    setlink(updatedLinks);
                  }}
                />
                <input
                  className="bg-white rounded-full p-2 flex-1 dark:text-black"
                  type="text"
                  value={item.shorttext}
                  placeholder="Enter your shorttext"
                  onChange={(e) => {
                    const updatedLinks = [...links];
                    updatedLinks[index] = { ...updatedLinks[index], shorttext: e.target.value };
                    setlink(updatedLinks);
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addlink}
              className="text-white bg-black p-2 rounded-full px-4 w-max mt-2"
            >
              + Add links
            </button>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 font-bold">Step 3: Add Picture and Finalize</h1>
            <input
              className="bg-white rounded-full p-2 w-full dark:text-black"
              type="text"
              placeholder="Enter your picture link"
              value={pic}
              onChange={(e) => setpic(e.target.value)}
            />
            <input
              className="bg-white rounded-full p-2 w-full dark:text-black"
              type="text"
              placeholder="Enter your Description"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-black p-2 rounded-full px-4 mt-2 w-max"
            >
              Create your Bittree
            </button>
          </div>
        </form>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
  src="/generate.png"
  alt="Generate"
  width={400}      // example width
  height={300}     // example height
  className="w-full max-w-sm md:max-w-md"
/>
      </div>
    </section>
  );
};

export default Page;
