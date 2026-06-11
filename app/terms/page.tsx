import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/#home" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to SiteBano
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 10, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Services</h2>
            <p className="mt-2">SiteBano provides website design, development, maintenance and related digital services. Final scope, delivery time and price are confirmed before work begins.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Payments and revisions</h2>
            <p className="mt-2">Payment schedules and included revisions follow the selected package or written project agreement. Additional work may require a separate quote.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Client content</h2>
            <p className="mt-2">Clients are responsible for providing accurate business information and content they have permission to use, including images, logos and written material.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2">Questions about these terms can be sent to ayush.ag2308@gmail.com.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
