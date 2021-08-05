// START UTM BUILDER SCRIPT
// Created By: Xavier
// Created On: 5/25/2020 10:00am
// Last Updated: 5/26/2020 4:13pm
// Last Update By: Xavier
// 
// 

// UTM Function
function utmBuild() {

    // Static Strings
    const utm_source = "?utm_source=";
    const utm_medium = "utm_medium=";
    const utm_campaign = "utm_campaign=";
    const utm_content = "utm_content=";
    const utm_keyword = "utm_keyword=";
    const p5String = "p5_ads=true";

    // Get Channel
    let selectChannel = document.getElementById('channelSelect').value;

    // Get Sources
    let defaultSourceRaw = utm_source.concat(document.getElementById('defaultSource').value);
    let socialSourceRaw = utm_source.concat(document.getElementById('socialOnly').value);
    let displaySourceRaw = utm_source.concat(document.getElementById('displayOnly').value);
    let emailSourceRaw = utm_source.concat(document.getElementById('emailOnly').value);
    let sourceOtherRaw = utm_source.concat(document.getElementById('thirdOnly').value);

    // Get Mediums
    let defaultMediumRaw = utm_medium.concat(document.getElementById('defaultMedium').value);
    let socialMediumRaw = utm_medium.concat(document.getElementById('socialMedium').value);
    let displayMediumRaw = utm_medium.concat(document.getElementById('displayMedium').value);
    let emailMediumRaw = utm_medium.concat(document.getElementById('emailMedium').value);
    let thirdMediumRaw = utm_medium.concat(document.getElementById('thirdMedium').value);

    // Get Source Functions
    function getSource() {
        if (selectChannel == "Social") {
            return socialSourceRaw;
        }
        else if (selectChannel == "Display") {
            return displaySourceRaw;
        }
        else if (selectChannel == "Email") {
            return emailSourceRaw;
        }
        else if (selectChannel == "3rd Party") {
            return sourceOtherRaw;
        }
        else {
            return defaultSourceRaw;
        }
    };
    getSource();

    function getMedium() {
        if (selectChannel == "Social") {
            return socialMediumRaw;
        }
        else if (selectChannel == "Display") {
            return displayMediumRaw;
        }
        else if (selectChannel == "Email") {
            return emailMediumRaw;
        }
        else if (selectChannel == "3rd Party") {
            return thirdMediumRaw;
        }
        else {
            return defaultMediumRaw;
        }
    };
    getMedium();

    // Store source and medium
    let sourceRaw = getSource();
    let mediumRaw = getMedium();

    // Import Form Values & Concatenate with static strings
    let websiteRaw = document.getElementById('website').value;
    let campaignRaw = utm_campaign.concat(document.getElementById('utmCampaign').value);
    let contentRaw = utm_content.concat(document.getElementById('utmContent').value);
    let keywordRaw = utm_keyword.concat(document.getElementById('utmKeyword').value);
    let p5True = document.getElementById('p5Check').value;

    // Check if Source is Other
    function isOther() {
        if (sourceRaw == "?utm_source=") {
            sourceRaw = sourceOtherRaw;
        }
        else {
            sourceRaw;
        }
    };

    isOther();

    // Replace spaces with "+"
    let website = websiteRaw.replace(/ /g,"+");
    let source = sourceRaw.replace(/ /g,"+");
    let medium = mediumRaw.replace(/ /g,"+");
    let campaign = campaignRaw.replace(/ /g,"+");
    let content = contentRaw.replace(/ /g,"+");
    let keyword = keywordRaw.replace(/ /g,"+");

    // Check for empty Website
    function emptyWebsite() {
        if (website == "") {
            return "";
        }
        else {
            return website;
        }
    };
    website = emptyWebsite();

    // Check for empty Source
    function emptySource() {
        if (source == "?utm_source=") {
            return false;
        }
        else {
            return source;
        }
    };
    source = emptySource();

    // Check for empty Medium
    function emptyMedium() {
        if (medium == "utm_medium=") {
            return false;
        }
        else {
            return medium;
        }
    };
    medium = emptyMedium();

    // Check for empty Campaign
    function emptyCampaign() {
        if (campaign == "utm_campaign=") {
            return false;
        }
        else {
            return campaign;
        }
    };
    campaign = emptyCampaign();

    // Check for empty Content
    function emptyContent() {
        if (content == "utm_content=") {
            return false;
        }
        else {
            return content;
        }
    };
    // Assign result to content variable
    content = emptyContent();

    // Check for empty Keyword
    function emptyKeyword() {
        if (keyword == "utm_keyword=") {
            return false;
        }
        else {
            return keyword;
        }
    };
    // Assign result to keyword variable
    keyword = emptyKeyword();

    // Create an array with P5 or Generic values
    let p5Array = [source, medium, campaign, content, keyword, p5String];
    let genericArray = [source, medium, campaign, content, keyword];

    // Filter out the empty utm values
    let utmP5join = p5Array.filter(Boolean).join("&");
    let utmGenericjoin = genericArray.filter(Boolean).join("&");

    // Prepend website
    let utmP5 = website.concat(utmP5join);
    let utmGeneric = website.concat(utmGenericjoin);

    // Check If Website Is Empty
    function checkP5() {
        if (website == "") {
            return "You need to add a website.";
        }
        else if (p5True == "Yes") {
            return utmP5;
        }
        else {
            return utmGeneric;
        }
    };

    // Replace the result html element inner value with the function result
    function utmDisplay() {
        let result = checkP5();
        document.getElementById("result").innerHTML = result;
        console.log(result);
    };

    // Call the utm display function
    utmDisplay();
};

// Parameter Only Function
function utmHalf() {

    // Static Strings
    let utm_source = "?utm_source=";
    let utm_medium = "utm_medium=";
    let utm_campaign = "utm_campaign=";
    let utm_content = "utm_content=";
    let utm_keyword = "utm_keyword=";
    let p5String = "p5_ads=true";

    // Get Channel
    selectChannel = document.getElementById('channelSelect').value;

    // Get Sources
    let defaultSourceRaw = utm_source.concat(document.getElementById('defaultSource').value);
    let socialSourceRaw = utm_source.concat(document.getElementById('socialOnly').value);
    let displaySourceRaw = utm_source.concat(document.getElementById('displayOnly').value);
    let emailSourceRaw = utm_source.concat(document.getElementById('emailOnly').value);
    let sourceOtherRaw = utm_source.concat(document.getElementById('thirdOnly').value);

    // Get Mediums
    let defaultMediumRaw = utm_medium.concat(document.getElementById('defaultMedium').value);
    let socialMediumRaw = utm_medium.concat(document.getElementById('socialMedium').value);
    let displayMediumRaw = utm_medium.concat(document.getElementById('displayMedium').value);
    let emailMediumRaw = utm_medium.concat(document.getElementById('emailMedium').value);
    let thirdMediumRaw = utm_medium.concat(document.getElementById('thirdMedium').value);

    // Get Source Functions
    function getSource() {
        if (selectChannel == "Social") {
            return socialSourceRaw;
        }
        else if (selectChannel == "Display") {
            return displaySourceRaw;
        }
        else if (selectChannel == "Email") {
            return emailSourceRaw;
        }
        else if (selectChannel == "3rd Party") {
            return sourceOtherRaw;
        }
        else {
            return defaultSourceRaw;
        }
    };
    getSource();

    function getMedium() {
        if (selectChannel == "Social") {
            return socialMediumRaw;
        }
        else if (selectChannel == "Display") {
            return displayMediumRaw;
        }
        else if (selectChannel == "Email") {
            return emailMediumRaw;
        }
        else if (selectChannel == "3rd Party") {
            return thirdMediumRaw;
        }
        else {
            return defaultMediumRaw;
        }
    };
    getMedium();

    // Store source and medium
    let sourceRaw = getSource();
    let mediumRaw = getMedium();

    // Import Form Values & Concatenate with static strings
    let websiteRaw = document.getElementById('website').value;
    let campaignRaw = utm_campaign.concat(document.getElementById('utmCampaign').value);
    let contentRaw = utm_content.concat(document.getElementById('utmContent').value);
    let keywordRaw = utm_keyword.concat(document.getElementById('utmKeyword').value);
    let p5True = document.getElementById('p5Check').value;

    // Check if Source is Other
    function isOther() {
        if (sourceRaw == "?utm_source=") {
            sourceRaw = sourceOtherRaw;
        }
        else {
            sourceRaw;
        }
    };

    isOther();

    // Replace spaces with "+"
    let source = sourceRaw.replace(/ /g,"+");
    let medium = mediumRaw.replace(/ /g,"+");
    let campaign = campaignRaw.replace(/ /g,"+");
    let content = contentRaw.replace(/ /g,"+");
    let keyword = keywordRaw.replace(/ /g,"+");

    // Check for empty Source
    function emptySource() {
        if (source == "?utm_source=") {
            return false;
        }
        else {
            return source;
        }
    };
    source = emptySource();

    // Check for empty Medium
    function emptyMedium() {
        if (medium == "utm_medium=") {
            return false;
        }
        else {
            return medium;
        }
    };
    medium = emptyMedium();

    // Check for empty Campaign
    function emptyCampaign() {
        if (campaign == "utm_campaign=") {
            return false;
        }
        else {
            return campaign;
        }
    };
    campaign = emptyCampaign();

    // Check for empty Content
    function emptyContent() {
        if (content == "utm_content=") {
            return false;
        }
        else {
            return content;
        }
    };
    // Assign result to content variable
    content = emptyContent();

    // Check for empty Keyword
    function emptyKeyword() {
        if (keyword == "utm_keyword=") {
            return false;
        }
        else {
            return keyword;
        }
    };
    // Assign result to keyword variable
    keyword = emptyKeyword();

    // Create an array with P5 or Generic values
    let p5Array = [source, medium, campaign, content, keyword, p5String];
    let genericArray = [source, medium, campaign, content, keyword];

    // Filter out the empty utm values
    let utmP5 = p5Array.filter(Boolean).join("&");
    let utmGeneric = genericArray.filter(Boolean).join("&");


    // Check if this is meant to be a P5 ad
    function checkP5() {
        if (p5True == "Yes") {
            return utmP5;
        }
        else {
            return utmGeneric;
        }
    };

    // Replace the result html element inner value with the function result
    function utmDisplay() {
        let result = checkP5();
        document.getElementById("result").innerHTML = result;
        console.log(result);
    };

    // Call the utm display function
    utmDisplay();
};
// END UTM BUILDER SCRIPT
// BEGIN CONDITIONAL FORM
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
// END CONDITIONAL FORM
// START FORM VALIDATION SCRIPT
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
// END FORM VALIDATION SCRIPT
// BEGIN COPY PASTE SCRIPT
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
// END COPY PASTE SCRIPT