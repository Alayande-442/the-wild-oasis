import styled from "styled-components";
import { useUser } from "../features/authentication/useUser"; // Corrected useUSer to useUser
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(
    --color-grey-50
  ); // Corrected background-colot to background-color
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load authenticated user
  const { isLoading, isAuthenticated } = useUser(); // Corrected useUSer to useUser

  // 3. if No authenticated user, redirect to /login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  // 2. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. if authenticated user, render children component
  if (isAuthenticated) return children;

  // Optionally, you can return null if no user is authenticated and loading is complete
  return null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
