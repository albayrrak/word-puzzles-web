import axios, { AxiosResponse } from "axios";

const requestApi = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 1000
})

export const startGame = async (data: StartGameRequestModel) => {
    const response: AxiosResponse<GlobalResponseModel<StartGameResponseModel>> = await requestApi.post("start", data)

    return response.data

}