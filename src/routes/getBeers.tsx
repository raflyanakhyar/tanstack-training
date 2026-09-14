'use client'
import type { Beers } from '#/types/beers'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const fetchBeers = createServerFn({ method: 'GET' }).handler(async (): Promise<Beers[]> => {
    const response = await fetch('https://punkapi-alxiw.amvera.io/v3/beers?page=1')
    console.log('Response status:', response) // Log the response status for debugging

    if (!response.ok) {
        throw new Error(`Gagal mengambil data beer: ${response.status}`)
    }

    return response.json()
})

function BeersComponent() {
    const beers = Route.useLoaderData()
    console.log('Beers data:', beers)
    return (
        <div>
            p
            {/* {beers.map((beer) => (
                <div key={beer.id}>
                    <h2>{beer.name}</h2>
                    <p>{beer.description}</p>
                </div>
            ))} */}
        </div>
    )
}

export const Route = createFileRoute('/getBeers')({
    loader: () => fetchBeers(),
    component: BeersComponent,
})
