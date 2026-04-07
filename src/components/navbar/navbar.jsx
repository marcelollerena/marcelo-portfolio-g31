import styles from "./navbar.module.css";

const links = [
  { id: 1, to: "/home", label: "Home" },
  { id: 2, to: "/about", label: "About" },
  { id: 3, to: "/lab", label: "Lab" },
];

export function NavBar() {
  return (
    <nav className={styles.container}>
      <h2>M</h2>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
