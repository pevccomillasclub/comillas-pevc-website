import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, BookOpen, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/abstract-financial-network.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/club-logo.png"
                alt="Comillas PE&VC Club Logo"
                width={120}
                height={120}
                className="mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Comillas Private Equity &<br />
              <span className="text-yellow-400">Venture Capital Club</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Empowering the next generation of investment professionals through hands-on experience and industry connections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold">
                <Link href="/deal-analyst-program">
                  Join Our Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
                About Our Club
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Comillas PE&VC Club is a premier student organization dedicated to bridging the gap between academic finance theory and real-world private equity and venture capital practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  We strive to provide students with unparalleled access to the private equity and venture capital industry through practical experience, networking opportunities, and comprehensive educational programs.
                </p>
                <p className="text-gray-600">
                  Our members gain hands-on experience in deal analysis, due diligence, and investment evaluation while building lasting connections with industry professionals and alumni.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/imagen_mission.png"
                  alt="Professional business meeting"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-purple-900/20 rounded-lg"></div>
              </div>
            </div>

            {/* Key Activities */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">Deal Analysis</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive analysis of real investment opportunities and market trends
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">Networking</h4>
                  <p className="text-gray-600 text-sm">
                    Connect with industry professionals, alumni, and like-minded peers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">Education</h4>
                  <p className="text-gray-600 text-sm">
                    Workshops, seminars, and training sessions on PE/VC fundamentals
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">Recognition</h4>
                  <p className="text-gray-600 text-sm">
                    Certificates and recognition for outstanding performance and participation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join our exclusive Deal Analyst Program and gain the skills and connections needed to excel in private equity and venture capital.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold">
            <Link href="/deal-analyst-program">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
