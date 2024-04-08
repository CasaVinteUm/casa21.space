export interface Event {
  id: string
  title: string
  start: string
  end: string
  url: string | null
}

const REVALIDATE_EVERY_30_MINUTES = 30 * 60

export async function GET() {
  const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GOOGLE_CALENDAR_ID}/events`

  let eventsFromCalendar = []

  try {
    const res = await fetch(endpoint, {
      next: {
        revalidate: REVALIDATE_EVERY_30_MINUTES
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

  const events: Event[] = eventsFromCalendar
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

  return Response.json({ events })
}
