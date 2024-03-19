export default function Header() {
  return (
    <header className="p-2 border-b">
      <div className="flex flex-col gap-y-2 text-center items-center">
        <div className="flex flex-row items-center gap-x-2">
          <SunIcon className="w-8 h-8 text-amber-400" />
          <span className="text-xl font-bold">Weather</span>
        </div>
        <span className="text-sm">Always take the weather with you</span>
      </div>
    </header>
  );
}

// Composing component
interface Props {
  className: string;
}
function SunIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
