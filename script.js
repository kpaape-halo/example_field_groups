$(document).ready(function() {
    showFields();
});

$("#change_fields").change(function() {
    showFields();
});

$("input").keyup(function() { conditionFields() });
$("input[type=radio]").click(function() { conditionFields() });

// show grouped fields
function showFields() {
    var showClass = $("#change_fields").val();
    $(".not-universal").hide();
    $("."+showClass+":not(.requires)").show();
    conditionFields();
}

// show fields that need to meet a certain requirement
function conditionFields() {
    var viewing = $("#change_fields").val();
    if(viewing == "green" && $("#green-1").val()) {
        $(".requires-green-1").show();
    } else {
        $(".requires-green-1").hide();
    }
    
    if(viewing == "blue") {
        if($("input[name=blue-1]:checked").val() == "two") {
            $(".requires-blue-1-two").show();
        } else {
            $(".requires-blue-1-two").hide();
        }
        if($("input[name=blue-1]:checked").val() == "three") {
            $(".requires-blue-1-three").show();
        } else {
            $(".requires-blue-1-three").hide();
        }
    }
}