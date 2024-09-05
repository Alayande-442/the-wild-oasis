import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // to add data inside the react query catch
      queryClient.setQueryData(["user"], user.user);
      console.log(user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.error(err, "ERROR");
      toast.error("the credentials provider returned an error");
    },

    retry: 3, // Add retry mechanism
    retryDelay: 1000, // Retry after 1 second
  });
  return { login, isLoading };
}
