function ScreenLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2 bg-canvas" role="status" aria-label="Loading">
      <span className="size-2 animate-pulse rounded-full bg-accent" />
      <span className="size-2 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
      <span className="size-2 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
    </div>
  );
}

export default ScreenLoader;
