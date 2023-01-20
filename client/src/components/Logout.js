import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <Button
          variant="contained"
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={() => logout()}
        >
          Log Out
        </Button>
      )}
    </>
  );
};

export default Logout;
