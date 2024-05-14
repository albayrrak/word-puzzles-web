type GlobalResponseModel<T extends any> = {
    Data: T;
    Success: boolean
}


type StartGameRequestModel = {
    username: string;
}

type StartGameResponseModel = {
    gameId: string;
}