import { Anime } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <article className="card bg-base-300 shadow-sm">
      <figure className="aspect-video">
        <Image
          src={anime.banner}
          alt={anime.title}
          width={1280}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="badge badge-soft badge-error">{anime.rating}</span>
          <span className="badge badge-soft badge-success">
            {anime.score}/10
          </span>
          <span className="badge badge-soft badge-info">
            EP. {anime.episodes}
          </span>
        </div>
        <h3 className="card-title">
          {anime.title} ({anime.year})
        </h3>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="badge badge-primary">{anime.studio}</span>
          {anime.genres.map((genre, index) => (
            <span
              key={index + genre}
              className="badge badge-outline badge-accent"
            >
              {genre}
            </span>
          ))}
        </div>
        <p>{anime.plot}</p>
        <div className="card-actions justify-end">
          <Link href={`/anime/${anime.id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default AnimeCard;
