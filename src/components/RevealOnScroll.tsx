"use client";
import React, { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        }, { threshold: 0.15 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <div ref={ref} className="reveal">{children}</div>;
}
