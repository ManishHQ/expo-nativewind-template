import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View>
				<View>This screen doesn't exist.</View>
				<Link href={'/'}>
					<Text>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}
