import { SunIcon } from '../Icons/TemperatureIcons'

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
  )
}
