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
