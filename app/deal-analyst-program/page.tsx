import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, Star, ArrowRight } from 'lucide-react'

export default function DealAnalystProgram() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/financial-charts-background.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-500 text-purple-900 mb-6 text-sm font-semibold px-4 py-2">
              FLAGSHIP PROGRAM
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Deal Analyst <span className="text-yellow-400">Program</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              An intensive 12-week program designed to transform ambitious students into skilled investment analysts
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
                  How It Works
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Deal Analyst Program provides hands-on experience in private equity and venture capital through real deal analysis, mentorship, and comprehensive training.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Real Deal Analysis</h4>
                      <p className="text-gray-600">Work on actual investment opportunities sourced from our industry partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Expert Mentorship</h4>
                      <p className="text-gray-600">One-on-one guidance from experienced PE/VC professionals and alumni</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Comprehensive Training</h4>
                      <p className="text-gray-600">Weekly workshops covering financial modeling, due diligence, and valuation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/financial-analysis-charts.png"
                  alt="Financial analysis and charts"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-purple-900/20 rounded-lg"></div>
              </div>
            </div>

            {/* Program Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">12-Week Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Intensive program with weekly sessions, workshops, and hands-on projects designed to maximize learning outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">Small Cohorts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Limited to <strong>5 participants per cohort</strong> to ensure personalized attention and meaningful peer interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process (Interview removed) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
                Application Process
              </h2>
              <p className="text-lg text-gray-600">
                Our selective application process ensures we admit the most motivated and qualified candidates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-purple-900 mb-2">Application</h4>
                <p className="text-gray-600 text-sm">Submit your application with CV, transcripts, and motivation letter</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold text-purple-900 mb-2">Assessment</h4>
                <p className="text-gray-600 text-sm">Complete our online financial modeling and case study assessment</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold text-purple-900 mb-2">Acceptance</h4>
                <p className="text-gray-600 text-sm">Receive your acceptance letter and program details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
                What Our Alumni Say
              </h2>
              <p className="text-lg text-gray-600">
                Hear from past participants who have gone on to successful careers in finance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The Deal Analyst Program gave me the practical skills and confidence I needed to land my dream job at a top-tier PE firm. The mentorship was invaluable."
                  </p>
                  <div>
                    <p className="font-semibold text-purple-900">María González</p>
                    <p className="text-sm text-gray-500">Associate at KKR</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Working on real deals and getting feedback from industry professionals was a game-changer. I felt prepared for every interview I had."
                  </p>
                  <div>
                    <p className="font-semibold text-purple-900">Carlos Rodríguez</p>
                    <p className="text-sm text-gray-500">Analyst at Goldman Sachs</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The network I built through the program has been instrumental in my career. I still regularly connect with my cohort and mentors."
                  </p>
                  <div>
                    <p className="font-semibold text-purple-900">Ana Martín</p>
                    <p className="text-sm text-gray-500">VP at Bain Capital</p>
                  </div>
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
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Applications for our next cohort are now open. Don't miss this opportunity to accelerate your finance career.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold">
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-purple-200 mt-4">
            Application deadline: To Be Announced
          </p>
        </div>
      </section>
    </div>
  )
}
