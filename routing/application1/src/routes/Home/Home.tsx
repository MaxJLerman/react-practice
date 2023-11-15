import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="products">list of products</Link>.
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
};
