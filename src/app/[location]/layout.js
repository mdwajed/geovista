import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "GeoVista",
  description: "Generated by Wajed",
};

export default function RootLayout({
  children,
  aqi,
  weather,
  temperature,
  wind,
}) {
  return (
    <div className="wrapper">
      <Image
        src="/images/background.png"
        alt=""
        width={700}
        height={1200}
        className="bg-img"
      />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {aqi}
            {weather}
            {temperature}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
