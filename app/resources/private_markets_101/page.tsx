// app/resources/private-markets-101/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText } from "lucide-react"

type Doc = {
  order: string
  title: string
  desc: string
  href: string
}

const docs: Doc[] = [
  {
    order: "0.1",
    title: "Course Intro",
    desc:
      "How to use this course: objectives, structure, progress tracking, and recommended study flow.",
    href: "/pdfs/0.1. Course Intro.pdf",
  },
  {
    order: "1",
    title: "Private Markets",
    desc:
      "Overview of private markets: asset classes, capital formation, risk/return, and the role in diversified portfolios.",
    href: "/pdfs/1 Private Markets.pdf",
  },
  {
    order: "2.1",
    title: "Private Equity",
    desc:
      "PE landscape and value creation: sourcing, underwriting, operational levers, and exit pathways.",
    href: "/pdfs/2.1. Private Equity.pdf",
  },
  {
    order: "2.2",
    title: "Fund Structure & Investment Lifecycle",
    desc:
      "GP–LP structure, fees & carry, governance, cash flows, and the end‑to‑end investment lifecycle.",
    href: "/pdfs/2.2. Fund Structure & Investment Lifecycle.pdf",
  },
  {
    order: "2.3",
    title: "PE Strategies",
    desc:
      "Buyout, growth, turnaround, secondaries & co‑investments—targets, value creation, and key risks.",
    href: "/pdfs/2.3. PE Strategies.pdf",
  },
  {
    order: "2.4",
    title: "Understanding Legal in PE",
    desc:
      "Core legal docs and concepts: LPA, SPA/SHA, governance provisions, reps & warranties, closing mechanics.",
    href: "/pdfs/2.4. Understanding Legal in PE.pdf",
  },
  {
    order: "2.5",
    title: "Sustainability in PE",
    desc:
      "ESG integration in diligence and ownership, regulatory drivers, reporting frameworks, and value creation.",
    href: "/pdfs/2.5. Sustainability In PE.pdf",
  },
  {
    order: "2.6",
    title: "LBO Model",
    desc:
      "LBO fundamentals: capital structure, sources & uses, value drivers, MOIC/IRR and a starter modeling workflow.",
    href: "/pdfs/2.6. LBO Model.pdf",
  },
  {
    order: "3",
    title: "Venture Capital",
    desc:
      "VC economics and process: stages, term sheets, cap tables & dilution, portfolio construction, exits.",
    href: "/pdfs/3 Venture Capital.pdf",
  },
  {
    order: "4",
    title: "Private Credit",
    desc:
      "Instrument types (senior, unitranche, mezz), covenants, underwriting, risk management, and return profile.",
    href: "/pdfs/4 Private Credit.pdf",
  },
  {
    order: "5",
    title: "Infrastructure & Real Estate",
    desc:
      "Core/core+/value‑add strategies, project finance basics, revenue models, risk allocation, performance metrics.",
    href: "/pdfs/5 Infra and Real Estate.pdf",
  },
];

export default function PrivateMarkets101Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <Link
              href="/resources"
              className="inline-flex items-center text-purple-200 hover:text-white mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
            <h1 className="text-4xl font-bold">Private Markets 101</h1>
            <p className="mt-3 text-purple-100">
              Structured syllabus covering PE, VC, Private Credit & Infrastructure. Download each module below.
            </p>
            <div className="mt-4">
              <Badge className="bg-purple-100 text-purple-800">Foundational Course</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {docs.map((d) => (
              <Card key={d.order} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-yellow-500" />
                    <CardTitle className="text-purple-900">
                      {d.order}. {d.title}
                    </CardTitle>
                  </div>
                  <Badge className="mt-2 bg-gray-100 text-gray-800">PDF</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{d.desc}</p>
                  <Button asChild className="bg-purple-900 hover:bg-purple-800 w-full">
                    <a href={d.href} target="_blank" rel="noopener noreferrer" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}