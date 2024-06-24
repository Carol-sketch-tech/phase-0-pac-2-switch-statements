// switch statements 
// provides an alternative to if ..else statements that might be long and repetitive sometimes.
// basic syntax for switch statements 
// switch (expression){
//     case value:
        // code block 1
    //     break;
    //  case value2:
            // code block2
    //     break;
    //  default:
                // default code block;

// }  expression is the value that you want to compare
// case values represent the possible value of the expression
// break statements terminate the switch statements without it 
// execution will continue into the next case.
// default specifies the code to run if none of these cases match teh expression.

let day = 12;
let dayname;
switch (day){
    case 1:
        dayname = "sunday"
        break;
        case 2 :
            dayname = "monday"
             break;
             case 3:
                dayname = "tuesday"
                break;
                case 4:
                    dayname="wednesday"
                    break;
                    case 5 :
                        dayname ="thursday"
                        break;
                        case 6:
                            dayname = "friday"
                            break;
                            case 7:
                                dayname ="saturday"
                                break;
                                default:
                                    dayname = "Oops! sorry no more days left in a week."
}
 console.log(dayname)