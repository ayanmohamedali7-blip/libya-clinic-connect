<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## App architecture
- Keep appointment prototype data and session interaction state in browser-safe React modules; only care navigation uses a real Cloud AI call.
- Mount prototype session state above the route outlet so clinic selection, booking and family details survive screen navigation without persistent storage.
- Use a shared Mawaidi shell and reusable healthcare UI primitives for patient and doctor experiences to maintain visual consistency.
- Patient screens use the index and /$screen routes, and doctor screens use /doctor/$screen; route parameters select known prototype views and leaf heads provide screen-specific metadata.

- Care navigation uses a validated public POST server function and server-only AI Gateway Responses SDK call; descriptions are processed on explicit consent and not saved in app data.
- Constrain care recommendations to the demo clinic catalog and suppress clinic booking suggestions for emergency or insufficient-information outcomes to avoid unsafe routing.
- Render emergency care as a dedicated in-place screen when the care result is emergency; focus its heading and replace the form so urgent guidance is immediately visible without storing health data in URLs.
- Subscriptions, featured ranking and doctor billing are simulated in prototype session state (no real charges); featured doctors sort first only within the same specialty and clinic.
