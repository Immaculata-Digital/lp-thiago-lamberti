import React from 'react';

export default function CTA() {
    return (
        <section className="pt-8 pb-24 bg-white">
            <div className="container flex flex-col items-center text-center">
                <h2 className="serif text-4xl md:text-5xl mb-8">Pronto para o próximo passo?</h2>
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
                    className="btn btn-primary px-12 py-5 text-lg"
                >
                    AGENDAR CONSULTA
                </a>
            </div>
        </section>
    );
}
