import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika untuk login
    console.log('Login:', { username, password });
    // Navigasi ke halaman beranda atau dashboard
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Login BCA Mobile</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <ThemedText type="subtitle" style={styles.registerText}>
        Belum punya akun?{' '}
        <ThemedText type="link" onPress={() => navigation.navigate('Register')}>
          Daftar di sini
        </ThemedText>
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  registerText: {
    marginTop: 16,
    textAlign: 'center',
  },
});
