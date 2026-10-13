import { aboutContent, personalInfo } from '../data/portfolioData';

const profilePhoto = '/images/picfor-portfolio.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Clean Upright Portrait Frame */}
        <div className="flex flex-col items-center w-full md:w-[380px] lg:w-[410px] shrink-0">
          <div
            data-aos="fade-up"
            className="bg-[#141418] w-full rounded-2xl p-3.5 shadow-[0_24px_50px_rgba(0,0,0,0.38)] border border-white/15 relative z-20"
          >
            {/* Upright Portrait Container */}
            <div className="w-full aspect-[4/3.4] overflow-hidden rounded-xl bg-[#1c1c22]">
              <img 
                src={profilePhoto} 
                alt={`${personalInfo.name} — ${personalInfo.title}`} 
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>

            {/* Clean Caption Footer */}
            <div className="pt-3.5 pb-1 px-1 flex items-center justify-between gap-3 text-white">
              <div>
                <p className="text-base font-extrabold tracking-tight leading-snug">{personalInfo.name}</p>
                <p className="text-xs font-medium text-white/75">{personalInfo.title}</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#ff2a2a]/20 text-[#ff8a7a] border border-[#ff2a2a]/40 shrink-0">
                B.E. AI &amp; ML • 8.4 CGPA
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="150" className="flex-1 text-white relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-5">{aboutContent.heading}</h2>
          <p 
            className="text-base md:text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Core Tech Stack Pills */}
          {aboutContent.techStack && aboutContent.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {aboutContent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold bg-black/85 text-white border border-white/15 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
