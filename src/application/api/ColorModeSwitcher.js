// Imports of the necessary packages
import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// Definition of the ColorModeSwitcher component
const ColorModeSwitcher = (props) => {
  // Get the current color mode and the function to toggle it from Chakra UI
  const { colorMode, toggleColorMode } = useColorMode();

  // Verify if the current color mode is Dark
  const isDark = colorMode === "dark";

  // Return the color mode toggle button
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      {...props}
    />
  );
};

// Export the ColorModeSwitcher component
export default ColorModeSwitcher;
