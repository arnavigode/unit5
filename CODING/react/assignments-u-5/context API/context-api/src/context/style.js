import StyleContext from "./styleContext";
const StyleState = (props) => {
	const state = {
		dark: "gray",
		light: "white",
	};
	return (
		<StyleContext.Provider value={state}>
			{props.children}
		</StyleContext.Provider>
	);
};
export default StyleState;