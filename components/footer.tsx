import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/club-logo.png"
                alt="Comillas PE&VC Club"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">
                Comillas PE&VC Club
              </span>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              Empowering the next generation of investment professionals through hands-on experience, industry connections, and comprehensive education.
            </p>
            <div className="flex items-center space-x-2 text-purple-200">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Universidad Pontificia Comillas, Madrid, Spain</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-purple-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/deal-analyst-program" className="block text-purple-200 hover:text-white transition-colors">
                Deal Analyst Program
              </Link>
              <Link href="/resources" className="block text-purple-200 hover:text-white transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/comillas-pe-vc-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/comillaspevcclub?igsh=ZzNrZW9rZjZid25l"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/HLazwxHRJiKKeSJCA5w662?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              {/* Email */}
              <a
                href="mailto:comillaspevcclub@comillas.edu"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center space-y-4">
          <p className="text-purple-200 text-sm">
            © 2025 Comillas Private Equity & Venture Capital Club. All rights reserved.
          </p>
          <div className="text-xs text-purple-300 max-w-5xl mx-auto space-y-3">
            <p>
              <strong>Independence Disclaimer:</strong> This club and all materials on this website have been developed as an independent educational initiative led by students. While developed within the academic environment of Universidad Pontificia Comillas, Madrid, the institution has not participated in the design, supervision or validation of the content. Responsibility of all materials lies solely with the student creators.
            </p>
            <p>
              <strong>Educational Use Only:</strong> All materials on this website have been developed using publicly available resources and institutional presentations for academic use. All content is used with educational intent and without commercial purposes. By using any material for educational purposes, Comillas Private Equity and Venture Capital Club does not by any means authorize the use of the content for any commercial purpose.
            </p>
            <p>
              <strong>Financial Disclaimer:</strong> Any material on this website is intended for educational purposes only. The information contained should not be construed as financial, legal or investment advice. No part of this content constitutes a recommendation to buy, sell, or hold any financial instrument or strategy. The creators disclaim responsibility for any decisions made by users based on website content.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 