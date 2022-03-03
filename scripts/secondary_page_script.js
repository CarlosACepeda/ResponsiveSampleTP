//Author: github: CarlosACepeda <carlosalt5126@hotmail.es>
function readPageNameFromUrl()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pagename = urlParams.get('page')
    return pagename;
}
function setPageTitle(pagename)
{
    document.title= pagename;
    var span= document.getElementById("page_title");
    span.innerText= pagename;
}

function initializeData()
{
    setPageTitle(readPageNameFromUrl());
}

initializeData();