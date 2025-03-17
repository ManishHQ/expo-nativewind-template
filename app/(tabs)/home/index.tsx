import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
	return (
		<View>
			<Text className='text-blue-500'>Home Screen</Text>
			<Link href={'/'}>Go to onboarding</Link>
		</View>
	);
}
