import { AnimeCard, Container } from "@/components";
import { animeData } from "@/data";

const AnimePage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {animeData.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </Container>
  );
};

export default AnimePage;
