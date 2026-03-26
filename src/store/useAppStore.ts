import { create } from "zustand";

type Status = "idle" | "loading" | "success" | "error";

interface AppState {
  image: string | null;
  score: number | null;
  status: Status;
  error: string | null;

  setImage: (uri: string) => void;
  setLoading: () => void;
  setSuccess: (score: number) => void;
  setError: (error: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  image: null,
  score: null,
  status: "idle",
  error: null,

  setImage: (uri) => set({ image: uri, status: "idle", score: null, error: null}),

  setLoading: () =>
    set({
      status: "loading",
      error: null,
      score: null,
    }),

  setSuccess: (score) => set({ status: "success", score, error: null }),

  setError: (error) =>
    set({
      error,
      status: "error",
    }),
}));
