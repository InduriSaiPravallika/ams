const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
            case "Home":
            return "Home"; 
        default:
            return "Login";
    }
}