"use client";

import React from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/5511941321003?text=Olá,%20gostaria%20de%20agendar%20uma%20Avaliação%20Técnica%20de%2015%20minutos." 
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
