require('dotenv').config()

export const fetcher = async (props: { query?: string; perPage?: string }) => {
  const { query, perPage } = props
  const url = new URL(`${process.env.HOST}/search`)
  const params = new URLSearchParams({ query, per_page: perPage })
  url.search = params.toString()
  const response = await fetch(url.toString(), {
    headers: {
      ['Content-Type']: 'application/json',
      Authorization: process.env.API_KEY,
    },
  }).then((res) => res.json())
  return response
}
