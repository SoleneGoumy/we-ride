import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ImageBackground,
	Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
	// MOCK DATA
	const windSpeed = 24;
	const gust = 37;
	const direction = "NORD-EST";
	const updatedAt = "14:32";

	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={require("./assets/voile.webp")}
				style={styles.background}
			>
				<LinearGradient
					colors={["rgba(0, 0, 0, 0.01)", "rgba(0, 0, 0, 0.5)"]}
					style={styles.overlay}
				>
					{/* HEADER */}
					<View style={styles.header}>
						<Text style={styles.title}>We Ride</Text>
						<Text style={styles.subtitle}>
							Balise CHADENAS 1527 · MAJ {updatedAt}
						</Text>
					</View>

					{/* CENTER */}
					<View style={styles.center}>
						{/* WIND DIRECTION */}
						<View style={styles.compass}>
							<Feather
								name="navigation"
								size={25}
								color="#47D7FF"
								style={{
									transform: [{ rotate: "45deg" }],
								}}
							/>
						</View>

						{/* WIND SPEED */}
						<Text style={styles.windSpeed}>{windSpeed}</Text>

						<Text style={styles.unit}>km/h</Text>

						<Text style={styles.direction}>{direction}</Text>

						{/* GUST */}
						<View style={styles.gustBadge}>
							<Text style={styles.gustText}>Rafales {gust} km/h</Text>
						</View>
					</View>

					{/* GRAPH */}
					<View style={styles.graphContainer}>
						<Text style={styles.graphTitle}>48 DERNIÈRES HEURES</Text>

						<Svg width={width - 60} height={140}>
							<Path
								d="
                  M0 110
                  C40 100, 70 95, 100 90
                  S180 80, 220 70
                  S280 55, 320 50
                  S380 65, 420 45
                  S500 60, 540 52
                "
								stroke="#47D7FF"
								strokeWidth="4"
								fill="none"
							/>
						</Svg>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: "100%",
		height: "100%",
	},

	overlay: {
		flex: 1,
	},

	container: {
		flex: 1,
		paddingHorizontal: 20,
	},

	header: {
		marginTop: 10,
		alignItems: "center",
	},

	title: {
		color: "white",
		fontSize: 34,
		fontWeight: "900",
		letterSpacing: 2,
	},

	subtitle: {
		color: "#AFC8D3",
		marginTop: 6,
		fontSize: 14,
	},

	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	compass: {
		width: 60,
		height: 60,
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(71,215,255,0.08)",
		borderWidth: 1,
		borderColor: "rgba(71,215,255,0.2)",
		marginBottom: 20,
	},

	windSpeed: {
		color: "white",
		fontSize: 140,
		fontWeight: "900",
		lineHeight: 140,
	},

	unit: {
		color: "#D8F7FF",
		fontSize: 34,
		fontWeight: "600",
		marginTop: -10,
	},

	direction: {
		color: "#47D7FF",
		fontSize: 26,
		fontWeight: "700",
		marginTop: 24,
		letterSpacing: 1,
	},

	gustBadge: {
		marginTop: 24,
		backgroundColor: "rgba(0,0,0,0.35)",
		paddingHorizontal: 22,
		paddingVertical: 14,
		borderRadius: 999,
		borderWidth: 1,
		borderColor: "rgba(255,255,255,0.06)",
	},

	gustText: {
		color: "white",
		fontSize: 18,
		fontWeight: "600",
	},

	graphContainer: {
		marginBottom: 40,
		backgroundColor: "rgba(10,18,28,0.72)",
		borderRadius: 30,
		padding: 20,
		borderWidth: 1,
		borderColor: "rgba(255,255,255,0.05)",
	},

	graphTitle: {
		color: "#D8F7FF",
		fontSize: 15,
		fontWeight: "700",
		marginBottom: 18,
		letterSpacing: 1,
	},
});
