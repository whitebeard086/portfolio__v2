import { AppNavigation, NavLink } from "./NavigationDotsStyles"

const NavigationDots = ({ active }) => {
  return (
    <AppNavigation hero>
        {["home", "about", "projects", "skills", "contact"].map((item, index) => (
            <NavLink
                hero
                key={index + item}
                href={`#${item}`}
                style={active === item ? { backgroundColor: 'rgb(45, 46, 73)' } : {}}
            />
        ))}
    </AppNavigation>
  )
}
export default NavigationDots