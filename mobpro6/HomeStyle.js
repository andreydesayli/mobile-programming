import { StyleSheet} from 'react-native';

/* kita bisa melakukan style secara langsung menggunakan style dan 2 kurung kurawal
contoh: <Text style={{fontSize:60}}>Group 1</Text>

kita juga bisa melakukan style di sebuah file yang kemudian file itu akan kita export dan import
sehingga style yang kita buat itu bisa digunakan berulang kali (reusable)

nama dan value dari style mirip dengan CSS. yang membedakannya hanyalah jika di react-native kita menggunakan camelCasing
*/

const styles = StyleSheet.create({
    text1: {
        fontSize: 50,
        fontWeight : '100',
        fontStyle: 'italic',
        fontFamily: 'Roboto',
        color: 'red',
        textAlign: 'center',
    },

    text2: {
        fontSize: 50,
        fontWeight : '100',
        fontFamily: 'Roboto',
        color: 'green',
        backgroundColor : '#ffefd5',
        textAlign: 'center',

    },
    text3: {
        fontSize: 50,
        fontWeight : '100',
        fontStyle: 'italic',
        fontFamily: 'Roboto',
        color: 'red',
        textAlign: 'center',
    },

    borderBox: {
        height: '10%',
        weight: '25%',
        backgroundColor: 'purple',
    },
});

export default styles;