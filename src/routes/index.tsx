import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/itm/Header";
import { Hero } from "@/components/itm/Hero";
import { Sobre } from "@/components/itm/Sobre";
import { Cursos } from "@/components/itm/Cursos";
import { Diferenciais } from "@/components/itm/Diferenciais";
import { Timeline } from "@/components/itm/Timeline";
// Galeria removida conforme solicitação — mantido no repositório se necessário
import { Eventos } from "@/components/itm/Eventos";
import { Contato } from "@/components/itm/Contato";
import { Footer } from "@/components/itm/Footer";

const TITLE = "Instituto Tinello de Música — Escola de Música em Santos/SP";
const DESCRIPTION =
  "Aulas de violão, guitarra, bateria, canto, piano, teclado, baixo e cavaquinho em Santos/SP. Sinta a Música. Viva sua Evolução.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicSchool",
          name: "Instituto Tinello de Música",
          description: DESCRIPTION,
          telephone: "+55 13 99130-3666",
          sameAs: ["https://www.instagram.com/institutotinello/"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Santos",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "10:00",
              closes: "22:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "10:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "16:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Cursos />
        <Diferenciais />
        <Timeline />
        <Eventos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
