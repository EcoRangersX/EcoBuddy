import { View, Text } from 'react-native';
import { useState } from 'react';
import NotificationToggle from './NotificationToggle';

interface NotificationPreferencesSectionProps {
  aqiAlerts?: boolean;
  quizReminders?: boolean;
  dailyEcoTip?: boolean;
  newArticleAlerts?: boolean;
}

const NotificationPreferencesSection = ({
  aqiAlerts = true,
  quizReminders = true,
  dailyEcoTip = true,
  newArticleAlerts = true,
}: NotificationPreferencesSectionProps) => {
  const [aqiAlertsEnabled, setAqiAlertsEnabled] = useState(aqiAlerts);
  const [quizRemindersEnabled, setQuizRemindersEnabled] =
    useState(quizReminders);
  const [dailyEcoTipEnabled, setDailyEcoTipEnabled] = useState(dailyEcoTip);
  const [newArticleAlertsEnabled, setNewArticleAlertsEnabled] =
    useState(newArticleAlerts);

  return (
    <View className="p-3">
      <Text className="text-lg rounded-full mb-4 text-center p-2 bg-white border-2 border-[#000000]">
        Notification Preferences
      </Text>
      <NotificationToggle label='Aqi Alerts' value={aqiAlertsEnabled} onValueChange={setAqiAlertsEnabled} />
      <NotificationToggle label='Quiz Reminders' value={quizRemindersEnabled} onValueChange={setQuizRemindersEnabled} />
      <NotificationToggle label='Daily Eco Tip' value={dailyEcoTipEnabled} onValueChange={setDailyEcoTipEnabled} />
      <NotificationToggle label='New Article Alerts' value={newArticleAlertsEnabled} onValueChange={setNewArticleAlertsEnabled} />
    </View>
  );
};

export default NotificationPreferencesSection;
