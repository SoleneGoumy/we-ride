/**
 * Utility functions for wind speed conversions.
 */
export const msToKmh = (ms: number): number => {
	return ms * 3.6;
};

export const kmhToMs = (kmh: number): number => {
	return kmh / 3.6;
};

/**
 * Utility functions for wind direction conversions.
 */
export const WIND_DIRECTIONS = [
	"Nord",
	"Nord-Nord-Est",
	"Nord-Est",
	"Est-Nord-Est",
	"Est",
	"Est-Sud-Est",
	"Sud-Est",
	"Sud-Sud-Est",
	"Sud",
	"Sud-Sud-Ouest",
	"Sud-Ouest",
	"Ouest-Sud-Ouest",
	"Ouest",
	"Ouest-Nord-Ouest",
	"Nord-Ouest",
	"Nord-Nord-Ouest",
] as const;

export const getWindDirection = (deg: number): string => {
	const normalized = ((deg % 360) + 360) % 360; // sécurité si valeur négative
	const index = Math.round(normalized / 22.5) % 16;

	return WIND_DIRECTIONS[index];
};

export const getWindDirectionArrow = (deg: number): string => {
	const arrows = [
		"↓",
		"↙",
		"↙",
		"↙",
		"←",
		"↖",
		"↖",
		"↖",
		"↑",
		"↗",
		"↗",
		"↗",
		"→",
		"↘",
		"↘",
		"↘",
	];

	const normalized = ((deg % 360) + 360) % 360;
	const index = Math.round(normalized / 22.5) % 16;

	return arrows[index];
};

/**
 * Utility function for wind label.
 */
export const getWindConditionLabel = (kmh: number): string => {
	if (kmh < 5) return "Pas de vent, c'est mort ! ";
	if (kmh < 10) return "Vent très faible, ça vaut pas trop le coup ! ";
	if (kmh < 15) return "Vent léger, ça peut rentrer mais c’est limite ! ";
	if (kmh < 20) return "Bonne brise, ça commence à être jouable ! ";
	if (kmh < 25) return "Bon vent, ça vaut le déplacement ! ";
	if (kmh < 30) return "Très bon vent, fonce ! ";
	if (kmh < 35) return "Grosse session en vue, ça envoie ! ";
	if (kmh < 40) return "Baston, faut être à l’aise ! ";
	if (kmh < 50) return "Très grosse baston, réservé solides ! ";
	return "Survie totale, à éviter sauf experts ! ";
};

/**
 * Utility function to format the update time from ISO string to "HH:mm" format.
 */
export const getTime = (dateString: string): string =>
	new Date(dateString).toLocaleTimeString("fr-FR", {
		hour: "2-digit",
		minute: "2-digit",
	});
