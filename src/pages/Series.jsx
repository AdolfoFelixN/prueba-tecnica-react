import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import series from "../data/sample.json";

export const Series = () => {
  const contenido = series.entries;

  return (
    <div className="flex flex-col justify-between h-screen m-0">
      <Header title={"Series"} />

      <div className="px-40 pt-5 flex flex-wrap gap-8 justify-start mb-5">
        {contenido
          .slice(0, 20)
          .filter((serie) => serie.releaseYear >= 2010 && serie.programType === "series")          
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((serie, index) => (
            <Card
              key={index}
              image={serie.images["Poster Art"].url}
              title={serie.title}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
};
