import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { IconProvider, iconProviders } from '@/constants/IconProviders';

interface TabBarIconProps extends IconProps<string> {
  provider: IconProvider;
}

export function TabBarIcon({ provider, name, style, ...rest }: TabBarIconProps) {
  const IconComponent = iconProviders[provider];

  if (!IconComponent) {
    throw new Error(`Unknown icon provider: ${provider}`);
  }

  return <IconComponent name={name} size={26} style={[{ marginBottom: -7}, style]} {...rest} />;
}
