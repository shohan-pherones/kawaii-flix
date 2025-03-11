import { Anime } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import AnimeCard from "./AnimeCard";

const sampleAnime: Anime = {
  id: "1",
  title: "Attack on Titan",
  year: 2013,
  studio: "Wit Studio",
  genres: ["Action", "Drama", "Fantasy"],
  rating: "R",
  score: 9.0,
  episodes: 75,
  plot: "In a world where humanity is on the brink of extinction due to giant humanoid creatures, a young boy seeks revenge against the Titans.",
  description:
    "Attack on Titan follows Eren Yeager and his friends as they join the Survey Corps to battle the terrifying Titans. As the story unfolds, shocking truths about their world and its history are revealed, making it an intense and thought-provoking saga of war, survival, and betrayal.",
  thumbnail: "/aot_thumbnail.jpg",
  banner: "/aot_banner.jpg",
};

const meta: Meta<typeof AnimeCard> = {
  title: "Components/AnimeCard",
  component: AnimeCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimeCard>;

export const Default: Story = {
  args: {
    anime: sampleAnime,
  },
};
