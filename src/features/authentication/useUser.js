import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onError: (err) => {
      console.error("Error fetching user:", err);
    },
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    error,
  };
}
