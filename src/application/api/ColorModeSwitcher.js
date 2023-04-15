import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

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

export default ColorModeSwitcher;
