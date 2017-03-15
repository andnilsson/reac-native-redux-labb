import { addNavigationHelpers } from 'react-navigation';

const AppNavigator = StackNavigator(AppRouteConfigs);

export const navigation = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}