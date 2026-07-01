const ContactPage = () => {
  return (
    <div className="py-12 min-h-screen w-full flex items-center justify-center px-4 bg-white"> 
      <section className="w-full max-w-3xl rounded-2xl border border-black/5 bg-white p-8 md:p-12 shadow-2xl">
        
        <h1 className="text-4xl font-extrabold tracking-tight text-[#d9a72b] mb-6 sm:text-5xl">
          Connect With Us
        </h1>
        
        <p className="text-lg text-slate-800 mb-4 max-w-xl leading-relaxed">
          Follow us on social media for the latest updates, news, and community highlights.
        </p>
        
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://facebook.com" 
              className="flex items-center justify-center p-4 rounded-xl border border-[#2d2d2a] bg-transparent text-black font-medium tracking-wide transition-all duration-300 hover:border-[#f3f3ee] hover:bg-[#1a1a19] hover:text-[#f3f3ee] hover:shadow-[0_0_20px_rgba(243,243,238,0.15)] hover:text-[#DCA217] hover:bg-[black]"
            >
              Facebook
            </a>
          </li>

          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://twitter.com" 
              className="flex items-center justify-center p-4 rounded-xl border border-[#2d2d2a] bg-transparent text-black font-medium tracking-wide transition-all duration-300 hover:border-[#f3f3ee] hover:bg-[#1a1a19] hover:text-[#f3f3ee] hover:shadow-[0_0_20px_rgba(243,243,238,0.15)] hover:text-[#DCA217] hover:bg-[black]"
            >
              Twitter
            </a>
          </li>

          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://instagram.com" 
              className="flex items-center justify-center p-4 rounded-xl border border-[#2d2d2a] bg-transparent text-black font-medium tracking-wide transition-all duration-300 hover:border-[#f3f3ee] hover:bg-[#1a1a19] hover:text-[#f3f3ee] hover:shadow-[0_0_20px_rgba(243,243,238,0.15)] hover:text-[#DCA217] hover:bg-[black]"
            >
              Instagram
            </a>
          </li>

        </ul>

      </section>
    </div>
  );
};

export default ContactPage;