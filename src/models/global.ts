type GlobalResponseModel<T extends any> = {
    success: boolean;
    data: {
        gameStatus?: boolean;
        wordStatus?: boolean;
        game?: T
    };
}


type StartGameRequestModel = {
    username: string;
}

type StartGameResponseModel = {
    gameId: string;
}

type GameResponseModel = {
    id: string;
    score: number;
    word: string;
    wordShuffle: string;
    status: boolean;
    level: number;
    playerId: string;
    player: {
        id: string;
        username: string;
    }

}

type GameRequestModel = {
    id: string
}

type WordVerifyRequestModel = {
    gameId: string;
    word: string;
}



type FinishGameRequestModel = {
    gameId: string;
}


