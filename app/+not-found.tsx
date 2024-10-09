import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, Pressable} from 'react-native';



export default function NotFoundScreen() {

  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text className="">This screen doesn't exist.</Text>

      <Pressable
        onPress={() => router.navigate('/(Auth)/Login')}
      >
        <Text className="">Go to home screen!</Text>
      </Pressable>

    </>
  );
}
