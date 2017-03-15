export const crashReporter = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {        
        AppInsights.trackEvent("Crash report", {
            action: action.type,
            didFail: "true",           
            payload: action.payload 
        });
    }
}