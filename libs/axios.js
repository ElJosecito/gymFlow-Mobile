import axios from "axios";
import { useAuthStore } from "../store/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: "http://10.0.0.178:3000/api/v1",
});

instance.interceptors.request.use((config) => {

    if (token === null) {
        AsyncStorage.getItem("token").then((token) => {
            useAuthStore.setState({ token });
        });

        AsyncStorage.getItem("user").then((user) => {
            useAuthStore.setState({ user });
        });
    }

    const { token } = useAuthStore.getState();

    config.headers = {
        "auth-token": token,
    }
    return config;
});


export default instance;