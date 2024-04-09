"use client"
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Coworking } from "@/components/Coworking";
import { Schedule } from "@/components/Schedule";

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
        <Hero />
        <Schedule />
        <Coworking />
      </main>
    </div>
  );
}
