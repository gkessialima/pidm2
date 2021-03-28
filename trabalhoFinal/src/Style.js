import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    bloco: {
        width: "30%",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        borderRadius: 6,
        padding: 8,
        backgroundColor: "white",
        justifyContent: "center",
        marginVertical: 6,
    },
    bodyBloco:{
        backgroundColor:"#F4F4F4",
        padding: 16,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    body:{
        backgroundColor:"#F4F4F4",
        padding: 16,
    },
    navbar: {
        backgroundColor: "white",
        padding: 16,
    },
    navbarTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#5E5E5E",
    },
    blocoTexto: {
        fontSize: 16,
        textAlign: "center",
    },
    blocoHora: {
        color: "#FF655C",
        fontSize: 12,
        textAlign: "center",
        marginTop: 8,
    },
    linha:{
        width: "100%",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        borderRadius: 6,
        padding: 16,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    linhaTexto: {
        fontSize: 16,
        fontWeight: "bold",
    },
    linhaHora: {
        fontSize: 12,
        color:"#A6A6A6",
    },
    linhaBotoes: {
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-between"
    },
    linhaBotoesFeito: {
        flexDirection: "row",
        width: "20%",
        justifyContent: "flex-end"
    },
    linhaSelect: {
        width: "10%",
    },
    linhaTextos:{
        width:"70%",
    },
    linhaTextosFeito:{
        width:"80%",
    },
    listaTitle: {
        color: "#FF655C",
        fontSize: 20,
        fontWeight:"bold"
    },
    listaTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputText: {
        backgroundColor: "white",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        borderRadius: 6,
        marginVertical: 6,
    }
})

export {estilo}