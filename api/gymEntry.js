import axios from "../libs/axios";


//current user gym entry

export const getGymEntry = async () => {
    try {
        const response = await axios.get(`gym-status`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

//enter gym
export const enterGym = async (data) => {
    try {
        const response = await axios.post(`enter-gym`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

//exit gym

export const exitGym = async () => {
    try {
        const response = await axios.post(`exit-gym`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// get gym by id
export const getEntryById = async (id
) => {
    try {
        const response = await axios.get(`gymEntries/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}