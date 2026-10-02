import { View, Text, StyleSheet } from "react-native";
import type { WindMeasurements } from "../@types/Wind";

export default function WindSpeed({
	windMeasurements,
}: {
	windMeasurements: WindMeasurements;
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.max}>max {windMeasurements.wind_speed_max} km/h</Text>

			<View style={styles.average}>
				<Text style={styles.speed}>{windMeasurements.wind_speed_avg}</Text>
				<Text style={styles.unit}>km/h</Text>
			</View>

			<Text style={styles.min}>min {windMeasurements.wind_speed_min} km/h</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: "#e7f8fa",
		padding: 6,
		margin: 6,
		borderRadius: 6,
		alignItems: "center",
	},

	speed: {
		color: "#D8F7FF",
		fontSize: 76,
		fontWeight: "700",
		marginRight: 6,
	},

	average: {
		flexDirection: "row",
		alignItems: "baseline",
	},

	unit: {
		color: "#D8F7FF",
		fontSize: 26,
	},

	min: {
		color: "#8aeffd",
		fontSize: 20,
	},

	max: {
		color: "#fea1bd",
		fontSize: 20,
	},
});
