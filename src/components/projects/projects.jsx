import styles from "./projects.module.css";
import { BackgroundGlass } from "../shared/background-glass/background-glass";

const projects = [
  {
    id: 1,
    category: "Front-end",
    name: "Example Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",

    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    category: "Back-end",
    name: "Example Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    img: "https://picsum.photos/200/300",
  },
];

export function Projects() {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div className={styles.project__card}>
          <div className={styles["project__card-left"]}>
            <h5>{project.category}</h5>
            <h2>{project.name}</h2>
            <BackgroundGlass content={project.description} />
          </div>
          <div className={styles["project__card-right"]}>
            <img src={project.img} />
          </div>
        </div>
      ))}
    </div>
  );
}
