var PlayListTemp = '';
var PlaylistTrack = '0';

var Playlist = [{
        Url: "img/sound/music/The Cerulean Motley Crew.mp3",
        Title: "The Cerulean Motley Crew",
        Track: "1",
        Page: "",
        Download: "true"
    },
    {
        Url: "http://dl.nex1music.ir/1397/10/01/Hojat%20Ashrafzadeh%20-%20Asheghe%20Toam%20[128].mp3?time=1546198607&filename=/1397/10/01/Hojat%20Ashrafzadeh%20-%20Asheghe%20Toam%20[128].mp3",
        Title: "Test",
        Track: "2",
        Page: "test",
        Download: "false"
    },
    {
        Url: "http://dl.nex1music.ir/1397/10/01/Reza%20Shiri%20-%20Age%20Bazam%20Biay%20(Ft%20Saeed%20Sam)%20[128].mp3?time=1546198598&filename=/1397/10/01/Reza%20Shiri%20-%20Age%20Bazam%20Biay%20(Ft%20Saeed%20Sam)%20[128].mp3",
        Title: "test",
        Track: "3",
        Page: "test",
        Download: "true"
    },
]
PlayListTemp = Playlist;


$(document).ready(function () {
    ChekArrow();
    AudioPlayerList(1);

    $('.AudioList ul li').click(function () {
        PlaySound($(this).attr('id'));

    });

    $('.arrow .fa-long-arrow-left').click(function () {
        PlaySound(PlaylistTrack - 1);

    });

    $('.arrow .fa-long-arrow-right').click(function () {
        PlaySound(PlaylistTrack * 1 + 1);
    });


});


function log(x) {
    console.log("--> " + x)
}

function AudioPlayerList(x) {
    var ListCash = '';
    if (x == 1) {
        PlayListTemp = Playlist;
    }

    if (PlayListTemp.length == 0) {
        $('.arrow .fa-long-arrow-left').hide();
        $('.arrow .fa-long-arrow-right').hide();

    }

    for (var z = 0; z < PlayListTemp.length; z++) {

        ListCash += "<li id='" + z + "'><span class='ListTitle'>" + Playlist[z].Page + " " + Playlist[z].Title + "</span><span class='ListPage'>" + Playlist[z].Page + "</span>" + DlCheck(z) + "<i class='fa fa-download'></i></a></li>";
    }
    $('.AudioList ul').html(ListCash);
    ChekArrow();
}


function DlCheck(x) {
    var r = '';
    if (PlayListTemp[x].Download == "true") {
        r = "<a href='" + PlayListTemp[x].Url + "' class='ListItemDl'>";
    } else {
        r = "<a href='#' style='display: none!important;' class='ListItemDl'>";
    }

    return r;
    r = '';
}

function PlaySound(x) {
    PlaylistTrack = x;
    ChekArrow()
    $(".AudioPlayerBoard p").html($("#" + x).find('.ListTitle').html());

    $(".AudioPlayer").slideUp();
    $(".AudioPlayer").html();
    $(".AudioPlayer ").html("<audio id='AudioDiv' controls controlsList='nodownload'><source src='" + PlayListTemp[x].Url + "'type='audio/mpeg'>Your browser does not support HTML5 Audio.</audio>")
    $(".AudioPlayer").slideDown();

}


function ChekArrow() {
    var Len = PlayListTemp.length;
    if (PlaylistTrack >= Len - 1) {
        $('.arrow .fa-long-arrow-right').hide();
        $('.arrow .fa-long-arrow-left').show();

    } else if (PlaylistTrack == "0") {
        $('.arrow .fa-long-arrow-left').hide();
        $('.arrow .fa-long-arrow-right').show();

    } else {
        $('.arrow .fa-long-arrow-left').show();
        $('.arrow .fa-long-arrow-right').show();
    }
}