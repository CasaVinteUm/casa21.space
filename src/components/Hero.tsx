import { Container } from "@/components/Container";

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36 min-h-screen">
      <Container className="relative">
        <div className="mx-auto max-w-xl lg:max-w-6xl lg:px-12">
          <h1 className="font-display text-7xl font-bold tracking-tighter text-green-600">
            <span className="sr-only">Casa21 - </span>Bitcoin Hackerspace em <span className="whitespace-nowrap">São Paulo</span>, criado pela <a href="https://vinteum.org/" target="_blank" className="underline">Vinteum</a>.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-green-900">
            <p>
              A Casa21 é o principal ponto de encontro para desenvolvedores, hackers, criativos e builders em geral dedicados a fortalecer o ecossistema Bitcoin no Brasil. É o lugar ideal para colaborar, aprender e debater ideias de projetos que impulsionem a adoção, escalabilidade, privacidade e aprimorem o Bitcoin.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
