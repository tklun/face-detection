var Parallax = {
  positions: {
    back: parseInt($('body').css('backgroundPositionX'), 10),
    middle: parseInt($('#middle-layer').css('backgroundPositionX'), 10),
    top: parseInt($('#top-layer').css('backgroundPositionX'), 10)
  },
  shiftBackground: function(multiplier) {
    multiplier = multiplier * 100;
    console.log("multiplier: ", multiplier);
    // -20 - 0 - 20
    var newBackPos = ((Parallax.positions.back * multiplier) + Parallax.positions.back).toString() + "%",
        newMidPos = ((Parallax.positions.middle * multiplier) + Parallax.positions.middle).toString() + "%",
        newTopPos = ((Parallax.positions.top * multiplier) + Parallax.positions.top).toString() + "%";

    $('body').css({backgroundPositionX: newBackPos});
    $('#middle-layer').css({backgroundPositionX: newMidPos});
    $('#top-layer').css({backgroundPositionX: newTopPos});
  },
  determineFaceCenter: function(canvas, face) {
    var percentFaceCenter = (face.x + face.width/2) / canvas.width;

    // console.log('% of canvas?', percentFaceCenter);
    var middlePercent = 1/2,
        centerOffsetPercent;

    if (percentFaceCenter >= middlePercent) {
      centerOffsetPercent = (percentFaceCenter - middlePercent)/2;
      centerOffsetPercent = centerOffsetPercent * -1;
    } else {
      centerOffsetPercent = (middlePercent - percentFaceCenter)/2;
    }

    // console.log(centerOffsetPercent);
    Parallax.shiftBackground(centerOffsetPercent);
  }
};
