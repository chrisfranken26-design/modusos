export default function SignInPage() {
  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold">Sign in</h2>
      <p className="mt-2 text-sm text-slate-600">Sign in to continue to Modus OS</p>
      <div className="mt-6">
        <button
          className="w-full inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 hover:opacity-95"
          onClick={() => {
            // Client-side supabase sign in will be wired after secrets are configured
            // See README for setup instructions
            alert('Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local and repository secrets.')
          }}
        >
          Sign in (Supabase)
        </button>
      </div>
    </div>
  )
}
