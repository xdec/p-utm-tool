// Created By: Xavier
// Created On: 5/25/2020 13:28am
// Last Updated: 5/26/2020 4:13pm
// Last Update By: Xavier
function copyUtm() {
    let copyText = document.getElementById("result");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.getElementById("result").innerHTML = "Text is copied!\n"+copyText.value;
    console.log("Text is copied\n" + copyText.value);
};