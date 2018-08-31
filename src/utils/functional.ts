import { isDefined } from "./general";

export const funcIf = (condition: boolean, thenDo: () => any, elseDo?: any) => {
    if (condition) {
        thenDo()
    }
    else if (isDefined(elseDo)){
        elseDo()
    }
}