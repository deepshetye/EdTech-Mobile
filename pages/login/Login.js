import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AuthContext } from "../../Auth";
import { auth } from "../../firebase";
import * as Facebook from "expo-facebook";
import firebase from "firebase/app";
import * as Google from "expo-google-app-auth";

export default function Login(props) {
  const { setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onLogin = (email, password) => {
    try {
      auth.signInWithEmailAndPassword(email, password).then((result) => {
        var user = result.user;
        setCurrentUser(user);
      });
    } catch (error) {
      setErrMsg("Invalid Credentials");
    }
  };

  async function loginWithFacebook() {
    try {
      await Facebook.initializeAsync({
        appId: "1068382537034014",
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);

        const userCredential = await firebase
          .auth()
          .signInWithCredential(credential)
          .catch((err) => {
            console.log(err, "from firebase");
          });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  function onSignIn(googleUser) {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            var user = result.user;
            setCurrentUser(user);
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        androidClientId:
          "461160782841-bgg2mfijrn64ocb27oe4chotcaeglceb.apps.googleusercontent.com",
        iosClientId:
          "461160782841-k5ulj4qgk6pqagstn85ou296luc81plo.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginTop: 8 }}>Welcome Back!</Text>

      <Text style={{ fontSize: 16, color: "gray", marginTop: 10 }}>
        Sign In To Continue
      </Text>

      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Email"
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={(text) => {
          setErrMsg(""), setEmail(text);
        }}
      />

      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={(text) => {
          setErrMsg(""), setPassword(text);
        }}
      />

      <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
        {errMsg}
      </Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => onLogin(email, password)}
          style={{
            width: 200,
            marginTop: 30,
            backgroundColor: "#0d47a1",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
            Login Now
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 20, textAlign: "center" }}>
        Forgot Password ?
      </Text>

      <View style={styles.socialButtons}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            marginHorizontal: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3f51b5",
          }}
          onPress={() => loginWithFacebook()}
        >
          <FontAwesome name="facebook" size={24} color="white" />
        </View>

        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            marginHorizontal: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d32f2f",
          }}
          onPress={() => signInWithGoogleAsync()}
        >
          <FontAwesome name="google" size={24} color="white" />
        </View>

        {/* <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            marginHorizontal: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#03a9f4",
          }}
        >
          <FontAwesome name="twitter" size={24} color="white" />
        </View> */}

        {/* <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            marginHorizontal: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <SimpleLineIcons name="social-github" size={24} color="white" />
        </View> */}

      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "gray" }}>Don't Have An Account ?</Text>
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => props.navigation.navigate("Sign Up")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  socialButtons: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
});
