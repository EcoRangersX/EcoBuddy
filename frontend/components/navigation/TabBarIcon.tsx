import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { IconProvider, iconProviders } from '@/constants/IconProviders';

interface TabBarIconProps extends IconProps<string> {
  provider: IconProvider;
}

/**
 * Renders a tab bar icon.
 *
 * @param provider - The icon provider.
 * @param name - The name of the icon.
 * @param style - The style of the icon.
 * @param rest - Additional props for the icon component.
 * @throws Error if the icon provider is unknown.
 * @returns The rendered tab bar icon.
 */
export function TabBarIcon({ provider, name, style, ...rest }: TabBarIconProps) {
  const IconComponent = iconProviders[provider];

  if (!IconComponent) {
    throw new Error(`Unknown icon provider: ${provider}`);
  }

  return <IconComponent name={name} size={26} style={[{ marginBottom: -7}, style]} {...rest} />;
}
