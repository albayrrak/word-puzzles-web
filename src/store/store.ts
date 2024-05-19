import { create } from "zustand";

type GlobalStore = {
    game: GameResponseModel
    setGame: (game: GameResponseModel) => void
    toastify?: ToastifyModel;
    setToastify: (toastify: ToastifyModel | undefined) => void

}

export const useStore = create<GlobalStore>(set => ({
    game: {} as GameResponseModel,
    setGame: (game: GameResponseModel) => set({ game: game }),
    setToastify: (toastify: ToastifyModel | undefined) => set({ toastify: toastify })
}))