import { useLocation, useNavigate } from "react-router-dom";

const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    if (location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return navigateBack;
};

export default useNavigateBack;
