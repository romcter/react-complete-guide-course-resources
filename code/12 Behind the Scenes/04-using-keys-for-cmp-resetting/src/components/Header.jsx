import { log } from '../log.js';
import logoImg from '../assets/logo.png';

export default function Header() {
  log('<Header.jsx /> rendered', 1);

  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind The Scenes</h1>
    </header>
  );
}
