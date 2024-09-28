export function Footer() {
  return (
    <footer className="mt-10 md:px-32 xl:px-56 pb-5">
      <div className="bg-primary p-4 rounded-full">
        <div className="flex flex-row items-center justify-between">
          <p className="pl-2 text-sm text-background/80">Made by me.</p>
          <button className="border border-background bg-background text-primary rounded-full text-md px-4 py-1 hover:border-foreground hover:bg-foreground hover:text-background transition-colors">
            Contact Me!
          </button>
        </div>
      </div>
    </footer>
  )
}