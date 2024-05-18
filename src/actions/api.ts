import { useStore } from "@/store/store";
import axios, { AxiosResponse } from "axios";

const requestApi = axios.create({
    baseURL: "http://localhost:5000/",
})

export const startGame = async (data: StartGameRequestModel) => {
    const response: AxiosResponse<GlobalResponseModel<StartGameResponseModel>> = await requestApi.post("start", data)

    return response.data

}

export const getGame = async (data: GameRequestModel) => {
    const response: AxiosResponse<GlobalResponseModel<GameResponseModel>> = await requestApi.post("game", data)

    return response.data
}

export const wordVerify = async (data: WordVerifyRequestModel) => {
    const response: AxiosResponse<GlobalResponseModel<null>> = await requestApi.post("verify", data)

    return response.data
}

export const finishGame = async (data: FinishGameRequestModel) => {
    const response: AxiosResponse<GlobalResponseModel<null>> = await requestApi.post("/finish", data)

    return response.data
}

export const getTopRank = async (data: GetTopRankRequestModel) => {
    const response: AxiosResponse<GlobalResponseModel<GameResponseModel[]>> = await requestApi.post("/rank", data)

    return response.data
}