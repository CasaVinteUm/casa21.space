"use client"
// import { useEffect, useState } from "react";
// import { Event } from "@/app/api/calendar/route";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  // const [events, setEvents] = useState<Event[]>([])

  // async function fetchEvents () {
  //   const res = await fetch('/api/calendar', {
  //     headers: {
  //       Accept: 'application/json',
  //       method: 'GET'
  //     }
  //   })

  //   const data = await res.json() as { events: Event[] }
  //   setEvents(data.events)
  // }

  // useEffect(() => {
  //   fetchEvents()
  // }, [])

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
        <div className="overflow-hidden py-32">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">Coworking</h2>
                <p className="mt-6 text-xl leading-8 text-green-900">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</p>
                <p className="mt-6 text-base leading-7 text-green-900">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</p>
                <div className="mt-10 flex">
                  <Link
                    href="/coworking"
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Get a Day Pass <ArrowRightIcon className="inline h-4 w-4 flex-none text-white" aria-hidden="true" />
                </Link>
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <Image width={400} height={225} src="/coworking01.jpeg" alt="" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image width={400} height={225} src="/coworking02.jpeg" alt="" className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image width={400} height={225} src="/coworking03.jpeg" alt="" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image width={400} height={225} src="/coworking04.jpeg" alt="" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
