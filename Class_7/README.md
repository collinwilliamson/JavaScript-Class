# Class 7

## Assignments

1. (5 pts) Ask a user to enter a year. Display [Chinese zodiac](https://en.wikipedia.org/wiki/Chinese_zodiac) sign that is assigned to the year and also a few subsequent years of that sign. Use switch statement.

## Homework

1. (11 pts) With the separate prompts ask user to enter name, email, birth day and then password twice. Do simple validation for email and prompt again unless input contains @ symbol. If passwords do not match, ask again until they do. If user age is less than 13 years, display "To register one must be 13 years or older". Otherwise, using constructor function create an object with user details. Display "Successfully created account for " and show entered account information.

P.S. Create the separate files for each assignment and homework. Create two branches, one for assignments and one for homework. Push your changes to the corresponding Github branches. Create pull requests to your master. You can use sample.html as a template. echo function defined in helper.js file will display results in the html.


Self-Ececuting Anonymous Function
    You would use this SEAF to protect your function with likely the same variables that have been defined earlier in the script.
    They are noted by () around the function.

    Make sure your code for all projects moving forward has this protection on it.

        (Function () {

        }) (); - the parentheses at the end of the function is the most important part. That is what makes it isolated.


Switch
    A switch is used when you have more options so when an action is used, you are executing certain cases or would be the default case. It will try and match information and log information. It's very similar to what if else statements are. 

    It has a quirk so if you don't have a break between items, it will execute all the statements if they are true. 

    Switch (fruit) {
        case "banana":
            console.log("$.50");
            break;
        case "apple":
            console.log("$2");
            break;
        case "apricot";
            console.log("$1");
        break;
        default;
            console.log("we don't have this fruit")

    }