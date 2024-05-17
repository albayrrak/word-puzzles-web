import { finishGame } from "@/actions/api";
import { create } from "zustand";

type GlobalStore = {
    loading: boolean;
    setLoading: (loading: boolean) => void
    playGame: boolean;
    setPlayGame: (playGame: boolean) => void
    game: GameResponseModel
    setGame: (game: GameResponseModel) => void
    finishGame: boolean
    setFinishGame: (finishGame: boolean) => void
    toastify?: ToastifyModel;
    setToastify: (toastify: ToastifyModel | undefined) => void

}

export const useStore = create<GlobalStore>(set => ({
    loading: false,
    setLoading: (loading: boolean) => set({ loading: loading }),
    playGame: false,
    setPlayGame: (playGame: boolean) => set({ playGame: playGame }),
    game: {} as GameResponseModel,
    setGame: (game: GameResponseModel) => set({ game: game }),
    finishGame: false,
    setFinishGame: (finishGame: boolean) => set({ finishGame: finishGame }),
    setToastify: (toastify: ToastifyModel | undefined) => set({ toastify: toastify })
}))