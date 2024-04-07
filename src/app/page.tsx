"use client"
import { useEffect, useState } from "react";
import { Event } from "./api/calendar/route";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([])

  async function fetchEvents () {
    const res = await fetch('/api/calendar', {
      headers: {
        Accept: 'application/json',
        method: 'GET'
      }
    })

    const data = await res.json() as { events: Event[] }
    setEvents(data.events)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className="flex w-full flex-col justify-center">
      <Header />
      <main className="flex-auto">
        <div className="relative py-20 sm:pb-24 sm:pt-36">
          {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
          <Container className="relative">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
              <h1 className="font-display text-5xl font-bold tracking-tighter text-green-600 sm:text-7xl">
                <span className="sr-only">Casa21 - </span>A brazilian hackerspace powered by <a href="https://vinteum.org/" target="_blank" className="underline">Vinteum</a>.
              </h1>
              <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-green-900">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod felis ut est imperdiet aliquam. Aliquam commodo a libero ut tempor. Nulla posuere libero in pretium suscipit. Vivamus ultricies nisi at magna fermentum, ac commodo arcu fermentum.
                </p>
                <p>
                Suspendisse potenti. Fusce in nisl sed sem sollicitudin eleifend eget vel lectus. Curabitur sodales risus non mi tristique, a convallis ipsum pellentesque.
                </p>
              </div>
              <Button className="mt-10 w-full sm:hidden">
                Events
              </Button>
              <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                {[
                  ['Hackers', '21'],
                  ['Events', '21'],
                  ['Sei', 'Qualquer'],
                  ['Lá', 'Coisa'],
                ].map(([name, value]) => (
                  <div key={name}>
                    <dt className="font-mono text-sm text-green-600">{name}</dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}
