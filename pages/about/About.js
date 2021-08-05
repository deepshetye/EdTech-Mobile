import React, { useEffect, useState, useContext } from "react";
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import config from '../../config';
import { AuthContext } from "../../Auth";
const axios = require("axios"); 

export default function About() {

  const { currentUserData } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [collegeResult, setCollegeResult] = useState(null);

    const getSubjects = () => {
        axios
          .get(`${config.REACT_APP_API_URL}college-list/`, {
            params: {
              college_code: currentUserData[0].value,
            },
          })
          .then((res) => {
            const results = res.data.results;
            setCollegeResult(results[0]);
            setLoading(false);
          });
        return;
      };
    
      useEffect(() => {
        getSubjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <View style={styles.container}>
            { loading ? (
                <Text>Loading</Text>
            ) : (
                <View
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: StatusBar.currentHeight
                    }}
                >
                    <Image
                        style={{
                            height: 170,
                            width: '50%',
                            
                        }}
                        source={{
                        uri: collegeResult.link_image,
                        }}
                    />
                    <Text>{collegeResult.name}</Text>
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


  

 
        //   <img alt="College Logo" src={collegeResult.link_image} />
        //   <div
        //     style={{
        //       marginTop: "10px",
        //       fontSize: "x-large",
        //       textAlign: "center",
        //     }}
        //   >
        //     {collegeResult.name}
        //   </div>
        //   <h5>EST. {collegeResult.established}</h5>
        //   <div style={{ marginTop: "5px" }}>{collegeResult.location}</div>
        //   <div style={{ marginTop: "20px" }}>
        //     <a href={collegeResult.website_link} target="_blank" rel="noopener noreferrer">
        //       <i
        //         className="bx bx-link"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //     <a
        //       href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${collegeResult.email}`}
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <i
        //         className="bx bx-mail-send"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //     <a href={collegeResult.linkedin} target="_blank" rel="noopener noreferrer">
        //       <i
        //         className="bx bxl-linkedin"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //     <a href={collegeResult.instagram} target="_blank" rel="noopener noreferrer">
        //       <i
        //         className="bx bxl-instagram"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //     <a href={collegeResult.facebook} target="_blank" rel="noopener noreferrer">
        //       <i
        //         className="bx bxl-facebook"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //     <a href={collegeResult.twitter} target="_blank" rel="noopener noreferrer">
        //       <i
        //         className="bx bxl-twitter"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //     <a
        //       href={collegeResult.youtube}
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <i
        //         className="bx bxl-youtube"
        //         style={{
        //           color: "black",
        //           fontSize: "1.5rem",
        //           padding: "0 10px",
        //         }}
        //       />
        //     </a>
        //   </div>
        //   <div
        //     style={{
        //       width: "100%",
        //       height: "50vh",
        //       marginTop: "15px",
        //       display: "flex",
        //       alignItems: "center",
        //       justifyContent: "center",
        //     }}
        //   >
        //     <iframe
        //     title="Google map link for college"
        //       src={collegeResult.static_map_src}
        //       style={{
        //         width: "85%",
        //         height: "85%",
        //         border: "0",
        //         loading: "lazy",
        //       }}
        //     ></iframe>
        //   </div>
        // </div>
    