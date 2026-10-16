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
- Keep prototype data and interaction state in browser-safe React modules; this project intentionally has no backend.
- Mount prototype session state above the route outlet so clinic selection, booking and family details survive screen navigation without persistent storage.
- Use a shared Mawaidi shell and reusable healthcare UI primitives for patient and doctor experiences to maintain visual consistency.
- Patient screens use the index and /$screen routes, and doctor screens use /doctor/$screen; route parameters select known prototype views and leaf heads provide screen-specific metadata.
