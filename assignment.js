// kilometerToMeter (Problem 1)
function kilometerToMeter(km){
    var meter = 0;
    if(km < 0){
        console.log("UNEXPECTED VALUE!");
    }
    else{
        meter = km * 1000;
    }
    return meter;
}

// budgetCalculator (Problem 2)
function budgetCalculator(clock, phone, laptop){
    var totalCost = 0;
    if(clock < 0 || phone < 0 || laptop < 0){
        console.log("UNEXPECTED VALUE!");
    }
    else{
        totalCost = clock * 50 + phone * 100 + laptop * 500;
    }
    return totalCost;
}

// hotelCost (Problem 3)
function hotelCost(days){
    var totalCost = 0;
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;

    if(days < 0){
        console.log("UNEXPECTED VALUE!")
    }
    else{
        if(days <= 10){
            totalCost = days * 100;
        }
        else if(days > 10 && days <= 20){
            var remaining = days - 10;
            totalCost = firstTenDays + remaining * 80;
        }
        else{
            remaining = days - 20;
            totalCost = firstTenDays + secondTenDays + remaining * 50;
        }
    }
    return totalCost;
}

// megaFriend (Problem 4)
function megaFriend(nameArray){
    var biggerName = 0;

    if(nameArray.length > 0){
        biggerName = nameArray[0];
        var biggerNameLength = nameArray[0].length;
        for(var i = 0; i < nameArray.length; i++){
            if(nameArray[i] == "" || nameArray[i] == " "){
                console.log("There is a empty element");
            }
            else{
                var elementLength =  nameArray[i].length;
                if(elementLength > biggerNameLength){
                    biggerNameLength = elementLength;
                    biggerName = nameArray[i];
                }
            }
        }
    }

    else{
        console.log("THERE'S NOTHING IN THIS ARRAY")
    }

    return biggerName;
}