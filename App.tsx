import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useStore } from './src/store/useStore';
import { INITIAL_USER_PROFILE, MOCK_JOBS } from './src/constants';

function App(): React.JSX.Element {
  const { setUser, setLocalJobs, setIsOnline } = useStore();

  useEffect(() => {
    // Initialize user profile and jobs
    setUser(INITIAL_USER_PROFILE);
    setLocalJobs(MOCK_JOBS);
    setIsOnline(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});

export default App;
