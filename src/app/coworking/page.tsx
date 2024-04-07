"use client"
import { useEffect, useState } from "react";
import { Event } from "@/app/api/calendar/route";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid'
import { BitcoinIcon } from '@bitcoin-design/bitcoin-icons-react/filled'

const includedFeatures = [
  'Wifi access',
  'Nada',
  'Tudo',
  'Alguma coisa',
]

export default function CoworkingPage() {
  return (
    <div className="flex w-full flex-col justify-center">
      <Header />
      <main className="flex-auto">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">Coworking</h2>
              <p className="mt-6 text-lg leading-8 text-green-900">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                in. Explicabo id ut laborum.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-green-900 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-green-600">Day Pass</h3>
                {/* <p className="mt-6 text-base leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                  repellendus etur quidem assumenda.
                </p> */}
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">What’s included</h4>
                  <div className="h-px flex-auto bg-green-900" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-green-950 py-10 text-center ring-1 ring-inset ring-gray-200/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-400">Pay once, visit one day</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-gray-100">
                        <BitcoinIcon className="inline h-10 w-10 flex-none text-gray-100" aria-hidden="true" />
                        21 000
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-100">sats</span>
                    </p>
                    <Button
                      className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Get access (soon)
                    </Button>
                    {/* <p className="mt-6 text-xs leading-5 text-gray-400">
                      Invoices and receipts available for easy company reimbursement
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-green-900 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-green-600">Week Pass</h3>
                {/* <p className="mt-6 text-base leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                  repellendus etur quidem assumenda.
                </p> */}
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">What’s included</h4>
                  <div className="h-px flex-auto bg-green-900" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-green-950 py-10 text-center ring-1 ring-inset ring-gray-200/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-400">Pay once, visit one week</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-gray-100">
                        <BitcoinIcon className="inline h-10 w-10 flex-none text-gray-100" aria-hidden="true" />
                        147 000
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-100">sats</span>
                    </p>
                    <Button
                      className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Get access (soon)
                    </Button>
                    {/* <p className="mt-6 text-xs leading-5 text-gray-400">
                      Invoices and receipts available for easy company reimbursement
                    </p> */}
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
