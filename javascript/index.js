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

    document.getElementById("data2").innerHTML +="<Br>"
    document.getElementById("data2").innerHTML +="<hr>"

    incomeLeapYear=dailyIncome * 366;
    document.getElementById("data2").innerHTML +="<p>Your total income in a leap year is ksh " + incomeLeapYear +"</p>"

    document.getElementById("data2").innerHTML +="<Br>"
    document.getElementById("data2").innerHTML +="<hr>"


    newDailyIncome = sumData * 49.60;

    newIncomeJanuary = newDailyIncome * 31;
    newIncomeFebruary = newDailyIncome * 29;
    newIncomeMarch = newDailyIncome * 31;
    newIncomeApril = newDailyIncome * 30;
    newIncomeMay = newDailyIncome * 31;
    newIncomeJune = newDailyIncome * 30;
    newIncomeJuly = newDailyIncome * 31;
    newIncomeAugust = newDailyIncome * 31;
    newIncomeSeptember = newDailyIncome * 30;
    newIncomeOctober = newDailyIncome * 31;
    newIncomeNovember = newDailyIncome * 30;
    newIncomeDecember = newDailyIncome * 31;

    newIncomeInLeapYear = 366 * 49.60;

    incomeJanuaryDifference = newIncomeJanuary - incomeJanuary;
    incomeFebruaryDifference = newIncomeFebruary - incomeFebruary;
    incomeMarchDifference = newIncomeMarch - incomeMarch;
    incomeAprilDifference = newIncomeApril - incomeApril;
    incomeMayDifference = newIncomeMay - incomeMay;
    incomeJuneDifference = newIncomeJune - incomeJune;
    incomeJulyDifference = newIncomeJuly - incomeJuly;
    incomeAugustDifference = newIncomeAugust - incomeAugust;
    incomeSeptemberDifference = newIncomeSeptember - incomeSeptember;
    incomeOctoberDifference = newIncomeOctober - incomeOctober;
    incomeNovemberDifference = newIncomeNovember - incomeNovember;
    incomeDecemberDifference = newIncomeDecember - incomeDecember;

    document.getElementById("data2").innerHTML += "<p>January: At price = Ksh. 45, you earn: Ksh. " + incomeJanuary + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJanuaryDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>February: At price = Ksh. 45, you earn: Ksh. " + incomeFebruary + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeFebruaryDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>March: At price = Ksh. 45, you earn: Ksh. " + incomeMarch + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeMarchDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>April: At price = Ksh. 45, you earn: Ksh. " + incomeApril + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeArilDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>May: At price = Ksh. 45, you earn: Ksh. " + incomeMay + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeMayDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>June: At price = Ksh. 45, you earn: Ksh. " + incomeJune + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJuneDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>July: At price = Ksh. 45, you earn: Ksh. " + incomeJuly + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJulyDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>July: At price = Ksh. 45, you earn: Ksh. " + incomeJuly + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJulyDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>August: At price = Ksh. 45, you earn: Ksh. " + incomeAugust + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeAugustDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>September: At price = Ksh. 45, you earn: Ksh. " + incomeSeptember + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeSeptemberDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>September: At price = Ksh. 45, you earn: Ksh. " + incomeOctober + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeOctoberDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>November: At price = Ksh. 45, you earn: Ksh. " + incomeNovember + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeNovemberDifference) + ".</p>";
    document.getElementById("data2").innerHTML += "<p>December: At price = Ksh. 45, you earn: Ksh. " + incomeDecember + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeDecemberDifference) + ".</p>";

}

function resetPage(){
    document.getElementById("data2").remove("innerHTML");
    location.reload();

}