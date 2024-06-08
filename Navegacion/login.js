import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.background}
      >
        <Text style={styles.title}>Bienvenido!</Text>
        <TextInput
          placeholder="multimedios@gmail.com"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>¿Has olvidado tu contraseña?</Text>
        <TouchableOpacity>
          <Text style={styles.registerText}>No tiene cuenta. Registrarse</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#00a2e8',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    marginTop: 15,
    color: '#fff',
    textDecorationLine: 'underline',
  }
});

export default Login;
