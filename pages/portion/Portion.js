import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import config from '../../config';
import { AuthContext } from "../../Auth";
import { FontAwesome } from "@expo/vector-icons";
const axios = require("axios");

export default function Portion() {

    const { currentUserData } = useContext(AuthContext);
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSubjects = () => {
        axios
            .get(
            `${config.REACT_APP_API_URL}subject-list/${currentUserData[0].value}/`,
            {
                params: {
                page: 1,
                page_size: 100,
                year: currentUserData[2].value,
                branch__branch_code: currentUserData[1].value,
                },
            }
            )
            .then((res) => {
            const results = res.data.results;
            setSubjects(results);
            setLoading(false);
            });
    };
    
    useEffect(() => {
        getSubjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    Loading.....
                </Text>
            ) : (
                <View id="textbook-block">
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginBottom: 10
                            
                        }}
                    >
                        <Text style={{ margin: 5, color: "rgb(32 31 33)" }}>
                            SUBJECTS
                        </Text>
                    </View>
                    <ScrollView
                        style={{
                            display: 'block',
                            width: '100%',
                            // flexDirection: 'row',
                            // flex: 1,
                            marginBottom: 30
                            
                        }}
                    >
                        <View style={{display: 'list-item', flexDirection:'row', flexWrap:'wrap'}}>
                            {subjects.map((subject) => {
                                return (
                                    <TouchableOpacity 
                                    onPress={() => Linking.openURL(`https://drive.google.com/file/d/${subject.portion_link}/view?usp=sharing`)}
                                    style={{
                                        display: 'inline-block',
                                        margin: 10,
                                        width: 125,
                                        overflow: 'hidden',
                                        padding: 10,
                                        borderRadius: 5,
                                        color: '#5f6368',
                                        marginHorizontal: 2,
                                        borderWidth: 1,
                                        borderColor: 'rgb(218, 218, 218)'
                                    }}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                            <FontAwesome name="folder" size={20} color="black" />
                                            <Text style={{paddingLeft: 10}}>{subject.subject_code}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
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
    }
  });