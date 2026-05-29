import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HomeScreen() {
	const updatedAt = "14:32";

	const windDirection = "NORD-EST";
	const windSpeed = 24;

	const windMin = 12;
	const windMax = 37;

	return (
		<ImageBackground
			source={require("./assets/voile.webp")}
			style={styles.background}
		>
			<View style={styles.overlay}>
				<View style={styles.container}>
					{/* HEADER */}
					<View style={styles.header}>
						<Text style={styles.title}>WE RIDE</Text>
						<Text style={styles.subtitle}>Balise Chadenas Embrun 1527</Text>
						<Text style={styles.update}>LAST UPDATE {updatedAt}</Text>
					</View>

					{/* WIND */}
					<View style={styles.wind}>
						<Text style={styles.direction}>{windDirection}</Text>

						<Text style={styles.minmax}>Max {windMax} km/h</Text>

						<Text style={styles.speed}>{windSpeed}</Text>
						<Text style={styles.unit}>km/h</Text>

						<Text style={styles.minmax}>Min {windMin} km/h</Text>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1, width: "100%" },

	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.35)",
	},

	container: {
		flex: 1,
		padding: 20,
		gap: 50,
	},

	header: {
		alignItems: "center",
		marginTop: 10,
	},

	title: {
		color: "white",
		fontSize: 28,
		fontWeight: "900",
	},

	subtitle: {
		color: "#AFC8D3",
		margin: 6,
	},

	update: {
		color: "#47eaff",
		borderWidth: 2,
		borderColor: "#47eaff",
		padding: 6,
		borderRadius: 6,
	},

	wind: {
		flex: 1,
		alignItems: "center",
	},

	direction: {
		color: "#D8F7FF",
		fontSize: 20,
		fontWeight: "700",
		marginBottom: 10,
	},

	speed: {
		color: "white",
		fontSize: 110,
		fontWeight: "900",
	},

	unit: {
		color: "#D8F7FF",
		fontSize: 26,
		marginTop: -10,
	},

	minmax: {
		color: "#47eaff",
		fontSize: 14,
		marginTop: 12,
		opacity: 0.9,
	},
});
