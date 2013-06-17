function getDocumentName()
{
    var file_name = document.location.href;
    var end = (file_name.indexOf("?") == -1) ? file_name.length : file_name.indexOf("?");
    return file_name.substring(file_name.lastIndexOf("/")+1, end);
}

function writeMenuEntry(contents, url, openInNewTab, alignRight)
{
    openInNewTab = openInNewTab || false;
    alignRight = alignRight || false;

    var docName = getDocumentName();

    document.write('<a href="' + url + '" ');
    if (openInNewTab)
        document.write('target="_blank"');
    document.write('>');
 
    if (alignRight)
        document.write('<div class="MainMenuEntryRt"'); 
    else
        document.write('<div class="MainMenuEntry"');            
    if (docName == url)
        document.write('id="MainMenuEntryActive"');
    document.write('>');
    document.write(contents); 
    document.write('</div>');
    document.write('</a>');
}

function drawSiteHeader()
{
    document.write('<div id="Header"> </div>');
    document.write('<div id="MainMenu">');
    writeMenuEntry('Обо мне', 'index.html');
    writeMenuEntry('Блог', 'http://dlanggamedev.blogspot.ru', true);
    writeMenuEntry('Статьи', 'articles.html');
    writeMenuEntry('Арт', 'art.html');
    writeMenuEntry('Код', 'code.html');
    writeMenuEntry('Проекты', 'projects.html');
    writeMenuEntry('Ссылки', 'links.html');
    writeMenuEntry('Я на GitHub', 'https://github.com/gecko0307', true, true);
    document.write('</div>');
    document.write('<div>Hello!</div>');
}

function getAvatar(service, userid, size)
{
    // this return the url that redirects to the according user image/avatar/profile picture
    // implemented services: google profiles, facebook, gravatar, twitter, tumblr, default fallback
    var url = '';
 
    switch (service) {
 
    case "google":
        // available sizes: all, google rescales for you
        url = "http://profiles.google.com/s2/photos/profile/" + userid + "?sz=" + size;
        break;
 
    case "facebook":
        // available sizes: square (50x50), small (50xH) , normal (100xH), large (200xH)
        var sizeparam = '';
        if (isNumber(size)) {
            if (size >= 200) {
                sizeparam = 'large'
            };
            if (size >= 100 && size < 200) {
                sizeparam = 'normal'
            };
            if (size >= 50 && size < 100) {
                sizeparam = 'small'
            };
            if (size < 50) {
                sizeparam = 'square'
            };
        } else {
            sizeparam = size;
        }
        url = "https://graph.facebook.com/" + userid + "/picture?type=" + sizeparam;
        break;
 
    case "gravatar":
        // available sizes: all, gravatar rescales for you
        url = "http://www.gravatar.com/avatar/" + userid + "?s=" + size
        break;
 
    case "twitter":
        // available sizes: bigger (73x73), normal (48x48), mini (24x24), 
        // no param will give you full size
        var sizeparam = '';
        if (isNumber(size)) {
            if (size >= 73) {
                sizeparam = 'bigger'
            };
            if (size >= 48 && size < 73) {
                sizeparam = 'normal'
            };
            if (size < 48) {
                sizeparam = 'mini'
            };
        } else {
            sizeparam = size;
        }
 
        url = "http://api.twitter.com/1/users/profile_image?screen_name=" + userid + "&size=" + sizeparam;
        break;
 
    case "tumblr":
        // available sizes: 16, 24, 30, 40, 48, 64, 96, 128, 512
        var sizeparam = '';
        if (size >= 512) {
            sizeparam = 512
        };
        if (size >= 128 && size < 512) {
            sizeparam = 128
        };
        if (size >= 96 && size < 128) {
            sizeparam = 96
        };
        if (size >= 64 && size < 96) {
            sizeparam = 64
        };
        if (size >= 48 && size < 64) {
            sizeparam = 48
        };
        if (size >= 40 && size < 48) {
            sizeparam = 40
        };
        if (size >= 30 && size < 40) {
            sizeparam = 30
        };
        if (size >= 24 && size < 30) {
            sizeparam = 24
        };
        if (size < 24) {
            sizeparam = 16
        };
 
        url = "http://api.tumblr.com/v2/blog/" + userid + "/avatar/" + sizeparam;
        break;
 
    default:
        url = "http://i.imgur.com/RLiDK.png"; // 48x48
    }

    return url;
}
 
function isNumber(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}
