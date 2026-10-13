'use client'

import { useEffect, useState } from 'react'

function diff(target: number) {
  const ms = Math.max(target - Date.now(), 0)
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor((ms / 3_600_000) % 24),
    Minutes: Math.floor((ms / 60_000) % 60),
    Seconds: Math.floor((ms / 1000) % 60),
  }
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null)

  useEffect(() => {
    const t = new Date(target).getTime()
    setTime(diff(t))
    const id = setInterval(() => setTime(diff(t)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = time ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 }

  return (
    <div className="mx-auto inline-flex flex-col items-center gap-4">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Launch countdown</p>
      <div className="flex items-center gap-2 sm:gap-4" role="timer" aria-live="off">
        {Object.entries(units).map(([label, value], i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex w-16 flex-col items-center rounded-xl border border-border bg-background/40 py-3 backdrop-blur-md sm:w-20">
              <span key={value} className="font-display animate-in fade-in slide-in-from-top-2 text-2xl font-semibold tabular-nums duration-500 sm:text-3xl">
                {String(value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
            </div>
            {i < 3 && <span className="hidden text-muted-foreground sm:block" aria-hidden="true">:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
