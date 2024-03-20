import { themeIcons } from "@/shared/ui/assets"
import { useTheme } from "@/app/providers/ThemeProvider"

const ThemeButton = () => {
  const {isDark, toggleTheme} = useTheme()
  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
      />
  )
}

export default ThemeButton