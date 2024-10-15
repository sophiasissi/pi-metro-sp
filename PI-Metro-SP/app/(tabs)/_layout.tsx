import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { ThemedView} from '@/components/ThemedView'; 

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/assinatura-chapada.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'white'}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Senha"
        secureTextEntry={true}
      />

     <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login pressionado')}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => console.log('Esqueci a senha pressionado')}>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => console.log('Cadastro pressionado')}>
        <Text style={styles.register}>Realizar cadastro</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E1EFFE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 200,
    marginBottom: 30,
  },
  input: {
    backgroundColor:"#799DD4",  
    width: '90%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007bff',
    marginTop: 10,
    textAlign: 'center',
  },
  register: {
    color: '#007bff',
    marginTop: 20,
    textAlign: 'center',
  },
});
