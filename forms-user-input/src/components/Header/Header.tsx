import logoImg from "../assets/logo.jpg";

export const Header: React.FC = () => {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  );
};
