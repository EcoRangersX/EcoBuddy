import { ScrollView, View } from 'react-native';
import Header from '@/components/Header';
import AccountSettingsSection from '@/components/settings/AccountSettingsSection';
import NotificationPreferencesSection from '@/components/settings/NotificationPreferencesSection';

export default function Settings() {
  return (
    <ScrollView>
      <Header />
      <AccountSettingsSection />
      <NotificationPreferencesSection />
    </ScrollView>
  );
}
