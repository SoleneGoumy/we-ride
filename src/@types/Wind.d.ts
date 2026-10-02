export interface WindApiResponse {
	doc: string;
	license: string;
	attribution: string;
	data: WindData;
}

export interface WindData {
	id: number;
	meta: WindMeta;
	location: WindLocation;
	measurements: WindMeasurements;
	status: WindStatus;
}

export interface WindMeta {
	name: string;
}

export interface WindLocation {
	latitude: number;
	longitude: number;
	date: string; // ISO string
	success: boolean;
	hdop: number;
}

export interface WindMeasurements {
	date: string; // ISO string
	pressure: number | null;
	wind_heading: number;
	wind_speed_avg: number;
	wind_speed_max: number;
	wind_speed_min: number;
}

export type WindState = "on" | "off";

export interface WindStatus {
	date: string; // ISO string
	snr: number;
	state: WindState;
}
