
import getThemeColors from "@/ีutils/getThemeColors";
const themeName: string = process.env.NEXT_PUBLIC_THEME || 'main';
const colors = getThemeColors(themeName);

const Home: React.FC = () => {
  return (
      <div style={{ color: colors['@primary-color'],fontSize: '40px',display:'flex',justifyContent:'center' }}>HOME PAGE</div>
  );
}

export default Home;