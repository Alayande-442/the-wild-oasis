import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  // Changed 'export async function' to 'export function'
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Remove all queries from the client
      queryClient.removeQueries();
      // Perform additional logout logic here
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
