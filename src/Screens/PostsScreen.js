import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Header from "../Components/Header";


export default function PostsScreen(){


    return(<View style={styles.container}>
        <Header title={'Публикации'}>
            <TouchableOpacity style={styles.logoutBtn}>
                <Image source={require('../../assets/Images/log-out.png')}/>
            </TouchableOpacity>
        </Header>
        <View style={styles.publication}>

        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../../assets/Images/grid.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addBtn}>
                <Image source={require('../../assets/Images/Union.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/Images/user.png')} />
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    logoutBtn: {
        position: "absolute",
        bottom: 11,
        right: 15,
    },
    publication: {
        flex: 2,
        backgroundColor: '#E5E5E5'
    },
    footer:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 83,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        paddingBottom: 34,
        paddingTop: 9,
    },
    addBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 42,
        width: 70,
        height: 40,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
    }
})