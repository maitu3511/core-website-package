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

## Website architecture
- Preserve the imported TanStack content pages and shared WebsiteLayout; the migration must not redesign the source experience.
- Keep root index.html as the original archive artifact while TanStack routes supply the running site; this retains the requested source file without replacing the supported entry point.
- Rehost original image and font bytes through Lovable Assets and retain their pointers; this removes reliance on the source project's asset hosting without changing imagery.
