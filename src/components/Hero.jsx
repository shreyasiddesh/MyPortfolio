import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const heroVideo = '/videos/videofor-port.mp4';
const heroPosterDesktop = '/images/shreya-hero-desktop.jpg';
const heroPosterMobile = '/images/shreya-hero-mobile.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const stopAndRestoreHero = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsPlaying(false);
    setIsVideoActive(false);
  };

  useEffect(() => {
    if (!isVideoActive) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        stopAndRestoreHero();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoActive]);

  const toggleVideo = async (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.muted = false;
      setIsVideoActive(true);
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#9c1614]">
      {/* Background Talking-Head Video Layer (z-0) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#9c1614]">
        <video
          ref={videoRef}
          src={heroVideo}
          muted={false}
          playsInline
          preload="metadata"
          poster={heroPosterDesktop}
          aria-label="Shreya H S Talking-Head Portfolio Reel"
          className="absolute top-0 left-0 w-full h-[64%] sm:h-[68%] lg:h-full lg:left-[12%] lg:w-[88%] object-cover object-[66%_16%] sm:object-[72%_20%] lg:object-[78%_center]"
          onPlay={() => {
            setIsPlaying(true);
            setIsVideoActive(true);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
          onEnded={() => {
            setIsPlaying(false);
            setIsVideoActive(false);
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
            }
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the HTML5 video tag.
        </video>

        {/* Video studio-red blending & lower-left laptop de-clutter overlay during playback */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            isVideoActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop & Tablet left-edge studio red blend + lower-left dark-crimson readability gradient over laptop corner */}
          <div className="hidden sm:block lg:hidden absolute inset-0 bg-[linear-gradient(90deg,#9c1614_0%,rgba(156,22,20,0.85)_7%,rgba(156,22,20,0)_18%)]" />
          <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(90deg,#9c1614_0%,#9c1614_13%,rgba(156,22,20,0.82)_24%,rgba(156,22,20,0.28)_38%,rgba(156,22,20,0)_50%)]" />
          <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(ellipse_52%_58%_at_18%_82%,rgba(18,3,4,0.82)_0%,rgba(68,9,10,0.62)_52%,rgba(156,22,20,0)_100%)]" />
          {/* Mobile & Tablet vertical transition from upper talking-head video into lower text backdrop */}
          <div className="lg:hidden absolute inset-0 bg-[linear-gradient(180deg,rgba(156,22,20,0)_0%,rgba(156,22,20,0)_44%,rgba(52,6,7,0.88)_62%,#1c0304_100%)]" />
        </div>
      </div>

      {/* Full-Bleed Actual Photograph Hero Composition Layer (Visible before playback and restored after playback ends or closes) */}
      <picture
        className={`absolute inset-0 w-full h-full z-[5] pointer-events-none transition-opacity duration-500 ${
          isVideoActive ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <source media="(min-width: 1024px)" srcSet={heroPosterDesktop} />
        <img
          src={heroPosterMobile}
          alt="Shreya H S — AI/ML & GenAI Developer"
          className="w-full h-full object-cover object-top lg:object-center"
        />
      </picture>

      {/* Subtle readability gradient overlay for resting Hero photograph */}
      <div
        className={`absolute inset-0 z-[8] pointer-events-none transition-opacity duration-500 ${
          isVideoActive ? 'opacity-0' : 'opacity-100'
        } bg-gradient-to-t from-black/75 via-black/25 to-transparent lg:bg-[radial-gradient(circle_at_18%_75%,rgba(20,4,4,0.58)_0%,rgba(20,4,4,0.22)_42%,transparent_70%)]`}
      />

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/75 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/75 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={socialLinks.instagram || `mailto:${personalInfo.emails.primary}`} 
          target={socialLinks.instagram ? "_blank" : undefined} 
          rel={socialLinks.instagram ? "noopener noreferrer" : undefined} 
          className="text-white/75 hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125"
          aria-label={socialLinks.instagram ? "Instagram" : "Email"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Hero Foreground Content Container (z-20 — Remains Visible Above Video) */}
      <div className="absolute inset-0 z-20 px-6 pb-7 sm:pb-10 lg:pb-[7%] md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-end lg:justify-between items-start lg:items-end text-left w-full">
        
        {/* Left Side: Identity, Role, Supporting Text, and Action Buttons */}
        <div className="flex flex-col items-start text-left max-w-xl w-full">
          {/* Mobile / Tablet inline socials */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-4 mb-2 lg:hidden"
          >
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="text-white/85 hover:text-white"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>

          {/* Main Heading: Name & Role with High-Contrast Readability */}
          <h1 
            data-aos="fade-up"
            className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-2.5 sm:mb-3 tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          >
            {heroContent.greeting},
            <span className="block mt-1.5 text-xl sm:text-3xl lg:text-4xl font-black text-white bg-black/45 border border-white/25 backdrop-blur-sm px-3.5 py-1 rounded-xl w-fit shadow-lg">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Concise Supporting Text */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/95 text-xs sm:text-base lg:text-lg font-medium mb-4 sm:mb-7 max-w-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
          >
            {heroContent.subtitle}
          </p>

          {/* Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm md:text-base rounded-full bg-black/55 border border-white/80 text-white font-semibold hover:bg-black/80 transition-all duration-300 backdrop-blur-md shadow-md"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download Button */}
            <a 
              href={heroContent.ctaResume.href}
              download
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base rounded-full bg-black/35 border border-white/55 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Circular Play Reel / Pause Toggle Control */}
        <div className="mt-3.5 sm:mt-5 lg:mt-0 lg:mr-6 flex flex-row items-center gap-3 self-start lg:self-end">
          <div 
            data-aos="zoom-in"
            data-aos-delay="600"
            role="button"
            tabIndex={0}
            aria-label={isPlaying ? "Pause Hero Reel" : "Play Hero Reel"}
            aria-pressed={isPlaying}
            className="flex flex-row lg:flex-col items-center gap-2.5 lg:gap-3 cursor-pointer group"
            onClick={toggleVideo}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleVideo(e);
              }
            }}
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full border border-white/40 bg-black/45 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.45)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
              {!isPlaying ? (
                <svg className="w-5 h-5 lg:w-8 lg:h-8 text-white ml-0.5 lg:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-[10px] lg:text-xs font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow">
              {!isPlaying ? "Play Reel" : "Pause"}
            </span>
          </div>

          {/* Subtle Close / Stop Button when Reel is Active (Restores Normal Hero Immediately) */}
          {isVideoActive && (
            <button
              type="button"
              onClick={stopAndRestoreHero}
              aria-label="Close reel and restore Hero"
              title="Stop reel and restore Hero"
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-white/35 bg-black/55 hover:bg-[#ff2a2a] text-white/85 hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md lg:mb-6"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
