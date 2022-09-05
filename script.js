console.log("Loading Jquerry");

$(document).ready(function(){
    $("#tireconnect").change(function(){
        toggleFields();
    });
});

function toggleFields(){

if ($('#tireconnect').val()==="other")
    $("#other_input_div").show();
else
    $("#other_input_div").hide();
};

console.log("Loading is finished")