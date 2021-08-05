import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import TimetableStack from "./timetableStack";
import PortionStack from './PortionStack';
import TextbookStack from './TextbookStack';
import NotesStack from './NotesStack';
import RecommendationStack from './RecommendationStack';
import PeopleStack from './PeopleStack';
import AboutStack from './AboutStack';
import UserStack from './UserStack';

const RootDrawerNavigator = createDrawerNavigator({
    Timetable: {
        screen: TimetableStack,
    },
    Portion: {
        screen: PortionStack,
    },
    Textbook: {
        screen: TextbookStack,
    },
    Notes: {
        screen: NotesStack,
    },
    Recommendation: {
        screen: RecommendationStack,
    },
    People: {
        screen: PeopleStack,
    },
    About: {
        screen: AboutStack,
    },
    User: {
        screen: UserStack,
    }
});

export default createAppContainer(RootDrawerNavigator);