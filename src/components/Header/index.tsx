import { SunIcon } from '../Icons/TemperatureIcons'

export default function Header() {
  return (
    <header className="p-2 border-b border-opacity-40 text-white">
      <div className="flex flex-col gap-y-2 text-center items-center">
        <div className="flex flex-row items-center gap-x-2">
          <SunIcon className="w-8 h-8 text-amber-400" />
          <span className="text-xl font-bold">Weather</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Always take the weather with you</span>
          <span className="text-xs">Made by Reggie Gunawan</span>
        </div>
      </div>
    </header>
  )
}
