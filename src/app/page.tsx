"use client"
import { useEffect, useState } from "react";
import { Event } from "./api/calendar/route";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { toast } from "sonner";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([])

  function showToast () {
    toast("Calma paezão", {
      description: "Não terminei o site não kk",
      action: {
        label: "tnc jão!",
        onClick: () => {
          //
        },
      },
    })
  }

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
      <header className="relative z-50 flex-none lg:pt-11">
        <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
          <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
            <Image src={`/logo.png`} className="h-12 w-auto text-slate-900" alt="" height={48} width={168} />
          </div>
          <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-green-600/10 py-4 font-mono text-sm text-green-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
            <a href="https://maps.app.goo.gl/Mb9tt6DZw6nqsUKM7" target="_blank" className="mx-auto flex items-center gap-4 px-4 cursor-pointer">
              <address>Av. Nhandú, 848. Planalto Paulista - SP</address>
            </a>
          </div>
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <Button onClick={showToast}>Events</Button>
          </div>
        </Container>
      </header>
      <main className="flex-auto">
        <div className="relative py-20 sm:pb-24 sm:pt-36">
          {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
          <Container className="relative">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
              <h1 className="font-display text-5xl font-bold tracking-tighter text-green-600 sm:text-7xl">
                <span className="sr-only">Casa21 - </span>A brazilian hackerspace powered by <a href="https://vinteum.org/" target="_blank">VinteUm</a>
              </h1>
              <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-green-900">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod felis ut est imperdiet aliquam. Aliquam commodo a libero ut tempor. Nulla posuere libero in pretium suscipit. Vivamus ultricies nisi at magna fermentum, ac commodo arcu fermentum.
                </p>
                <p>
                Suspendisse potenti. Fusce in nisl sed sem sollicitudin eleifend eget vel lectus. Curabitur sodales risus non mi tristique, a convallis ipsum pellentesque.
                </p>
              </div>
              <Button onClick={showToast} className="mt-10 w-full sm:hidden">
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
