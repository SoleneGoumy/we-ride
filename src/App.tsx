import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, ImageBackground, View } from "react-native";
import Home from "./components/Home";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function App() {
	useFonts({
		Caveat: require("./assets/fonts/Caveat.ttf"),
	});

	return (
		<QueryClientProvider client={queryClient}>
			<ImageBackground
				source={require("./assets/wing.webp")}
				style={styles.background}
				resizeMode="cover"
			>
				<View style={styles.overlay}>
					<Home />
				</View>
			</ImageBackground>
		</QueryClientProvider>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.35)",
	},
});
