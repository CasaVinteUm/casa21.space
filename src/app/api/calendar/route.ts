import { calendarData } from './calendarData'

export interface Event {
  id: string
  title: string
  start: string
  end: string
  url: string
}

export async function GET() {
  const events: Event[] = calendarData.items
    .filter((event) => {
      return new Date(event.start.dateTime).getTime() >= new Date().getTime()
    })
    .sort((a, b) => {
      return new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime()
    }).map((event) => {
      return {
        id: event.id,
        title: event.summary,
        start: event.start.dateTime,
        end: event.end.dateTime,
        url: event.htmlLink
      }
    })

  return Response.json({ events })
}
