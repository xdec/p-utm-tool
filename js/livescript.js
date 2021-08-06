"use strict";
// START UTM BUILDER SCRIPT
// Created By: Xavier
// Created On: 5/25/2020 10:00am
// Last Updated: 8/05/2020 11:29pm
// Last Update By: Xavier
//
//
// Static Strings
const utm_source = "?utm_source=";
const utm_medium = "utm_medium=";
const utm_campaign = "utm_campaign=";
const utm_content = "utm_content=";
const utm_keyword = "utm_keyword=";
// Get HTML Form Data
// Channel
const formChannel = document.forms["utmForm"]["channelSelect"];
// Sources
const formSourceDefault = document.forms["utmForm"]["defaultSource"];
const formSourceSocial = document.forms["utmForm"]["socialOnly"];
const formSourceDisplay = document.forms["utmForm"]["displayOnly"];
const formSourceEmail = document.forms["utmForm"]["emailOnly"];
const formSourceThird = document.forms["utmForm"]["thirdOnly"];
// Mediums
const formMediumDefault = document.forms["utmForm"]["defaultMedium"];
const formMediumSocial = document.forms["utmForm"]["socialMedium"];
const formMediumDisplay = document.forms["utmForm"]["displayMedium"];
const formMediumEmail = document.forms["utmForm"]["emailMedium"];
const formMediumThird = document.forms["utmForm"]["thirdMedium"];
// Other
const formCampaign = document.forms["utmForm"]["utmCampaign"];
const formContent = document.forms["utmForm"]["utmContent"];
const formKeyword = document.forms["utmForm"]["utmKeyword"];
// Website
const formWebsite = document.getElementById("website");
//Result
const formResult = document.getElementById("result");
// Dynamic Global Variables
let defaultSource,
    socialSource,
    displaySource,
    emailSource,
    sourceOther,
    defaultMedium,
    socialMedium,
    displayMedium,
    emailMedium,
    thirdMedium,
    website,
    source,
    medium,
    campaign,
    content,
    keyword,
    result;
let utmArr = [];
// Init Variables Function
const varInit = (a,b,c,d,e,f,g,h,i,j,k) => {
  // Get Sources
  defaultSource = utm_source.concat(a);
  socialSource = utm_source.concat(b);
  displaySource = utm_source.concat(c);
  emailSource = utm_source.concat(d);
  sourceOther = utm_source.concat(e);
  // Get Mediums
  defaultMedium = utm_medium.concat(f);
  socialMedium = utm_medium.concat(g);
  displayMedium = utm_medium.concat(h);
  emailMedium = utm_medium.concat(i);
  thirdMedium = utm_medium.concat(j);
  // Website
  website = k;
};
// Get Source Function
const getSource = (a) => {
  if (a === "Social") {
    return socialSource;
  } else if (a === "Display") {
    return displaySource;
  } else if (a === "Email") {
    return emailSource;
  } else if (a === "3rd Party") {
    return sourceOther;
  } else if (!a) {
    return defaultSource;
  }
};
// Get Medium Function
const getMedium = (b) => {
  if (b === "Social") {
    return socialMedium;
  } else if (b === "Display") {
    return displayMedium;
  } else if (b === "Email") {
    return emailMedium;
  } else if (b === "3rd Party") {
    return thirdMedium;
  } else if (!b) {
    return defaultMedium;
  }
};
// Replace the result html element inner value with the function result
const utmDisplay = (c) => {
  c.innerHTML = utmArr;
  console.log(utmArr);
};

// UTM Function
const utmBuild = () => {
  varInit(
    formSourceDefault.value,
    formSourceSocial.value,
    formSourceDisplay.value,
    formSourceEmail.value,
    formSourceThird.value,
    formMediumDefault.value,
    formMediumSocial.value,
    formMediumDisplay.value,
    formMediumEmail.value,
    formMediumThird.value,
    formWebsite.value
  );

  // Store source and medium
  source = getSource(formChannel.value);
  medium = getMedium(formChannel.value);

  // Import Form Values & Concatenate with static strings
  campaign = utm_campaign.concat(formCampaign.value);
  content = utm_content.concat(formContent.value);
  keyword = utm_keyword.concat(formKeyword.value);

  // Check if Source is Other
  source = source === "?utm_source=" ? (source = sourceOther) : source;

  // Replace spaces with "+"
  website = website.replace(/ /g, "+");
  source = source.replace(/ /g, "+");
  medium = medium.replace(/ /g, "+");
  campaign = campaign.replace(/ /g, "+");
  content = content.replace(/ /g, "+");
  keyword = keyword.replace(/ /g, "+");

  // Check for empty Website
  website = !website ? "" : website;
  // Check for empty Source
  source = source === "?utm_source=" ? false : source;
  // Check for empty Medium
  medium = medium === "utm_medium=" ? false : medium;
  // Check for empty Campaign
  campaign = campaign === "utm_campaign=" ? false : campaign;
  // Check for empty Content
  content = content === "utm_content=" ? false : content;
  // Check for empty Keyword
  keyword = keyword === "utm_keyword=" ? false : keyword;

  // Create an array with UTM values
  utmArr = [source, medium, campaign, content, keyword];
  // Filter out the empty utm values
  utmArr = utmArr.filter(Boolean).join("&");
  // Prepend website
  utmArr = website.concat(utmArr);
  // Check If Website Is Empty
  utmArr = !website
    ? "You need to add a website."
    : utmArr;

  // Call the utm display function
  utmDisplay(formResult);
};

// Parameter Only Function
const utmHalf = () => {
  varInit(
    formSourceDefault.value,
    formSourceSocial.value,
    formSourceDisplay.value,
    formSourceEmail.value,
    formSourceThird.value,
    formMediumDefault.value,
    formMediumSocial.value,
    formMediumDisplay.value,
    formMediumEmail.value,
    formMediumThird.value,
    formWebsite.value
  );

  // Store source and medium
  source = getSource(formChannel.value);
  medium = getMedium(formChannel.value);

  // Import Form Values & Concatenate with static strings
  campaign = utm_campaign.concat(formCampaign.value);
  content = utm_content.concat(formContent.value);
  keyword = utm_keyword.concat(formKeyword.value);

  // Check if Source is Other
  source = source === "?utm_source=" ? sourceOther : source;

  // Replace spaces with "+"
  source = source.replace(/ /g, "+");
  medium = medium.replace(/ /g, "+");
  campaign = campaign.replace(/ /g, "+");
  content = content.replace(/ /g, "+");
  keyword = keyword.replace(/ /g, "+");

  // Check for empty Source
  source = source === "?utm_source=" ? false : source;
  // Check for empty Medium
  medium = medium === "utm_medium=" ? false : medium;
  // Check for empty Campaign
  campaign = campaign === "utm_campaign=" ? false : campaign;
  // Check for empty Content
  content = content === "utm_content=" ? false : content;
  // Check for empty Keyword
  keyword = keyword === "utm_keyword=" ? false : keyword;

  // Create an array with UTM values
  utmArr = [source, medium, campaign, content, keyword];
  // Filter out the empty utm values
  utmArr = utmArr.filter(Boolean).join("&");

  // Call the utm display function
  utmDisplay(formResult);
};
// END UTM BUILDER SCRIPT
// BEGIN CONDITIONAL FORM
// Created By: Xavier
// Created On: 5/25/2020 13:28am
// Last Updated: 8/14/2020 2:43pm
// Last Update By: Xavier
//
//
// Show sources
const showSources = () => {
  // If Default
  const defaultOnly = (a) => {
    if (a === "") {
      // Divs
      document.getElementById("defaultSourceDiv").classList.remove("hidden");
      document.getElementById("defaultMediumDiv").classList.remove("hidden");
      // End Divs
      document.getElementById("defaultSource").classList.remove("hidden");
      document.getElementById("defaultMedium").classList.remove("hidden");
      document.getElementById("socialMedium").classList.add("hidden");
      document.getElementById("displayMedium").classList.add("hidden");
      document.getElementById("emailMedium").classList.add("hidden");
      document.getElementById("thirdMedium").classList.add("hidden");
      document.getElementById("socialOnly").classList.add("hidden");
      document.getElementById("displayOnly").classList.add("hidden");
      document.getElementById("emailOnly").classList.add("hidden");
      document.getElementById("thirdOnly").classList.add("hidden");
    } else {
      // Divs
      document.getElementById("defaultSourceDiv").classList.add("hidden");
      document.getElementById("defaultMediumDiv").classList.add("hidden");
      // End Divs
      document.getElementById("defaultSource").classList.add("hidden");
      document.getElementById("defaultMedium").classList.add("hidden");
    }
  };
  defaultOnly(formChannel.value);
  // If Social
  const socialOnly = (a) => {
    if (a === "Social") {
      // Divs
      document.getElementById("socialSourceDiv").classList.remove("hidden");
      document.getElementById("socialMediumDiv").classList.remove("hidden");
      // End Divs
      document.getElementById("socialOnly").classList.remove("hidden");
      document.getElementById("socialMedium").classList.remove("hidden");
      document.getElementById("defaultSource").classList.add("hidden");
      document.getElementById("defaultMedium").classList.add("hidden");
      document.getElementById("displayOnly").classList.add("hidden");
      document.getElementById("emailOnly").classList.add("hidden");
      document.getElementById("thirdOnly").classList.add("hidden");
    } else {
      // Divs
      document.getElementById("socialSourceDiv").classList.add("hidden");
      document.getElementById("socialMediumDiv").classList.add("hidden");
      // End Divs
      document.getElementById("socialOnly").classList.add("hidden");
      document.getElementById("socialMedium").classList.add("hidden");
    }
  };
  socialOnly(formChannel.value);
  // If Display
  const displayOnly = (a) => {
    if (a === "Display") {
      // Divs
      document.getElementById("displaySourceDiv").classList.remove("hidden");
      document.getElementById("displayMediumDiv").classList.remove("hidden");
      // End Divs
      document.getElementById("displayOnly").classList.remove("hidden");
      document.getElementById("displayMedium").classList.remove("hidden");
      document.getElementById("defaultSource").classList.add("hidden");
      document.getElementById("defaultMedium").classList.add("hidden");
      document.getElementById("socialOnly").classList.add("hidden");
      document.getElementById("emailOnly").classList.add("hidden");
      document.getElementById("thirdOnly").classList.add("hidden");
    } else {
      // Divs
      document.getElementById("displaySourceDiv").classList.add("hidden");
      document.getElementById("displayMediumDiv").classList.add("hidden");
      // End Divs
      document.getElementById("displayOnly").classList.add("hidden");
      document.getElementById("displayMedium").classList.add("hidden");
    }
  };
  displayOnly(formChannel.value);
  // If Email
  const emailOnly = (a) => {
    if (a === "Email") {
      // Divs
      document.getElementById("emailSourceDiv").classList.remove("hidden");
      document.getElementById("emailMediumDiv").classList.remove("hidden");
      // End Divs
      document.getElementById("emailOnly").classList.remove("hidden");
      document.getElementById("emailMedium").classList.remove("hidden");
      document.getElementById("defaultSource").classList.add("hidden");
      document.getElementById("defaultMedium").classList.add("hidden");
      document.getElementById("socialOnly").classList.add("hidden");
      document.getElementById("displayOnly").classList.add("hidden");
      document.getElementById("thirdOnly").classList.add("hidden");
    } else {
      // Divs
      document.getElementById("emailSourceDiv").classList.add("hidden");
      document.getElementById("emailMediumDiv").classList.add("hidden");
      // End Divs
      document.getElementById("emailOnly").classList.add("hidden");
      document.getElementById("emailMedium").classList.add("hidden");
    }
  };
  emailOnly(formChannel.value);
  // If Third
  const thirdOnly = (a) => {
    if (a === "3rd Party") {
      // Divs
      document.getElementById("thirdSourceDiv").classList.remove("hidden");
      document.getElementById("thirdMediumDiv").classList.remove("hidden");
      // End Divs
      document.getElementById("thirdOnly").classList.remove("hidden");
      document.getElementById("thirdMedium").classList.remove("hidden");
      document.getElementById("socialOnly").classList.add("hidden");
      document.getElementById("displayOnly").classList.add("hidden");
      document.getElementById("emailOnly").classList.add("hidden");
      document.getElementById("defaultSource").classList.add("hidden");
      document.getElementById("defaultMedium").classList.add("hidden");
    } else {
      // Divs
      document.getElementById("thirdSourceDiv").classList.add("hidden");
      document.getElementById("thirdMediumDiv").classList.add("hidden");
      // End Divs
      document.getElementById("thirdOnly").classList.add("hidden");
      document.getElementById("thirdMedium").classList.add("hidden");
    }
  };
  thirdOnly(formChannel.value);
};
// END CONDITIONAL FORM
// START FORM VALIDATION SCRIPT
// Created By: Xavier
// Created On: 5/25/2020 13:28am
// Last Updated: 8/14/2020 2:43pm
// Last Update By: Xavier
//
//
// Validate Form Fields
const validateFields = () => {
  validateHalf();
  // Validate URL
  const validateUrl = () => {
    if (formWebsite.value === "") {
      document.getElementById("invalid00").classList.remove("hidden");
      document.getElementById("invalid00").classList.add("invalid");
    } else {
      document.getElementById("invalid00").classList.add("hidden");
    }
  };
  validateUrl();
};
//
// Validate For Parameters Only
const validateHalf = () => {
  // Validate Channel
  const validateChannel = (a) => {
    if (a === "") {
      document.getElementById("invalid05").classList.remove("hidden");
      document.getElementById("invalid05").classList.add("invalid");
    } else {
      document.getElementById("invalid05").classList.add("hidden");
    }
  };
  validateChannel(formChannel.value);
  // Get Source
  // Validate defaultSource
  const validateDefaultSource = (b) => {
    if (b === "") {
      document.getElementById("invalid02").classList.remove("hidden");
      document.getElementById("invalid02").classList.add("invalid");
    } else {
      document.getElementById("invalid02").classList.add("hidden");
    }
  };
  validateDefaultSource(formSourceDefault.value);
  // Validate socialSource
  const validateSocialSource = (c) => {
    if (c === "") {
      document.getElementById("invalid06").classList.remove("hidden");
      document.getElementById("invalid06").classList.add("invalid");
    } else {
      document.getElementById("invalid06").classList.add("hidden");
    }
  };
  validateSocialSource(formSourceSocial.value);
  // Validate displaySource
  const validateDisplaySource = (d) => {
    if (d === "") {
      document.getElementById("invalid07").classList.remove("hidden");
      document.getElementById("invalid07").classList.add("invalid");
    } else {
      document.getElementById("invalid07").classList.add("hidden");
    }
  };
  validateDisplaySource(formSourceDisplay.value);
  // Validate emailSource
  const validateEmailSource = (e) => {
    if (e === "") {
      document.getElementById("invalid08").classList.remove("hidden");
      document.getElementById("invalid08").classList.add("invalid");
    } else {
      document.getElementById("invalid08").classList.add("hidden");
    }
  };
  validateEmailSource(formSourceEmail.value);
  // Validate thirdSource
  const validateThirdSource = (f) => {
    if (f === "") {
      document.getElementById("invalid09").classList.remove("hidden");
      document.getElementById("invalid09").classList.add("invalid");
    } else {
      document.getElementById("invalid09").classList.add("hidden");
    }
  };
  validateThirdSource(formSourceThird.value);
  // Validate defaultMedium
  const validateDefaultMedium = (g) => {
    if (g === "") {
      document.getElementById("invalid03").classList.remove("hidden");
      document.getElementById("invalid03").classList.add("invalid");
    } else {
      document.getElementById("invalid03").classList.add("hidden");
    }
  };
  validateDefaultMedium(formMediumDefault.value);
  // Validate socialMedium
  const validateSocialMedium = (h) => {
    if (h === "") {
      document.getElementById("invalid10").classList.remove("hidden");
      document.getElementById("invalid10").classList.add("invalid");
    } else {
      document.getElementById("invalid10").classList.add("hidden");
    }
  };
  validateSocialMedium(formMediumSocial.value);
  // Validate displayMedium
  const validateDisplayMedium = (i) => {
    if (i === "") {
      document.getElementById("invalid11").classList.remove("hidden");
      document.getElementById("invalid11").classList.add("invalid");
    } else {
      document.getElementById("invalid11").classList.add("hidden");
    }
  };
  validateDisplayMedium(formMediumDisplay.value);
  // Validate emailMedium
  const validateEmailMedium = (j) => {
    if (j === "") {
      document.getElementById("invalid12").classList.remove("hidden");
      document.getElementById("invalid12").classList.add("invalid");
    } else {
      document.getElementById("invalid12").classList.add("hidden");
    }
  };
  validateEmailMedium(formMediumEmail.value);
  // Validate thirdMedium
  const validateThirdMedium = (k) => {
    if (k === "") {
      document.getElementById("invalid13").classList.remove("hidden");
      document.getElementById("invalid13").classList.add("invalid");
    } else {
      document.getElementById("invalid13").classList.add("hidden");
    }
  };
  validateThirdMedium(formMediumThird.value);
  // Validate Campaign
  const validateCampaign = (l) => {
    if (l === "") {
      document.getElementById("invalid04").classList.remove("hidden");
      document.getElementById("invalid04").classList.add("invalid");
    } else {
      document.getElementById("invalid04").classList.add("hidden");
    }
  };
  validateCampaign(formCampaign.value);
};
// END FORM VALIDATION SCRIPT
// BEGIN COPY PASTE SCRIPT
// Created By: Xavier
// Created On: 5/25/2020 13:28am
// Last Updated: 5/26/2020 4:13pm
// Last Update By: Xavier
const copyUtm = () => {
  const copyText = document.getElementById("result");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.getElementById("result").innerHTML =
    "Text is copied!\n" + copyText.value;
  console.log("Text is copied\n" + copyText.value);
};
// END COPY PASTE SCRIPT
// Event Listeners
document.getElementById("fullURL").addEventListener("click", () => {
  utmBuild();
  validateFields();
});
document.getElementById("parameterURL").addEventListener("click", () => {
  utmHalf();
  validateHalf();
});
document.getElementById("clipboardCopy").addEventListener("click", () => {
  copyUtm();
});
document.getElementById("website").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("channelSelect").addEventListener("input", () => {
  utmBuild();
  validateFields();
  showSources();
});
document.getElementById("defaultSource").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("socialOnly").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("displayOnly").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("emailOnly").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("thirdOnly").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("defaultMedium").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("displayMedium").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("socialMedium").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("emailMedium").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("thirdMedium").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("utmCampaign").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("utmContent").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
document.getElementById("utmKeyword").addEventListener("input", () => {
  utmBuild();
  validateFields();
});
