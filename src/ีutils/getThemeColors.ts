interface ThemeColors {
    '@primary-color': string;
    '@secondary-color': string;
    [key: string]: string;
}

const getThemeColors = (themeName: string): ThemeColors => {
    if (themeName === 'main') {
        return require('../styles/theme/main/theme.js');
    } else if (themeName === 'secondary') {
        return require('../styles/theme/secondary/theme.js');
    }
    return {"@primary-color": "", "@secondary-color": ""};
};

export default getThemeColors;