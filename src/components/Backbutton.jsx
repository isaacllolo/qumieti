import { FaAngleLeft } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';  

export const Backbutton = ({ to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button className="backbutton">
        <FaAngleLeft /> Regresar
      </Button>
    </Link>
  );
};

export default Backbutton;
