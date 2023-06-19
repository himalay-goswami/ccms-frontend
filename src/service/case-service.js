import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/allCases")
}

const addCase = (data) => {
    return httpClient.post("/add", data);
}

export default {getAll, addCase};
