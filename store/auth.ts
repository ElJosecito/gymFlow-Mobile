import { create } from "zustand";

//async function to get the token from the local storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create(
    (set) => ({
        token: null,
        userId: null,
        isAuth: false,
        gymStatus: null,
        setToken: async (token: string) => {
            set({ token, isAuth: true });
            await AsyncStorage.setItem('token', token);
        },
        setUserId: async (userId: string) => {
            set({ userId });
            await AsyncStorage.setItem('userId', userId);
        },
        setGymStatus: (gymStatus: Boolean) => set({ gymStatus }),
        logout: async () => {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('userId');
            set({ token: null, userId: null, isAuth: false });
        },
    })
);

