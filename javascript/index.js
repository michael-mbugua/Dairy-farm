function productionReport(){
    Event.preventDefault();
    let data=[];
    data[0]=data["shed_A"]=parseInt(document.getElementById("shed_A").value)
    data[1]=data["shed_B"]=parseInt(document.getElementById("shed_B").value)
    data[2]=data["shed_C"]=parseInt(document.getElementById("shed_C").value)
    data[3]=data["shed_D"]=parseInt(document.getElementById("shed_D").value)

    let sumData=data.shed_A + data.shed_B + data.shed_C + data.shed_D;
    document.getElementById("data2").innerHTML +="<Br>"

    document.getElementById("data2").innerHTML +="<p> Your production in shed A is " + data.shed_A + " litres per day</p>";
    document.getElementById("data2").innerHTML +="<p> Your production in shed B is " + data.shed_B + " litres per day</p>";
    document.getElementById("data2").innerHTML +="<p> Your production in shed C is " + data.shed_C + " litres per day</p>";
    document.getElementById("data2").innerHTML +="<p> Your production in shed D is " + data.shed_D + " litres per day</p>";

    document.getElementById("data2").innerHTML +="Your total production per day is "+ sumData + " litres per day";

// daily income

    dailyIncome = sumData * 45;

    document.getElementById("data2").innerHTML +="<Br>"
    document.getElementById("data2").innerHTML +="<hr>"
    document.getElementById("data2").innerHTML +="<p> your total daily income is ksh. " + dailyIncome + " </p>";
    document.getElementById("data2").innerHTML +="<hr>"

// weekly income

    weeklyIncome= dailyIncome * 7;

    document.getElementById("data2").innerHTML+="<p> Your total weekly income is ksh." + weeklyIncome + " </p>"
    document.getElementById("data2").innerHTML +="<hr>"
    document.getElementById("data2").innerHTML +="<Br>"

    // income in monthly
    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;

    document.getElementById("data2").innerHTML +="<p> Your total income for the month of january is ksh. " + incomeJanuary + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of February is ksh. " + incomeFebruary + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of March is ksh. " + incomeMarch + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of April is ksh. " + incomeApril + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of May is ksh. " + incomeMay + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of June is ksh. " + incomeJune + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of July is ksh. " + incomeJuly + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of August is ksh. " + incomeAugust + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of September is ksh. " + incomeSeptember + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of October is ksh. " + incomeOctober + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of November is ksh. " + incomeNovember + "</p>"
    document.getElementById("data2").innerHTML +="<p> Your total income for the month of December is ksh. " + incomeDecember + "</p>"


}