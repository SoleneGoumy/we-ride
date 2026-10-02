import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useQuery } from "@tanstack/react-query";
import type { WindApiResponse, WindData } from "../@types/Wind";
import {
	getTime,
	getWindConditionLabel,
	getWindDirection,
	getWindDirectionArrow,
} from "../utils/wind.utils";
import WindSpeed from "./WindSpeed";

const pioupiouApiUrlCNA = "http://api.pioupiou.fr/v1/live/1527";
// url for the balloon station if CNA is down, but the data is not as good as CNA
const pioupiouApiUrlBalloon = "http://api.pioupiou.fr/v1/live/163";

const fetchWindData = async (): Promise<WindData> => {
	const res = await fetch(pioupiouApiUrlBalloon);
	if (!res.ok) throw new Error("Failed");
	const json: WindApiResponse = await res.json();
	return json.data;
};

export default function Home() {
	const { isPending, error, data } = useQuery<WindData>({
		queryKey: ["repoData"],
		queryFn: fetchWindData,
	});

	if (error) return `An error has occurred: ${error.message}`;

	console.log(data);

	return (
		<View style={styles.container}>
			{/* HEADER */}
			<View style={styles.header}>
				<Text style={styles.title}>WE RIDE</Text>
				<Text style={styles.subtitle}>Serre-Ponçon</Text>
				<Text style={styles.station}>{isPending ? "..." : data.meta.name}</Text>
				<Text style={styles.update}>
					LAST UPDATE {isPending ? "..." : getTime(data.measurements.date)}
				</Text>
			</View>

			{/* WIND */}
			<View style={styles.wind}>
				{isPending ? (
					<Text style={styles.loading}> loading data ...</Text>
				) : (
					<View>
						<Text style={styles.direction}>
							{getWindDirectionArrow(data.measurements.wind_heading)}
							{getWindDirection(data.measurements.wind_heading)}
						</Text>

						<WindSpeed windMeasurements={data.measurements} />

						<Text style={styles.label}>
							{getWindConditionLabel(data.measurements.wind_speed_avg)}
						</Text>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		gap: 40,
	},

	loading: {
		color: "white",
		fontSize: 24,
		fontWeight: "700",
	},

	header: {
		alignItems: "center",
		marginTop: 10,
	},

	title: {
		color: "white",
		fontSize: 42,
		fontWeight: "900",
		fontFamily: "Caveat",
	},

	subtitle: {
		color: "white",
		fontSize: 36,
		fontFamily: "Caveat",
		marginTop: -15,
	},

	station: {
		color: "#AFC8D3",
		margin: 6,
	},

	update: {
		color: "#AFC8D3",
	},

	wind: {
		flex: 1,
		alignItems: "center",
	},

	direction: {
		color: "#D8F7FF",
		fontSize: 16,
		marginBottom: 10,
		textAlign: "center",
	},

	label: {
		color: "#D8F7FF",
		fontSize: 32,
		marginTop: 40,
		fontFamily: "Caveat",
		textAlign: "center",
	},
});
