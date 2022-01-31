import { Button } from 'ui'

export default function Home() {
  const getPikachu = () => {
    fetch(`${process.env.API_URL}`)
    console.log('Testing for vercel preview deployment ')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="p-4 text-2xl">Turbo repo Demo App </h1>

      <Button />
      <button
        onClick={getPikachu}
        className="mt-4 rounded-md bg-yellow-500 px-4 py-2 text-black"
      >
        Use Pokemon API
      </button>
    </div>
  )
}
