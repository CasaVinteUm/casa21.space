import { useCache } from '@/lib/cache'

export interface Event {
  id: string
  title: string
  start: string
  end: string
  url: string | null
}

const CACHE_EXPIRE_IN_30_MINUTES = 30 * 60
const CACHE_KEY = 'google:events'

export async function GET() {
  const { client } = await useCache()

  const cachedEvents = await client.get(CACHE_KEY)

  let events: Event[] = []

  if (cachedEvents) {
    events = JSON.parse(cachedEvents)
  } else {
    const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GOOGLE_CALENDAR_ID}/events`

    let eventsFromCalendar = []

    try {
      const res = await fetch(endpoint, {
        next: {
          revalidate: 0
        },
        headers: {
          "X-goog-api-key": `${process.env.GOOGLE_API_KEY}`
        }
      })

      const { items } = await res.json()

      if (Array.isArray(items)) {
        eventsFromCalendar = items
      }
    } catch (error) {
      return Response.error()
    }

    events = eventsFromCalendar
      .filter((event) => {
        return new Date(event.start.dateTime).getTime() >= new Date().getTime()
      })
      .sort((a, b) => {
        return new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime()
      }).map((event) => {
        let meetupLink = null

        if (event.iCalUID) {
          const [meetupId] = event.iCalUID.replace('event_', '').split('@')
          if (meetupId) {
            meetupLink = `https://www.meetup.com/clubebitcoinsp/events/${meetupId}/`
          }
        }

        return {
          id: event.id,
          title: event.summary,
          start: event.start.dateTime,
          end: event.end.dateTime,
          url: meetupLink
        }
      })

    await client.set(CACHE_KEY, JSON.stringify(events), { EX: CACHE_EXPIRE_IN_30_MINUTES })
  }

  await client.disconnect()

  events = events.map((event) => ({
    ...event,
    start: new Date(event.start).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    end: new Date(event.end).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  }))

  return Response.json({ events })
}
