import { Event } from '@/app/api/calendar/route'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
]

export function Schedule() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  async function fetchEvents () {
    const res = await fetch('/api/calendar', {
      headers: {
        Accept: 'application/json',
        method: 'GET'
      }
    })

    const data = await res.json() as { events: Event[] }
    setEvents(data.events)
    setIsLoaded(true)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  if (!isLoaded) {
    return (<></>)
  }

  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">
              Agenda de eventos
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
              Learn from the experts on the cutting-edge of deception at the most sinister companies.
            </p>
          </div>

          <ul
            role="list"
            className="divide-y divide-green-600 overflow-hidden bg-green-900 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
          >
            {events.map((event) => (
              <li key={event.id} className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-green-600 sm:px-6">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-bold leading-6 text-gray-300 hover:text-white">
                      <a href={event.url ?? ''} target='_blank'>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {event.title}
                      </a>
                    </p>
                    {/* <p className="mt-1 flex text-xs leading-5 text-gray-400">
                      dddsdsd
                    </p> */}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-white-300 font-bold">
                      {event.start}
                    </p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}
