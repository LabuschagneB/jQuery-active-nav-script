    var path = window.location.pathname.split('/');
    path = path[path.length - 1];
    if (path !== undefined) {
        $("#main-nav ul")
    .find("a[href$='" + path + "']") // gets all links that match the href
    .parents('li')  // gets all list items that are ancestors of the link
    .children('a')  // walks down one level from all selected li's
    .addClass('active');
}
