import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, data: string | object): Promise<void | object> => {
    try {
        // if (typeof data === 'string') {
        // await AsyncStorage.setItem(key, data);
        // } else if (typeof data === 'object') {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        // }
    } catch (e) {
        // saving error
        return { err: e }
    }
};

export const getData = async (key: string): Promise<object | null> => {
    try {
        let data = await AsyncStorage.getItem(key);

        return data === null ? false : JSON.parse(data)

        // if (data !== null) {
        //     // data previously stored
        // }
    } catch (e) {
        // error reading data
        return { err: e }
    }
};
