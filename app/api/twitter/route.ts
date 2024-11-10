import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const clientBearerToken = req.headers.get('authorization')

  if (!id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  if (typeof clientBearerToken != 'string') {
    return NextResponse.json(
      { error: 'Bearer token is required' },
      { status: 400 }
    )
  }

  const url = `https://api.twitter.com/2/users/${id}/tweets`

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: clientBearerToken,
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Error fetching tweets' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
