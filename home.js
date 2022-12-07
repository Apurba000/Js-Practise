
    /*

    This is practise Project By APURBA BISWAS
    #### Not for other use ####

    Web dev starter project : 
https://github.com/pluralsight/web-dev-starter

** To run the lite server **
npm run start



Adding script in index.html
<script src="./filename.js">   		***** Wrong
<script src="./filename.js"> </script>    ***** Right

    */


// start the program
run();

function run(){
    let weclome = 'welcome';
    const message = 'Hello world!';
    
    let varAndLetDiffMessage = 'Use let instead of var key word';
    
    showMessage(message);
    printConsole(varAndLetDiffMessage);
    operator();
    Strings();
    nullAndUndefined();
}

// Example of js operator
function operator(){
    const operatorDefination = 'An Operator is a symbol that changes/operates some values';
    printConsole(operatorDefination);

    let price = 30;
    printConsole(typeof price);
    printConsole('price = ' + price);
    printConsole('price + 1 = ' + (price + 1));
    printConsole('price - 1 = ' + (price - 1));
    printConsole('price * 2 = ' + (price * 2));
    printConsole('price / 2 = ' + (price / 2));
    printConsole('price % 4 = ' + (price % 4));
    printConsole('price += 1 = ' + (price += 1));
    printConsole('price -= 1 = ' + (price -= 1));
    printConsole('price *= 2 = ' + (price *= 2));
    printConsole('price /= 2 = ' + (price /= 2));
    printConsole('price %= 4 = ' + (price %= 4));
    printConsole('++price = ' + (++price));
    printConsole('--price = ' + (--price));
    printConsole('price++ = ' + (price++));
    printConsole('price = ' + (price) + ' price++ this operation assign value after incrementation. DO NOT USE IT');
    printConsole('price-- = ' + (price--));
    printConsole('price = ' + (price) + ' price-- this operation assign value after decrement. DO NOT USE IT');

    // operator precendece
    printConsole(' ***Operator Precedence*** ');
    let priceNew = 10 + 2 * 2;
    printConsole( '10 + 2 * 2 = ' + priceNew);
    priceNew = (10 + 2) * 2;
    printConsole( '(10 + 2) * 2 = ' + priceNew);

    const moreAboutOperator = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence';
    printConsole('Vist : ' + moreAboutOperator);


    // Number precednce
    priceNew = 2.3 + 1.3;
    printConsole(priceNew);
    priceNew = 'test';
    printConsole(priceNew);
    priceNew = 1 + 2;
    printConsole(priceNew);
    priceNew = 10 + 'test' + 'hello';
    printConsole(priceNew);

    // negative num
    let amount = -20;
    printConsole(amount);
    amount = 20 - (-2);
    printConsole(amount);
    printConsole(--amount);
}


// Example of js String
function Strings(){
    let message =  "Hello \"World!\"";
    showMessage(message);

    let stringMore = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String";
    printConsole("Visit Here for more about string: " + stringMore);

    printConsole(stringAreEqual("hello", "hello world"));

    let amount = 123;
    printConsole(amount + " Type of amunt : " + typeof amount);
    amount = amount.toString();
    printConsole(amount + " Type of amount : " + typeof amount);

    // String to number Conversion 
    let price = Number.parseFloat("123.12");
    printConsole(price + " Type of : " + typeof price);

    let price2 = Number.parseFloat("A123.12");
    printConsole(price2 + " Type of : " + typeof price2);

    let price3 = Number.parseFloat("123.12A23");
    printConsole(price3 + " Type of : " + typeof price3);

}

function stringAreEqual(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase();
}


function nullAndUndefined(){
    let price;
    printConsole("value of : " + price);

    price = null;
    printConsole("value of : " + price);
    // Its a bad practise to assign 'null' 
    // instead assign 'undifined'

    price = undefined;
    printConsole("value of : " + price);
}