import { Alert } from "react-native";

const confirm = async (title = 'Confirm', msg: string) => {

    let choise = false

    Alert.alert(
        title,
        msg,
        [
            {
                text: 'Yes',
                onPress: () => choise = true,
                style: 'default',
            },
            {
                text: 'No',
                onPress: () => choise = false,
                style: 'cancel',
            },
        ],
        {
            cancelable: false,
        },
    );
    console.log(choise);

    return choise
}

export default confirm