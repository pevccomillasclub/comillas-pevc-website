import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, ArrowRight } from 'lucide-react'

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

      {/* Application Process */}
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

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Open Call</h4>
                  <p className="text-gray-600">Every September and January, we open the application window for around 10 weeks. Stay tuned to our social media and official channels to not miss the deadline.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Create & Apply</h4>
                  <p className="text-gray-600">Applicants submit a short report analyzing a deal related to private markets. Use our template or get creative – it's up to you.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Assessment</h4>
                  <p className="text-gray-600">We are not looking for perfection. We value motivation, creativity and genuine interest over technical expertise. There will be time to build that expertise once you're in the program.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Join</h4>
                  <p className="text-gray-600">Selected applicants are placed into teams and assigned a mentor. From that moment on, the program begins.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 text-purple-900 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Repeat</h4>
                  <p className="text-gray-600">Once you have been part of the program, you are always welcome to repeat in future semesters without reapplying. We believe in long-term growth and love when people stick around and keep building with us. Over time, returning analysts may take on new responsibilities – including mentoring future cohorts.</p>
                </div>
              </div>
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