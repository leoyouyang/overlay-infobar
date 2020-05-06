let fonts = $('<link href="https://fonts.googleapis.com/css?family=Arvo:700&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Nunito:700&display=swap" rel="stylesheet">');
let infobar = $("<div id='overlay-infobar'></div>");
$('head').append(fonts);
$('body').prepend(infobar);

//ori 760*165 | .75 570*124 | .50 380*84      ARRESTED DEVELOPMENT
let bgFrame, bgFrameWidth = 380,
  bgFrameHeight = 84,
  bgFrameColor = '#FFD93F',
  bgFrameOpacity = 1;
let avatar,
  avatarNBC = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/cb28277f-863d-4e30-ab46-fab8029a481a.png',
  avatarABC = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/c45eca00-2df9-485f-b58c-0208070cc2fa.png',
  avatarCBS = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/3404418a-8e15-4760-b9f7-d3556ce5f362.png',
  avatarCN = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/4a2e2445-2a88-4ad3-bec2-fb486ea62a12.png',
  avatarJimmyKimmelLive = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/d9d4b4c1-3b7d-4252-8564-6917d9b26729.jpg',
  avatarAdventureTime = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/2ea9eecd-47f7-4515-9b25-34272974bf1e.png',
  avatarThisIsUs = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/01db4e8a-7037-4c57-8275-cfd15746db4f.jpg',
  avatarPlayBlack = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/ca1230b9-de73-48d6-95b9-43bdb65a2013.png',
  avatarPlayMagenta = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/d0469b5d-c108-4941-a7c3-5423b173d73d.png',
  avatarWeather = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/6cacf479-a858-42fc-846a-ba40dba0269b.png',
  avatarTwitter = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/c99da220-aa8d-40bd-95bd-0fe6eabcd1e1.png',
  avatarCNN = 'https://assets.editor.p5js.org/5d72724d19619d00170247f1/a6358fc8-762b-4da2-a810-e97cf7a3761b.png',
  avatarURL = avatarAdventureTime;
let line1, line1Text = 'NEXT',
  line1Font = 'Arvo',
  line1Size = 38,
  line1Spacing = 0,
  line1Color = '#009BDF',
  linePosX = bgFrameHeight + 8,
  line1PosY = 2;
let line2, line2Text = 'ADVENTURE TIME',
  line2Font = 'Nunito',
  line2Size = 24,
  line2Spacing = 0,
  line2Color = '#ED0080',
  line2PosY = 50;
let dividedLine, dividedLineColor = '#202020',
  dividedLineStyle = 'wavy',
  dividedLinePosY = 12;
let bgFrameAnim = 'bounceInRight',
  lineAnim = 'fadeIn',
  animOut = 'bounceOutRight',
  lineAnimDelay = 0.7,
  duration = 1800,
  interval = 20,
  animBuffer = 1,
  animInTimer, animOutTimer;

function setup() {
  noCanvas();
  createBgFrame();
  createAvatar();
  createLine1();
  createLine2();
  createDividedLine();
  playAnimation();
}

function createBgFrame() {
  bgFrame = createDiv('');
  bgFrame.id('bg-frame');
  $("#bg-frame").appendTo("#overlay-infobar");
  bgFrame.style('position', 'fixed');
  bgFrame.style('z-index', '2147483647');
  bgFrame.style('width', bgFrameWidth + 'px');
  bgFrame.style('height', bgFrameHeight + 'px');
  bgFrame.style('background-color', bgFrameColor);
  bgFrame.style('opacity', bgFrameOpacity);
}

function createAvatar() {
  avatar = createImg(avatarURL, 'avatar');
  avatar.id('avatar');
  $("#avatar").appendTo("#overlay-infobar");
  avatar.style('position', 'fixed');
  avatar.style('z-index', '2147483647');
  avatar.style('width', bgFrameHeight + 'px');
  avatar.style('height', bgFrameHeight + 'px');
}

function createLine1() {
  line1 = createSpan(line1Text);
  line1.id('line-1');
  $("#line-1").appendTo("#overlay-infobar");
  line1.style('position', 'fixed');
  line1.style('z-index', '2147483647');
  line1.style('color', line1Color);
  line1.style('font-family', line1Font);
  line1.style('font-size', line1Size + 'px');
  line1.style('letter-spacing', line1Spacing + 'px');
  line1.style('margin-left', linePosX + 'px');
  line1.style('margin-top', line1PosY + 'px');
}

function createLine2() {
  line2 = createSpan(line2Text);
  line2.id('line-2');
  $("#line-2").appendTo("#overlay-infobar");
  line2.style('position', 'fixed');
  line2.style('z-index', '2147483647');
  line2.style('color', line2Color);
  line2.style('font-family', line2Font);
  line2.style('font-size', line2Size + 'px');
  line2.style('letter-spacing', line2Spacing + 'px');
  line2.style('margin-left', linePosX + 'px');
  line2.style('margin-top', line2PosY + 'px');
}

function createDividedLine() {
  dividedLine = createSpan('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  dividedLine.id('divided-line');
  $("#divided-line").appendTo("#overlay-infobar");
  dividedLine.style('position', 'fixed');
  dividedLine.style('z-index', '2147483647');
  dividedLine.style('font-family', line2Font);
  dividedLine.style('font-size', '30px');
  dividedLine.style('margin-left', linePosX + 'px');
  dividedLine.style('margin-top', dividedLinePosY + 'px');
  dividedLine.style('text-decoration-line', 'underline');
  dividedLine.style('text-decoration-style', dividedLineStyle);
  dividedLine.style('text-decoration-color', dividedLineColor);
}

function playAnimation() {
  clearTimeout(animInTimer);
  clearTimeout(animOutTimer);
  $('#bg-frame').removeClass();
  setTimeout(function() {
    $('#bg-frame').addClass('animated ' + bgFrameAnim);
  }, animBuffer);

  $('#avatar').removeClass();
  setTimeout(function() {
    $('#avatar').addClass('animated ' + bgFrameAnim);
  }, animBuffer);

  $('#line-1').removeClass();
  setTimeout(function() {
    $('#line-1').addClass('animated ' + lineAnim);
  }, animBuffer);
  line1.style('animation-delay', lineAnimDelay + 's');

  $('#line-2').removeClass();
  setTimeout(function() {
    $('#line-2').addClass('animated ' + lineAnim);
  }, animBuffer);
  line2.style('animation-delay', lineAnimDelay + 's');

  $('#divided-line').removeClass();
  setTimeout(function() {
    $('#divided-line').addClass('animated ' + lineAnim);
  }, animBuffer);
  dividedLine.style('animation-delay', lineAnimDelay + 's');

  animOutTimer = setTimeout(playAnimationOut, duration * 1000);
}

function playAnimationOut() {
  $('#bg-frame').removeClass();
  setTimeout(function() {
    $('#bg-frame').addClass('animated ' + animOut);
  }, animBuffer);

  $('#avatar').removeClass();
  setTimeout(function() {
    $('#avatar').addClass('animated ' + animOut);
  }, animBuffer);

  $('#line-1').removeClass();
  setTimeout(function() {
    $('#line-1').addClass('animated ' + animOut);
  }, animBuffer);
  line1.style('animation-delay', '0s');

  $('#line-2').removeClass();
  setTimeout(function() {
    $('#line-2').addClass('animated ' + animOut);
  }, animBuffer);
  line2.style('animation-delay', '0s');

  $('#divided-line').removeClass();
  setTimeout(function() {
    $('#divided-line').addClass('animated ' + animOut);
  }, animBuffer);
  dividedLine.style('animation-delay', '0s');

  animInTimer = setTimeout(playAnimation, interval * 1000);
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
  if (msg.updateAnim == true) {
    duration = msg.duration;
    interval = msg.interval;
    playAnimation();
  } else {
    bgFrame.style('background-color', msg.bgFrameColor);
    bgFrame.style('opacity', msg.bgFrameOpacity);
    $("#overlay-infobar").css('bottom', msg.bgFramePosY);
    bgFrame.style('margin-top', msg.bgOnlyPosYOffset + 'px');
    avatar.style('margin-top', msg.bgOnlyPosYOffset + 'px');

    if (msg.avatar == 'ABC')
      avatarURL = avatarABC;
    else if (msg.avatar == 'NBC')
      avatarURL = avatarNBC;
    else if (msg.avatar == 'CBS')
      avatarURL = avatarCBS;
    else if (msg.avatar == 'Cartoon Network')
      avatarURL = avatarCN;
    else if (msg.avatar == 'Adventure Time')
      avatarURL = avatarAdventureTime;
    else if (msg.avatar == 'This Is Us')
      avatarURL = avatarThisIsUs;
    else if (msg.avatar == 'Jimmy Kimmel Live!')
      avatarURL = avatarJimmyKimmelLive;
    else if (msg.avatar == 'Play (Black)')
      avatarURL = avatarPlayBlack;
    else if (msg.avatar == 'Play (Magenta)')
      avatarURL = avatarPlayMagenta;
    else if (msg.avatar == 'Weather')
      avatarURL = avatarWeather;
    else if (msg.avatar == 'Twitter')
      avatarURL = avatarTwitter;
    else if (msg.avatar == 'CNN')
      avatarURL = avatarCNN;
    $("#avatar").attr("src",avatarURL);

    line1.html(msg.line1Text);
    line2.html(msg.line2Text);
    line1.style('color', msg.line1Color);
    line2.style('color', msg.line2Color);
    line1.style('font-size', msg.line1Size + 'px');
    line2.style('font-size', msg.line2Size + 'px');
    line1.style('margin-top', msg.line1PosY + 'px');
    line2.style('margin-top', msg.line2PosY + 'px');
    line1.style('letter-spacing', msg.line1Spacing + 'px');
    line2.style('letter-spacing', msg.line2Spacing + 'px');

    if (msg.dividedLineStyle != 'None') {
      dividedLine.style('text-decoration-line', 'underline');
      dividedLine.style('text-decoration-style', msg.dividedLineStyle);
    }
    else {
      dividedLine.style('text-decoration-line', 'none');
    }

    dividedLine.style('text-decoration-color', msg.dividedLineColor);
    dividedLine.style('margin-top', msg.dividedLinePosY + 'px');
  }
}
