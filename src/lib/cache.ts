import { createClient } from 'redis'

export async function useCache() {
  const client = createClient({
    url: process.env.REDIS_URL
  })

  client.on('error', err => console.log('Garnet Client Error', err))

  await client.connect()

  return {
    client
  }
}
