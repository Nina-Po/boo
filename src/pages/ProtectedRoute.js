import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import React from "react";

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
