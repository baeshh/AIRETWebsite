import { useEffect, useRef, useState } from 'react';
import WorldMap from './WorldMap';
import { techCards } from '../content/tech';
import '../styles/tech-overview.css';

const TechOverviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Initialize floating particles
  const createParticles = () => {
    if (!particlesRef.current) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const particleCount = window.innerWidth < 768 ? 10 : 20;
    particlesRef.current.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particlesRef.current.appendChild(particle);
    }
  };

  useEffect(() => {
    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { 
        threshold: 0.3,
        rootMargin: '50px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`tech-overview-section ${isActive ? 'is-active' : ''}`}
      data-testid="tech-overview-section"
    >
      {/* Background Container */}
      <div className="tech-background-container" data-testid="tech-background">
        {/* Floating Particles */}
        <div 
          className="floating-particles" 
          ref={particlesRef}
          data-testid="floating-particles"
          aria-hidden="true"
        />
        
        {/* Large Glass Oval Background */}
        <div 
          className="glass-oval-background" 
          data-testid="glass-oval-background"
          aria-hidden="true"
        />
        
        {/* World Map */}
        <WorldMap />
      </div>

      {/* Content Container */}
      <div className="tech-content-container" data-testid="tech-content">
        <h2 className="tech-company-name" data-testid="tech-company-name">
          Airet Corp.
        </h2>
        
        <p className="tech-subtitle" data-testid="tech-subtitle">
          Technology Overview
        </p>
        
        {/* Tech Cards */}
        <div className="tech-cards-container" data-testid="tech-cards-container">
          {techCards.map((card, index) => (
            <div 
              key={card.title}
              className="tech-card" 
              data-testid={`tech-card-${index}`}
            >
              <h3 className="tech-card-title" data-testid={`tech-card-title-${index}`}>
                {card.title}
              </h3>
              <p className="tech-card-description" data-testid={`tech-card-description-${index}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechOverviewSection;