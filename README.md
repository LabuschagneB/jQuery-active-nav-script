Javascript
==========

jQuery making navigation selected on specific code can be used in C# and other languages.


<script type="text/javascript">
    var path = window.location.pathname.split('/');
    path = path[path.length - 1];
    if (path !== undefined) {
        $("#main-navigation")
    .find("a[href$='" + path + "']") // gets all links that match the href
    .parents('li')  // gets all list items that are ancestors of the link
    .children('a')  // walks down one level from all selected li's
    .addClass('active');
    }
</script>
