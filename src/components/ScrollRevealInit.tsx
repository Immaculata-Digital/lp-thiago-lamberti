"use client";

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.08, // Trigger when 8% of the element is visible
      rootMargin: '0px 0px -40px 0px', // Trigger slightly before it fully rolls into view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
