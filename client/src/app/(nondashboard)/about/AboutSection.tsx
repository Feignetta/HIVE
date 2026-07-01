const AboutPage = () => {
  return (
    <div className="py-16 min-h-screen w-full flex items-center justify-center px-4 bg-white">
      <section className="w-full max-w-3xl rounded-2xl border border-black/5 bg-white p-8 md:p-12 shadow-2xl">

        <h1 className="text-4xl font-extrabold tracking-tight text-[#d9a72b] mb-6 sm:text-5xl">
          About Hive
        </h1>
        <p className="text-lg text-slate-800 mb-4 max-w-xl leading-relaxed">
          Welcome to <span className="text-[#d9a72b] font-semibold">Hive</span>—the ultimate platform designed to simplify the housing search for students and streamline property management for landlords across the country.
        </p>
        <p className="text-base text-slate-600 mb-12 max-w-xl leading-relaxed">
          Finding the perfect boarding house, room, or apartment during your academic journey shouldn't be a source of stress. We built Hive to eliminate the hassle of student housing by creating a transparent, connected marketplace.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-[#d9a72b] mb-4 sm:text-3xl">
          What We Do
        </h2>

        <ul className="list-disc pl-5 space-y-4 mb-12 marker:text-[#d9a72b]"> 
          <li className="text-base text-slate-600 max-w-xl leading-relaxed">
            <strong className="text-slate-900 font-semibold">For Students:</strong> We take the guesswork out of house hunting. Hive lets you easily search, compare prices, and track available accommodations nationwide, helping you find the best living spaces that fit your student budget.
          </li>
          <li className="text-base text-slate-600 max-w-xl leading-relaxed">
            <strong className="text-slate-900 font-semibold">For Landlords & Managers:</strong> We provide a dedicated space to list your properties, manage listings, and connect directly with verified student tenants looking for a place to call home.
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-[#d9a72b] mb-4 sm:text-3xl">
          Our Mission
        </h2>
        <p className="text-base text-slate-600 max-w-xl leading-relaxed">
          To bridge the gap between students and property managers through seamless connection, transparent pricing, and a hassle-free rental process. With Hive, finding your next home or managing your rental establishment is just a few clicks away.
        </p>

      </section>
    </div>
  );
};

export default AboutPage;