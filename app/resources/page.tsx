import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ClipboardList, FileText, Layers, Sparkles, ExternalLink } from 'lucide-react'
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/library-books-knowledge-education.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Learning <span className="text-yellow-400">Resources</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Explore our curated library of educational materials, proprietary research, and industry insights to deepen your expertise in private markets.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-6">
                Educational Materials
              </h2>
              <p className="text-lg text-gray-600">
                Curated resources to help you master Private Equity, Venture Capital, Private Credit, and Infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Private Markets 101 */}
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">Private Markets 101 – Foundational Course</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800 w-fit">Updated Weekly</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Multi-module curriculum covering the fundamentals of Private Equity, Venture Capital, Private Credit, and Infrastructure, designed for aspiring investment professionals.
                  </p>
                  <Button asChild className="w-full bg-purple-900 hover:bg-purple-800">
                    <Link href="/resources/private_markets_101">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Course
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Analyst Insights */}
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">Analyst Insights – Internal Case Library</CardTitle>
                  <Badge className="bg-green-100 text-green-800 w-fit">By Our Analysts</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Deal analyses, valuation models, and sector reports prepared by our analyst team, offering real-world insights into live transactions and market trends.
                  </p>
                  <Button asChild className="w-full bg-purple-900 hover:bg-purple-800">
                    <a 
                      href="https://upcomillas-my.sharepoint.com/:f:/g/personal/comillaspevcclub_comillas_edu/EmT6t12LOKNBjA-ZywgMS1sBCtq-mC0S9QSoAC2L2maWmg?e=tywVli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Library
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Industry Intelligence */}
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">Industry Intelligence – Global Reports</CardTitle>
                  <Badge className="bg-orange-100 text-orange-800 w-fit">External Resources</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Access top-tier reports from Bain, McKinsey, Preqin, PitchBook, and more, covering fundraising, deal flow, and performance benchmarks in private markets.
                  </p>
                  <Button asChild className="w-full bg-purple-900 hover:bg-purple-800">
                    <a 
                      href="https://upcomillas-my.sharepoint.com/:f:/g/personal/comillaspevcclub_comillas_edu/ElZ91TEs3X5GvOBAKtQ8TeQBSQKy0OBCQqdIrVq5a386PQ?e=IsCKDO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Reports
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Specialized External Resources */}
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Layers className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">Specialized External Resources</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 w-fit">Mixed Formats</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Playbooks, due diligence templates, and additional learning materials from leading industry sources, expanding your professional toolkit.
                  </p>
                  <Button asChild className="w-full bg-purple-900 hover:bg-purple-800">
                    <a 
                      href="https://upcomillas-my.sharepoint.com/:f:/g/personal/comillaspevcclub_comillas_edu/EsK8yYgEUodIn-Qy4-r8RIABX8nVwdxqDAkQsSkgxTiVhg?e=DAjPE7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Collection
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Coming Soon */}
              <Card className="border-dashed border-purple-300 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-purple-50">
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-yellow-500 mb-2" />
                  <CardTitle className="text-purple-900">Coming Soon – Advanced Learning Tools</CardTitle>
                  <Badge className="bg-gray-100 text-gray-800 w-fit">In Development</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    An interactive LBO Guide, Private Markets interview prep pack, and expanded sector-specific case studies — launching soon.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}