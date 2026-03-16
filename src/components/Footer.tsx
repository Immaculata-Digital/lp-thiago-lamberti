import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer bg-[#F9FDFD] py-12 border-t border-gray-100">
            <div className="container text-center">
                <div className="crp text-gray-500 text-sm">
                    <p>SURSUM ANIMA TECNOLOGIA E DESENVOLVIMENTO HUMANO LTDA - CNPJ 63.490.655/0001-05 | © {new Date().getFullYear()} Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
