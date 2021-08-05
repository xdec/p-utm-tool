// Created By: Xavier
// Created On: 5/25/2020 13:28am
// Last Updated: 5/26/2020 4:13pm
// Last Update By: Xavier
// 
// 
// Validate Form Fields
function validateFields() {
    // Validate Channel
    function validateChannel() {
        let channelCheck = document.forms["utmForm"]["channelSelect"].value;
        if (channelCheck == "") {
            document.getElementById("invalid05").classList.remove('hidden');
            document.getElementById("invalid05").classList.add('invalid');
        }
        else {
            document.getElementById("invalid05").classList.add('hidden');
        }
    };
    validateChannel();
    // Validate URL
    function validateUrl() {
        let urlCheck = document.forms["utmForm"]["website"].value;
        if (urlCheck == "") {
            document.getElementById("invalid00").classList.remove('hidden');
            document.getElementById("invalid00").classList.add('invalid');
        }
        else {
            document.getElementById("invalid00").classList.add('hidden');
        }
    };
    validateUrl();
    // Validate P5
    function validateP5() {
        let p5Check = document.forms["utmForm"]["p5Check"].value;
        if (p5Check == "") {
            document.getElementById("invalid01").classList.remove('hidden');
            document.getElementById("invalid01").classList.add('invalid');
        }
        else {
            document.getElementById("invalid01").classList.add('hidden');
        }
    };
    validateP5();
    // Get Source
    let defaultSource = document.forms["utmForm"]["defaultSource"].value;
    let socialSource = document.forms["utmForm"]["socialOnly"].value;
    let displaySource = document.forms["utmForm"]["displayOnly"].value;
    let emailSource = document.forms["utmForm"]["emailOnly"].value;
    let thirdSource = document.forms["utmForm"]["thirdOnly"].value;
    // Validate defaultSource
    function validateDefaultSource() {
        if (defaultSource == "") {
            document.getElementById("invalid02").classList.remove('hidden');
            document.getElementById("invalid02").classList.add('invalid');
        }
        else {
            document.getElementById("invalid02").classList.add('hidden');
        }
    };
    validateDefaultSource();
    // Validate socialSource
    function validateSocialSource() {
        if (socialSource == "") {
            document.getElementById("invalid06").classList.remove('hidden');
            document.getElementById("invalid06").classList.add('invalid');
        }
        else {
            document.getElementById("invalid06").classList.add('hidden');
        }
    };
    validateSocialSource();
    // Validate displaySource
    function validateDisplaySource() {
        if (displaySource == "") {
            document.getElementById("invalid07").classList.remove('hidden');
            document.getElementById("invalid07").classList.add('invalid');
        }
        else {
            document.getElementById("invalid07").classList.add('hidden');
        }
    };
    validateDisplaySource();
    // Validate emailSource
    function validateEmailSource() {
        if (emailSource == "") {
            document.getElementById("invalid08").classList.remove('hidden');
            document.getElementById("invalid08").classList.add('invalid');
        }
        else {
            document.getElementById("invalid08").classList.add('hidden');
        }
    };
    validateEmailSource();
    // Validate thirdSource
    function validateThirdSource() {
        if (thirdSource == "") {
            document.getElementById("invalid09").classList.remove('hidden');
            document.getElementById("invalid09").classList.add('invalid');
        }
        else {
            document.getElementById("invalid09").classList.add('hidden');
        }
    };
    validateThirdSource();
    // Get Medium
    let defaultMedium = document.forms["utmForm"]["defaultMedium"].value;
    let socialMedium = document.forms["utmForm"]["socialMedium"].value;
    let displayMedium = document.forms["utmForm"]["displayMedium"].value;
    let emailMedium = document.forms["utmForm"]["emailMedium"].value;
    let thirdMedium = document.forms["utmForm"]["thirdMedium"].value;
    // Get Medium
    let defaultMedium = document.forms["utmForm"]["defaultMedium"].value;
    let socialMedium = document.forms["utmForm"]["socialMedium"].value;
    let displayMedium = document.forms["utmForm"]["displayMedium"].value;
    let emailMedium = document.forms["utmForm"]["emailMedium"].value;
    let thirdMedium = document.forms["utmForm"]["thirdMedium"].value;
    // Validate defaultMedium
    function validateDefaultMedium() {
        if (defaultMedium == "") {
            document.getElementById("invalid03").classList.remove('hidden');
            document.getElementById("invalid03").classList.add('invalid');
        }
        else {
            document.getElementById("invalid03").classList.add('hidden');
        }
    };
    validateDefaultMedium();
    // Validate socialMedium
    function validateSocialMedium() {
        if (socialMedium == "") {
            document.getElementById("invalid10").classList.remove('hidden');
            document.getElementById("invalid10").classList.add('invalid');
        }
        else {
            document.getElementById("invalid10").classList.add('hidden');
        }
    };
    validateSocialMedium();
    // Validate displayMedium
    function validateDisplayMedium() {
        if (displayMedium == "") {
            document.getElementById("invalid11").classList.remove('hidden');
            document.getElementById("invalid11").classList.add('invalid');
        }
        else {
            document.getElementById("invalid11").classList.add('hidden');
        }
    };
    validateDisplayMedium();
    // Validate emailMedium
    function validateEmailMedium() {
        if  (emailMedium == "") {
            document.getElementById("invalid12").classList.remove('hidden');
            document.getElementById("invalid12").classList.add('invalid');
        }
        else {
            document.getElementById("invalid12").classList.add('hidden');
        }
    };
    validateEmailMedium();
    // Validate thirdMedium
    function validateThirdMedium() {
        if (thirdMedium == "") {
            document.getElementById("invalid13").classList.remove('hidden');
            document.getElementById("invalid13").classList.add('invalid');
        }
        else {
            document.getElementById("invalid13").classList.add('hidden');
        }
    };
    validateThirdMedium();
    // Validate Campaign
    function validateCampaign() {
        let campaignCheck = document.forms["utmForm"]["utmCampaign"].value;
        if (campaignCheck == "") {
            document.getElementById("invalid04").classList.remove('hidden');
            document.getElementById("invalid04").classList.add('invalid');
        }
        else {
            document.getElementById("invalid04").classList.add('hidden');
        }
    };
    validateCampaign();
};
// 
// Validate For Parameters Only
function validateHalf() {
    // Validate Channel
    function validateChannel() {
        let channelCheck = document.forms["utmForm"]["channelSelect"].value;
        if (channelCheck == "") {
            document.getElementById("invalid05").classList.remove('hidden');
            document.getElementById("invalid05").classList.add('invalid');
        }
        else {
            document.getElementById("invalid05").classList.add('hidden');
        }
    };
    validateChannel();
    // Validate URL
    function validateUrl() {
        let urlCheck = document.forms["utmForm"]["website"].value;
        if (urlCheck == "") {
            document.getElementById("invalid00").classList.add('hidden');
            document.getElementById("invalid00").classList.remove('invalid');
        }
        else {
            document.getElementById("invalid00").classList.add('hidden');
        }
    };
    validateUrl();
    // Validate P5
    function validateP5() {
        let p5Check = document.forms["utmForm"]["p5Check"].value;
        if (p5Check == "") {
            document.getElementById("invalid01").classList.remove('hidden');
            document.getElementById("invalid01").classList.add('invalid');
        }
        else {
            document.getElementById("invalid01").classList.add('hidden');
        }
    };
    validateP5();
    // Get Source
    let defaultSource = document.forms["utmForm"]["defaultSource"].value;
    let socialSource = document.forms["utmForm"]["socialOnly"].value;
    let displaySource = document.forms["utmForm"]["displayOnly"].value;
    let emailSource = document.forms["utmForm"]["emailOnly"].value;
    let thirdSource = document.forms["utmForm"]["thirdOnly"].value;
    // Validate defaultSource
    function validateDefaultSource() {
        if (defaultSource == "") {
            document.getElementById("invalid02").classList.remove('hidden');
            document.getElementById("invalid02").classList.add('invalid');
        }
        else {
            document.getElementById("invalid02").classList.add('hidden');
        }
    };
    validateDefaultSource();
    // Validate socialSource
    function validateSocialSource() {
        if (socialSource == "") {
            document.getElementById("invalid06").classList.remove('hidden');
            document.getElementById("invalid06").classList.add('invalid');
        }
        else {
            document.getElementById("invalid06").classList.add('hidden');
        }
    };
    validateSocialSource();
    // Validate displaySource
    function validateDisplaySource() {
        if (displaySource == "") {
            document.getElementById("invalid07").classList.remove('hidden');
            document.getElementById("invalid07").classList.add('invalid');
        }
        else {
            document.getElementById("invalid07").classList.add('hidden');
        }
    };
    validateDisplaySource();
    // Validate emailSource
    function validateEmailSource() {
        if (emailSource == "") {
            document.getElementById("invalid08").classList.remove('hidden');
            document.getElementById("invalid08").classList.add('invalid');
        }
        else {
            document.getElementById("invalid08").classList.add('hidden');
        }
    };
    validateEmailSource();
    // Validate thirdSource
    function validateThirdSource() {
        if (thirdSource == "") {
            document.getElementById("invalid09").classList.remove('hidden');
            document.getElementById("invalid09").classList.add('invalid');
        }
        else {
            document.getElementById("invalid09").classList.add('hidden');
        }
    };
    validateThirdSource();
    // Get Medium
    let defaultMedium = document.forms["utmForm"]["defaultMedium"].value;
    let socialMedium = document.forms["utmForm"]["socialMedium"].value;
    let displayMedium = document.forms["utmForm"]["displayMedium"].value;
    let emailMedium = document.forms["utmForm"]["emailMedium"].value;
    let thirdMedium = document.forms["utmForm"]["thirdMedium"].value;
    // Validate defaultMedium
    function validateDefaultMedium() {
        if (defaultMedium == "") {
            document.getElementById("invalid03").classList.remove('hidden');
            document.getElementById("invalid03").classList.add('invalid');
        }
        else {
            document.getElementById("invalid03").classList.add('hidden');
        }
    };
    validateDefaultMedium();
    // Validate socialMedium
    function validateSocialMedium() {
        if (socialMedium == "") {
            document.getElementById("invalid10").classList.remove('hidden');
            document.getElementById("invalid10").classList.add('invalid');
        }
        else {
            document.getElementById("invalid10").classList.add('hidden');
        }
    };
    validateSocialMedium();
    // Validate displayMedium
    function validateDisplayMedium() {
        if (displayMedium == "") {
            document.getElementById("invalid11").classList.remove('hidden');
            document.getElementById("invalid11").classList.add('invalid');
        }
        else {
            document.getElementById("invalid11").classList.add('hidden');
        }
    };
    validateDisplayMedium();
    // Validate emailMedium
    function validateEmailMedium() {
        if  (emailMedium == "") {
            document.getElementById("invalid12").classList.remove('hidden');
            document.getElementById("invalid12").classList.add('invalid');
        }
        else {
            document.getElementById("invalid12").classList.add('hidden');
        }
    };
    validateEmailMedium();
    // Validate thirdMedium
    function validateThirdMedium() {
        if (thirdMedium == "") {
            document.getElementById("invalid13").classList.remove('hidden');
            document.getElementById("invalid13").classList.add('invalid');
        }
        else {
            document.getElementById("invalid13").classList.add('hidden');
        }
    };
    validateThirdMedium();
    // Validate Campaign
    function validateCampaign() {
        let campaignCheck = document.forms["utmForm"]["utmCampaign"].value;
        if (campaignCheck == "") {
            document.getElementById("invalid04").classList.remove('hidden');
            document.getElementById("invalid04").classList.add('invalid');
        }
        else {
            document.getElementById("invalid04").classList.add('hidden');
        }
    };
    validateCampaign();
};