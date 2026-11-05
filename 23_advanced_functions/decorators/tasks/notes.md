## Throttle

**Definition:** A decorator that wraps a function so it runs **at most once every `ms` milliseconds**, no matter how many times the wrapper is called. Calls that arrive during the cooldown aren't lost: only the **latest** one is remembered and runs when the cooldown ends.

**How it works (3 pieces of state outside the wrapper):**
1. `isThrottled` flag: "am I in cooldown?"
2. `savedArgs` / `savedThis`: the latest ignored call, overwritten by each newer one.
3. `setTimeout`: ends the cooldown after `ms`, then replays the saved call **through the wrapper** (not straight to `f`) so it starts a new cooldown.

**Flow for `throttle(f, 1000)` called with 1, 2, 3 quickly:**
- `f(1)` runs immediately, cooldown starts
- `2` saved, then overwritten by `3`
- cooldown ends, `f(3)` runs, new cooldown starts
- `2` is lost on purpose

**Demo observation (scroll page):**
- Raw: fires on every scroll tick (hundreds)
- Debounce: 0 while scrolling, 1 after stopping
- Throttle: steady ~5/sec while scrolling, plus one extra after stopping (the replayed last call)

**Throttle vs Debounce:**
| | Debounce | Throttle |
|---|---|---|
| Runs | once, after silence | regularly, during activity |
| First call | delayed | immediate |
| Use for | final value (search box, resize, autosave) | live updates (scroll, mousemove, drag) |

**Rule:** care about the *final result* → debounce. Care about *updates while it's happening* → throttle.