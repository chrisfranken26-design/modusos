/**
 * Lightweight className utility compatible with Tailwind and shadcn/ui patterns.
 */
export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ')
}
