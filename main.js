function getDocumentName()
{
    var file_name = document.location.href;
    var end = (file_name.indexOf("?") == -1) ? file_name.length : file_name.indexOf("?");
    return file_name.substring(file_name.lastIndexOf("/")+1, end);
}

function writeMenuEntry(contents, url, openInNewTab = false, alignRight = false)
{
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
}
