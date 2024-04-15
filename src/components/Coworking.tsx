import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

export function Coworking() {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">Coworking</h2>
            <p className="mt-6 text-xl leading-8 text-green-900">No nosso espaço de coworking, oferecemos um ambiente inspirador e colaborativo para todas as pessoas que desejam contribuir para a construção do futuro do Bitcoin.</p>
            <p className="mt-6 text-base leading-7 text-green-900">Proporcionamos não apenas um local de trabalho, mas também oportunidades de networking, eventos educscionais e recursos para impulsionar o crescimento e o sucesso dos nossos membros e da comunidade bitcoiner brasileira.</p>
            <div className="mt-10 flex">
              <Link
                href="/coworking"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Quero conhecer! <ArrowRightIcon className="inline h-4 w-4 flex-none text-white" aria-hidden="true" />
            </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image width={400} height={225} src="/coworking02.jpeg" alt="" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image width={400} height={225} src="/coworking03.jpeg" alt="" className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image width={400} height={225} src="/coworking01.jpeg" alt="" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image width={400} height={225} src="/coworking04.jpeg" alt="" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
