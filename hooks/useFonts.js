import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";

const UseFonts = () => {
	const [fontsLoaded] = useFonts({
		Dancing: require("./../assets/fonts/Dancing.ttf"),
		"Merriweather-Italic": require("./../assets/fonts/Merriweather-Italic.ttf"),
		"Merriweather-Regular": require("./../assets/fonts/Merriweather-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	useEffect(() => {
		const prepare = async () => await SplashScreen.preventAutoHideAsync();
		prepare();
	}, []);

	return {
		fontsLoaded,
		onLayoutRootView,
	};
};

export default UseFonts;
