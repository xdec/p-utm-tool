// Created By: Xavier
// Created On: 5/25/2020 13:28am
// Last Updated: 5/26/2020 4:13pm
// Last Update By: Xavier
// 
// 
// Show sources
function showSources() {
    // If Default
    function defaultOnly() {
        let socialCheck = document.getElementById("channelSelect").value;
        if (socialCheck == "") {
            // Divs
            document.getElementById("defaultSourceDiv").classList.remove('hidden');
            document.getElementById("defaultMediumDiv").classList.remove('hidden');
            // End Divs
            document.getElementById("defaultSource").classList.remove('hidden');
            document.getElementById("defaultMedium").classList.remove('hidden');
            document.getElementById("socialMedium").classList.add('hidden');
            document.getElementById("displayMedium").classList.add('hidden');
            document.getElementById("emailMedium").classList.add('hidden');
            document.getElementById("thirdMedium").classList.add('hidden');
            document.getElementById("socialOnly").classList.add('hidden');
            document.getElementById("displayOnly").classList.add('hidden');
            document.getElementById("emailOnly").classList.add('hidden');
            document.getElementById("thirdOnly").classList.add('hidden');
        }
        else {
            // Divs
            document.getElementById("defaultSourceDiv").classList.add('hidden');
            document.getElementById("defaultMediumDiv").classList.add('hidden');
            // End Divs
            document.getElementById("defaultSource").classList.add('hidden');
            document.getElementById("defaultMedium").classList.add('hidden');
        }
    };
    defaultOnly();
    // If Social
    function socialOnly() {
        let socialCheck = document.getElementById("channelSelect").value;
        if (socialCheck == "Social") {
            // Divs
            document.getElementById("socialSourceDiv").classList.remove('hidden');
            document.getElementById("socialMediumDiv").classList.remove('hidden');
            // End Divs
            document.getElementById("socialOnly").classList.remove('hidden');
            document.getElementById("socialMedium").classList.remove('hidden');
            document.getElementById("defaultSource").classList.add('hidden');
            document.getElementById("defaultMedium").classList.add('hidden');
            document.getElementById("displayOnly").classList.add('hidden');
            document.getElementById("emailOnly").classList.add('hidden');
            document.getElementById("thirdOnly").classList.add('hidden');
        }
        else {
            // Divs
            document.getElementById("socialSourceDiv").classList.add('hidden');
            document.getElementById("socialMediumDiv").classList.add('hidden');
            // End Divs
            document.getElementById("socialOnly").classList.add('hidden');
            document.getElementById("socialMedium").classList.add('hidden');
        }
    };
    socialOnly();
    // If Display
    function displayOnly() {
        let socialCheck = document.getElementById("channelSelect").value;
        if (socialCheck == "Display") {
            // Divs
            document.getElementById("displaySourceDiv").classList.remove('hidden');
            document.getElementById("displayMediumDiv").classList.remove('hidden');
            // End Divs
            document.getElementById("displayOnly").classList.remove('hidden');
            document.getElementById("displayMedium").classList.remove('hidden');
            document.getElementById("defaultSource").classList.add('hidden');
            document.getElementById("defaultMedium").classList.add('hidden');
            document.getElementById("socialOnly").classList.add('hidden');
            document.getElementById("emailOnly").classList.add('hidden');
            document.getElementById("thirdOnly").classList.add('hidden');
        }
        else {
            // Divs
            document.getElementById("displaySourceDiv").classList.add('hidden');
            document.getElementById("displayMediumDiv").classList.add('hidden');
            // End Divs
            document.getElementById("displayOnly").classList.add('hidden');
            document.getElementById("displayMedium").classList.add('hidden');
        }
    };
    displayOnly();
    // If Email
    function emailOnly() {
        let socialCheck = document.getElementById("channelSelect").value;
        if (socialCheck == "Email") {
            // Divs
            document.getElementById("emailSourceDiv").classList.remove('hidden');
            document.getElementById("emailMediumDiv").classList.remove('hidden');
            // End Divs
            document.getElementById("emailOnly").classList.remove('hidden');
            document.getElementById("emailMedium").classList.remove('hidden');
            document.getElementById("defaultSource").classList.add('hidden');
            document.getElementById("defaultMedium").classList.add('hidden');
            document.getElementById("socialOnly").classList.add('hidden');
            document.getElementById("displayOnly").classList.add('hidden');
            document.getElementById("thirdOnly").classList.add('hidden');
        }
        else {
            // Divs
            document.getElementById("emailSourceDiv").classList.add('hidden');
            document.getElementById("emailMediumDiv").classList.add('hidden');
            // End Divs
            document.getElementById("emailOnly").classList.add('hidden');
            document.getElementById("emailMedium").classList.add('hidden');
        }
    };
    emailOnly();
    // If Third
    function thirdOnly() {
        let socialCheck = document.getElementById("channelSelect").value;
        if (socialCheck == "3rd Party") {
            // Divs
            document.getElementById("thirdSourceDiv").classList.remove('hidden');
            document.getElementById("thirdMediumDiv").classList.remove('hidden');
            // End Divs
            document.getElementById("thirdOnly").classList.remove('hidden');
            document.getElementById("thirdMedium").classList.remove('hidden');
            document.getElementById("socialOnly").classList.add('hidden');
            document.getElementById("displayOnly").classList.add('hidden');
            document.getElementById("emailOnly").classList.add('hidden');
            document.getElementById("defaultSource").classList.add('hidden');
            document.getElementById("defaultMedium").classList.add('hidden');
        }
        else {
            // Divs
            document.getElementById("thirdSourceDiv").classList.add('hidden');
            document.getElementById("thirdMediumDiv").classList.add('hidden');
            // End Divs
            document.getElementById("thirdOnly").classList.add('hidden');
            document.getElementById("thirdMedium").classList.add('hidden');
        }
    };
    thirdOnly();
};