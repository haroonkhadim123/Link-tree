"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    if (!text.trim()) {
      toast.error("Handle cannot be empty");
      return;
    }

    router.push(`/form?handle=${text}`);
  };

  return (
    <>
   <div className="w-full flex items-center justify-center px-5 sm:px-10">
  <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 md:w-[100vw] lg:w-[80vw] md:px-10 w-[100vw] absolute md:top-0 top-50   md:p-3 mx-auto md:items-center gap-10 md:gap-20">
    
    {/* LEFT CONTENT */}
    <div className="flex flex-col  gap-5 md:gap-8 text-center md:text-left">
      <h1 className="text-[#d2e823] text-4xl sm:text-5xl md:text-5xl font-extrabold whitespace-nowrap ">
        A link in bio built
      </h1>
      <h1 className="text-[#d2e823] text-4xl sm:text-5xl md:text-5xl font-extrabold">
        for you.
      </h1>

      <p className="text-[#d2e823] font-bold mt-3 sm:mt-5 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
        Join 70M+ people using Linktree for their link in bio.
      </p>

      <div className="flex p-2 flex-col sm:flex-row gap-3 mt-5 justify-center md:justify-start">
        <input
          value={text || ""}
          onChange={(e) => setText(e.target.value)}
          className="bg-white text-black rounded-xl p-3 sm:p-4 flex-1 focus:outline-[#254f1a]"
          type="text"
          placeholder="Claim your handle"
        />

        <button
          onClick={createTree}
          className="p-3 sm:p-4 px-6 md:w-full text-white font-bold rounded-full whitespace-nowrap bg-[#d2e823] hover:bg-lime-400 transition"
        >
          Get started for free
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex items-center justify-center hidden md:block mt-10 md:mt-0">
      <img
        src="/home.png"
        alt="home"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md"
      />
    </div>

  </section>
</div>

    {/* FEATURES / BENEFITS SECTION */}
<section className="w-full py-20 px-5 md:px-20 bg-gray-100 flex flex-col items-center gap-12">
  <h2 className="text-4xl font-bold text-gray-900 mb-10">Why choose Bittree?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-center">

    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 items-center hover:scale-105 transition-transform">
      <h3 className="font-bold text-xl dark:text-black">⚡ Quick Setup</h3>
      <p className="text-gray-700 text-sm">
        Create your link tree in seconds and start sharing your content immediately.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 items-center hover:scale-105 transition-transform">
      <h3 className="font-bold text-xl dark:text-black">🎨 Fully Customizable</h3>
      <p className="text-gray-700 text-sm">
        Style your page with images, links, and descriptions that represent your personal brand.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 items-center hover:scale-105 transition-transform">
      <h3 className="font-bold text-xl dark:text-black">📊 Analytics</h3>
      <p className="text-gray-700 text-sm">
        Track clicks, visits, and engagement to understand your audience better.
      </p>
    </div>

  </div>
</section>
{/* TESTIMONIALS / SOCIAL PROOF SECTION */}
<section className="w-full py-20 px-5 md:px-20 bg-gray-50 flex flex-col items-center gap-12">
  <h2 className="text-4xl font-bold text-gray-900 mb-10">Loved by creators worldwide</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-center">

    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 items-center hover:shadow-xl transition-shadow">
      <p className="italic text-gray-700">"Bittree made sharing all my content so easy! My followers love it."</p>
      <span className="font-bold text-gray-900">Sarah K.</span>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 items-center hover:shadow-xl transition-shadow">
      <p className="italic text-gray-700">"I can track my clicks and engagement all in one place!"</p>
      <span className="font-bold text-gray-900">James L.</span>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 items-center hover:shadow-xl transition-shadow">
      <p className="italic text-gray-700">"Beautiful design and super easy to use. Highly recommend!"</p>
      <span className="font-bold text-gray-900">Mia R.</span>
    </div>

  </div>
</section>
{/* CALL TO ACTION SECTION */}
<section className="w-full py-20 px-5 md:px-20 bg-[#d2e823] flex flex-col items-center gap-6">
  <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
    Start your Bittree today
  </h2>
  <p className="max-w-xl text-center font-medium text-black">
    Join thousands of creators sharing everything in one place. Claim your unique handle and get started in seconds!
  </p>

  <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-2xl">
    <input
      value={text || ""}
      onChange={(e) => setText(e.target.value)}
      className="p-4 dark:text-black rounded-xl flex-1 focus:outline-black"
      type="text"
      placeholder="Claim your handle"
    />
    <button
      onClick={createTree}
      className="px-10 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition"
    >
      Get Started
    </button>
  </div>
</section>

    </>
  );
}
