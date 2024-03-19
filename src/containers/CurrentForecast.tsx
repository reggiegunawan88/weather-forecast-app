import { DropletIcon, WindIcon } from "@/components/Icons/TemperatureIcons";
import { DateTimeHelpers } from "@/helpers/DateTimeHelpers";
import { TemperatureHelpers } from "@/helpers/TemperatureHelpers";
import { ICurrentWeather } from "@/types/ui-types";
import Image from "next/image";

interface CurrentForecastProps {
  data: ICurrentWeather;
}

export default function CurrentForecast({ data }: CurrentForecastProps) {
  return (
    <div className="flex flex-col gap-y-5 items-center">
      {/* Date info */}
      <span className="text-2xl font-semibold">
        {DateTimeHelpers.convertToFullDate({ unix: data.dt })}
      </span>
      {/* Weather info */}
      <div className="flex flex-row items-center gap-x-2">
        <Image
          alt="current-weather"
          src="/weather-icon.webp"
          height={100}
          width={100}
          priority
        />
        <div className="flex flex-col gap-y-2 text-center">
          <span className="text-2xl font-bold">
            {TemperatureHelpers.getExactTemperature(data.temp)}&deg;
          </span>
          <span>{data.weather[0].main}</span>
        </div>
      </div>
      {/* Humidity and Wind Speed info */}
      <div className="flex flex-col gap-y-2 text-sm">
        <div className="flex gap-x-2 items-center">
          <DropletIcon className="w-4 h-4 text-gray-500" />
          <span>Humidity: {data.humidity}%</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <WindIcon className="w-4 h-4 text-gray-500" />
          <span>Wind: {data.wind_speed} km/h</span>
        </div>
      </div>
    </div>
  );
}
