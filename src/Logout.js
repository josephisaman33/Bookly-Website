import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("/api/logout");
    navigate("/");
    window.location.reload();
  });

  return (
    <div>
      <h1>Logged Out</h1>
    </div>
  );
}

export default Logout;
