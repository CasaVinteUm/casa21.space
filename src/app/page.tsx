"use client"
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Coworking } from "@/components/Coworking";
import { Schedule } from "@/components/Schedule";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center">
      <Header />
      <main className="flex-auto">
        <Hero />
        <Schedule />
        <Coworking />
      </main>
    </div>
  );
}
