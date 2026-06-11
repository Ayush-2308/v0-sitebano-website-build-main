import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/#home" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to SiteBano
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 10, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <p className="mt-2">When you submit an inquiry, SiteBano may collect your name, business details, phone number, email address, budget and project requirements.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">How information is used</h2>
            <p className="mt-2">We use submitted information only to respond to inquiries, prepare project recommendations and provide requested services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Data sharing</h2>
            <p className="mt-2">SiteBano does not sell personal information. Information is shared only with service providers when required to operate the website or deliver an agreed project.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2">For privacy questions or data requests, email ayush.ag2308@gmail.com.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
