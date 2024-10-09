import axios from "../libs/axios";


//get user by id
export const getUser = async (id) => {
    try {
        const response = await axios.get(`users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


//update user
export const updateUser = async (id, data) => {
    try {
        const response = await axios.put(`users/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// delete image
export const deleteImage = async (id) => {
    try {
        const response = await axios.put(`users/image/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

//upload image
export const uploadImage = async (id, data) => {
    try {
        const response = await axios.put(`users/image/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

