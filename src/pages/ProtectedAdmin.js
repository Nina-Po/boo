import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import React from "react";

export default function ProtectedRoute({ children }) {
  const { admin } = useSelector((store) => store.admin);
  if (!admin) {
    return <Navigate to="/admin" />;
  }
  return children;
}
