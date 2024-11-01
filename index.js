
var str_inp = document.getElementById("prob_1_input");
var btn = document.getElementById("prob_1_btn");

var pali_str = document.getElementById("prob_2_input");

var sub_tot = document.getElementById("prob_3_input");
var tip_per = document.getElementById("prob_3_tip_input");

function str_rev(){

    str = str_inp.value;
    rev_str = "";
    len = str.length;

    for(var i = len-1; i>=0; i--){
        rev_str=rev_str+str[i];
    }

    document.getElementById("prob_1_result").innerHTML = rev_str;
}

function pali_check(){

    str_2 = pali_str.value;
    len = str_2.length;
    is_pali = true;

    for (var i=0; i<len/2; i++)
        if(str_2[i]!==str_2[len-1-i]){
            is_pali = false;
        }

    if (is_pali === true){
        document.getElementById("prob_2_result").innerHTML = "a palindrome"
    }
    else{
        document.getElementById("prob_2_result").innerHTML = "not a palindrome"
    }

}

function bill_tot(){
    
    bill = parseFloat(sub_tot.value);
    tip_p = parseFloat(tip_per.value);

    if(isNaN(tip_p) || isNaN(bill)){
        document.getElementById("prob_3_result").innerHTML = "Enter numbers only";
        return None;
    }

    tip = (tip_p/100)*bill;
    document.getElementById("prob_3_result").innerHTML = bill + tip;



}