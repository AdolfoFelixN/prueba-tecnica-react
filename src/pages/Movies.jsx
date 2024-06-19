import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import movies from "../data/sample.json";

export const Movies = () => {

    let contenido = ""

    if(movies.entries.programType == "series"){
        contenido = movies.entries;
    }     

  return (
    <div className="flex flex-col justify-between h-screen m-0">
      <Header title={"Movies"} />

      <div className="px-40 pt-5 flex flex-wrap gap-8 justify-start mb-5">        
        {        
        contenido.length > 0 ? (
        contenido
          .slice(0, 20)
          .filter((movie) => movie.releaseYear >= 2010 && movie.programType === "movie")                    
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((movie, index) => (            
            <Card
              key={index}
              imagen={movie.images["Poster Art"].url}
              titulo={movie.title}
            />
          ))          
        ) : (
        <p className="mt-10 font-bold">Sin resultados</p>

        )}
                  
      </div>

      <Footer />
    </div>
  );
};