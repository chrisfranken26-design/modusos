import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Modus OS</Link>
        <nav className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm text-slate-700 hover:underline">Sign in</Link>
        </nav>
      </div>
    </header>
  )
}
