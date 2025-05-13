import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Explore Cambridge Colleges
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Track your visits, collect badges, and share your experiences at Cambridge's historic colleges. 
              Discover dining halls, take photos with college portraits, and rate your experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/colleges"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore Colleges
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Colleges Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Colleges</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Start your journey with these iconic Cambridge colleges
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Featured college cards will go here */}
          <div className="flex flex-col items-start">
            <div className="rounded-lg bg-gray-100 p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">King's College</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Founded in 1441, home to the famous King's College Chapel and choir.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-lg bg-gray-100 p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Trinity College</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                The largest college, known for its Great Court and impressive alumni.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-lg bg-gray-100 p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">St John's College</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Famous for its Bridge of Sighs and beautiful gardens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
