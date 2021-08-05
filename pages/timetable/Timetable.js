import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../Auth";
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet } from 'react-native';
import config from '../../config';
const axios = require("axios");

export default function Timetable() {

    const { currentUserData } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [tturl, setTturl] = useState(null);

    const getTimetable = () => {
        axios
        .get(`${config.REACT_APP_API_URL}gtimetable-detail/${currentUserData[0].value}/${currentUserData[1].value}/${currentUserData[2].value}/`)
        .then((res) => {
            const results = res.data;
            setTturl(results.gsheet_src);
            setLoading(false);
        })
        .catch((err)=> {
            console.log(err)
        });
    };
    
    useEffect(() => {
        getTimetable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: '100%',
                        // height: ,
                        alignItems: "center",
                    }}
                >
                    Loading.....
                </Text>
        ) : (
            <WebView
                source={{html: `<iframe width="97%" height="30%" src='https://docs.google.com/spreadsheets/d/e/${tturl}/pubhtml?widget=true&amp;headers=false' ></iframe>`}}
                style={{marginTop: 20}}
            />
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: "#fff",
      padding: 20,
      justifyContent: 'center'
    }
  });






  
//     
//         {loading ? (
//           <h1
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               height: "inherit",
//               alignItems: "center",
//             }}
//           >
//             Loading.....
//           </h1>
//         ) : (
//           <iframe
//             title="Timetable Frame"
//             src={`https://docs.google.com/spreadsheets/d/e/${tturl}/pubhtml?widget=true&amp;headers=false`}
//             style={{
//               height: "50%",
//               width: "70%",
//               border: "0.5px solid var(--first-color)",
//             }}
//           />
//         )}