import Image from 'next/image'
import Link from 'next/link'
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

const address = "Av. Nhandú, 848. Planalto Paulista - SP"
const googleMapsLink = "https://maps.app.goo.gl/Mb9tt6DZw6nqsUKM7"

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="/">
            <Image
              src={`/logo.png`}
              className="h-12 w-auto text-slate-900"
              alt=""
              height={48}
              width={168}
            />
          </Link>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-green-600/10 py-4 font-mono text-sm text-green-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <a
            href={googleMapsLink}
            target="_blank"
            className="mx-auto flex items-center gap-4 px-4 cursor-pointer"
          >
            <address>{ address }</address>
          </a>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {/* <Button>Events</Button> */}
        </div>
      </Container>
    </header>
  )
}
