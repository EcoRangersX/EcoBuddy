import { ScrollView, View } from "react-native";
import LeaderboardUserList from "@/components/leaderboard/LeaderboardUserList";
import YourScoresSection from '@/components/quizzes/YourScoresSection';
import { takenQuizzesStatic, leaderboardUsersStatic } from "@/constants/StaticData";


export default function Leaderboard () {
    return (
        <ScrollView>
        <View className="p-3">
            <YourScoresSection
            streak={1}
            bestStreak={11}
            takenQuizzes={takenQuizzesStatic}
            />
            <LeaderboardUserList users={leaderboardUsersStatic} />
        </View>
        </ScrollView>
    );
}
