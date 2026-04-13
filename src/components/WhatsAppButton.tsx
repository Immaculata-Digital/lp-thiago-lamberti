"use client";

import React from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/5511941321003?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20de%20terapia." 
            onClick={(e) => {
                const url = e.currentTarget.href;
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion(url);
                }
            }}
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-float group"
            aria-label="Contato via WhatsApp"
        >
            <div className="whatsapp-icon-wrapper">
                <Image 
                    src="/whatsapp.png" 
                    alt="WhatsApp" 
                    fill
                    className="object-contain invert brightness-200"
                    priority
                />
            </div>
        </a>
    );
}
