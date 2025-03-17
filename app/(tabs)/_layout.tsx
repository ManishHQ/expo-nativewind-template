import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
			<Tabs.Screen
				name='home/index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons size={20} name='home' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='chat/index'
				options={{
					title: 'Chat',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name='chatbubble-ellipses-outline'
							size={20}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
