import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../Auth";
import { firebaseApp } from "../../firebase";

export default function User() {
  const {
    setCurrentUser,
    setGetFireAuthUser,
    setDataFetched,
    setCurrentUserData,
    setCollegeOptions,
    setBranchOptions,
    setYearOptions,
    setSelectedCollege,
    setSelectedBranch,
    setSelectedYear,
  } = useContext(AuthContext);

  const handleSignOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser([]);
        setCurrentUserData([]);
        setDataFetched(false);
        setGetFireAuthUser(false);
        setCollegeOptions([]);
        setBranchOptions([]);
        setYearOptions([]);
        setSelectedCollege(null);
        setSelectedBranch(null);
        setSelectedYear(null);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{
          width: 100,
          marginTop: 5,
          backgroundColor: "#0d47a1",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
        onPress={() => handleSignOut()}
      >
        <Text
          style={{
            color: 'white'
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    alignItems: 'center'
  },
});
