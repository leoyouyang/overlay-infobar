let bgFrameDefaultColor = '#FFD93F',
  bgFrameDefaultOpacity = 1,
  bgFrameDefaultPosY = 160,
  defaultAvatar = 'Adventure Time',
  line1DefaultText = 'NEXT',
  line2DefaultText = 'ADVENTURE TIME',
  line1DefaultColor = '#009BDF',
  line2DefaultColor = '#ED0080',
  line1DefaultSize = 38,
  line2DefaultSize = 24,
  line1DefaultPosY = 2,
  line2DefaultPosY = 50,
  line1DefaultSpacing = 0,
  line2DefaultSpacing = 0,
  dividedLineDefaultStyle = 'Wavy',
  dividedLineDefaultColor = '#202020',
  dividedLineDefaultPosY = 12,
  defaultDuration = 10,
  defaultInterval = 20;
let presetSelect;
let bgFrameColorPicker, bgFrameOpacitySlider, bgFramePosYSlider, bgOnlyPosYOffsetSlider;
let avatarSelect;
let line1Input, line1ColorPicker, line1SizeSlider, line1PosYSlider, line1SpacingSlider;
let line2Input, line2ColorPicker, line2SizeSlider, line2PosYSlider, line2SpacingSlider;
let dividedLineStyleSelect, dividedLineColorPicker, dividedLinePosYSlider;
let durationSelect, intervalSelect;

function setup() {
  noCanvas();
  createElement('h2', 'Overlay Infobar');
  createP('<hr><b>PRESET</b>');
  presetSelect = createSelect();
  presetSelect.option('Next: Adventure Time');
  presetSelect.option('Tonight 9/8c: This Is Us');
  presetSelect.option('Now: Jimmy Kimmel Live!');
  presetSelect.option('The Voice: Share the Moment');
  presetSelect.option('Breaking News');
  presetSelect.option('Weather');
  presetSelect.option('Twitter');
  presetSelect.option('Concentration Test');
  presetSelect.option('You May Like...');
  presetSelect.option('Live Comments');
  presetSelect.option('Skip This Scene');
  presetSelect.option('Most Exciting Part');
  presetSelect.changed(applyPreset);

  createP('<hr><b>FRAME</b>');
  createSpan('Color: ');
  bgFrameColorPicker = createColorPicker(bgFrameDefaultColor);
  bgFrameColorPicker.input(applyChanges);
  createSpan('<br>Opacity: ');
  bgFrameOpacitySlider = createSlider(0, 1, bgFrameDefaultOpacity, 0.1);
  bgFrameOpacitySlider.input(applyChanges);
  createSpan('<br>Y Pos: ');
  bgFramePosYSlider = createSlider(80, 900, bgFrameDefaultPosY, 20);
  bgFramePosYSlider.input(applyChanges);
  createSpan('<br>Offset: ');
  bgOnlyPosYOffsetSlider = createSlider(-8, 8, 0, 2);
  bgOnlyPosYOffsetSlider.input(applyChanges);

  createP('<hr><b>IMAGE</b>');
  avatarSelect = createSelect();
  avatarSelect.option('ABC');
  avatarSelect.option('NBC');
  avatarSelect.option('CBS');
  avatarSelect.option('CNN');
  avatarSelect.option('Cartoon Network');
  avatarSelect.option('Adventure Time');
  avatarSelect.option('This Is Us');
  avatarSelect.option('Jimmy Kimmel Live!');
  avatarSelect.option('Play (Black)');
  avatarSelect.option('Play (Magenta)');
  avatarSelect.option('Weather');
  avatarSelect.option('Twitter');
  avatarSelect.selected(defaultAvatar);
  avatarSelect.changed(applyChanges);

  createP('<hr><b>LINE 1</b>');
  createSpan('Text: ');
  line1Input = createInput(line1DefaultText);
  line1Input.input(applyChanges);
  createSpan('<br>Color: ');
  line1ColorPicker = createColorPicker(line1DefaultColor);
  line1ColorPicker.input(applyChanges);
  createSpan('<br>Size: &nbsp;&nbsp;');
  line1SizeSlider = createSlider(line1DefaultSize - 8, line1DefaultSize + 8, line1DefaultSize, 2);
  line1SizeSlider.input(applyChanges);
  createSpan('<br>Y Pos: ');
  line1PosYSlider = createSlider(line1DefaultPosY - 8, line1DefaultPosY + 8, line1DefaultPosY, 2);
  line1PosYSlider.input(applyChanges);
  createSpan('<br>Spacing: ');
  line1SpacingSlider = createSlider(line1DefaultSpacing - 4, line1DefaultSpacing + 4, line1DefaultSpacing, 1);
  line1SpacingSlider.input(applyChanges);

  createP('<hr><b>LINE 2</b>');
  createSpan('Text: ');
  line2Input = createInput(line2DefaultText);
  line2Input.input(applyChanges);
  createSpan('<br>Color: ');
  line2ColorPicker = createColorPicker(line2DefaultColor);
  line2ColorPicker.input(applyChanges);
  createSpan('<br>Size: &nbsp;&nbsp;');
  line2SizeSlider = createSlider(line2DefaultSize - 8, line2DefaultSize + 8, line2DefaultSize, 2);
  line2SizeSlider.input(applyChanges);
  createSpan('<br>Y Pos: ');
  line2PosYSlider = createSlider(line2DefaultPosY - 8, line2DefaultPosY + 8, line2DefaultPosY, 2);
  line2PosYSlider.input(applyChanges);
  createSpan('<br>Spacing: ');
  line2SpacingSlider = createSlider(line2DefaultSpacing - 2, line2DefaultSpacing + 2, line2DefaultSpacing, 0.5);
  line2SpacingSlider.input(applyChanges);

  createP('<hr><b>DIVIDED LINE</b>');
  createSpan('Style: ');
  dividedLineStyleSelect = createSelect();
  dividedLineStyleSelect.option('Wavy');
  dividedLineStyleSelect.option('Dashed');
  dividedLineStyleSelect.option('Dotted');
  dividedLineStyleSelect.option('Solid');
  dividedLineStyleSelect.option('None');
  dividedLineStyleSelect.selected(dividedLineDefaultStyle);
  dividedLineStyleSelect.changed(applyChanges);
  createSpan('<br>Color: ');
  dividedLineColorPicker = createColorPicker(dividedLineDefaultColor);
  dividedLineColorPicker.input(applyChanges);
  createSpan('<br>Y Pos: ');
  dividedLinePosYSlider = createSlider(dividedLineDefaultPosY - 8, dividedLineDefaultPosY + 8, dividedLineDefaultPosY, 2);
  dividedLinePosYSlider.input(applyChanges);

  createP('<hr><b>TIMING</b>');
  createSpan('Duration: ');
  durationSelect = createSelect();
  createSpan(' seconds');
  durationSelect.option(10);
  durationSelect.option(15);
  durationSelect.option(20);
  durationSelect.option(25);
  durationSelect.option(30);
  durationSelect.option(40);
  durationSelect.option(50);
  durationSelect.option(60);
  durationSelect.selected(defaultDuration);

  createSpan('<br>Interval: ');
  intervalSelect = createSelect();
  createSpan(' seconds');
  intervalSelect.option(10);
  intervalSelect.option(20);
  intervalSelect.option(30);
  intervalSelect.option(40);
  intervalSelect.option(50);
  intervalSelect.option(60);
  intervalSelect.selected(defaultInterval);

  createButton('Apply').mousePressed(applyAnimChanges);
}

function applyChanges() {
  let params = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let msg = {
      updateAnim: false,
      bgFrameColor: bgFrameColorPicker.value(),
      bgFrameOpacity: bgFrameOpacitySlider.value(),
      bgFramePosY: bgFramePosYSlider.value(),
      bgOnlyPosYOffset: bgOnlyPosYOffsetSlider.value(),
      avatar: avatarSelect.value(),
      line1Text: line1Input.value(),
      line2Text: line2Input.value(),
      line1Color: line1ColorPicker.value(),
      line2Color: line2ColorPicker.value(),
      line1Size: line1SizeSlider.value(),
      line2Size: line2SizeSlider.value(),
      line1PosY: line1PosYSlider.value(),
      line2PosY: line2PosYSlider.value(),
      line1Spacing: line1SpacingSlider.value(),
      line2Spacing: line2SpacingSlider.value(),
      dividedLineStyle: dividedLineStyleSelect.value(),
      dividedLineColor: dividedLineColorPicker.value(),
      dividedLinePosY: dividedLinePosYSlider.value(),
    };
    console.log(msg);
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}

function applyAnimChanges() {
  let params = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let msg = {
      updateAnim: true,
      duration: durationSelect.value(),
      interval: intervalSelect.value()
    };
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}

function applyPreset() {
  let params = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let selectedPreset = presetSelect.value();
    if (selectedPreset == 'Next: Adventure Time')
      msg = presetAdventureTime;
    else if (selectedPreset == 'Tonight 9/8c: This Is Us')
      msg = presetThisIsUs;
    else if (selectedPreset == 'Now: Jimmy Kimmel Live!')
      msg = presetJimmyKimmelLive;
    else if (selectedPreset == 'The Voice: Share the Moment')
      msg = presetTheVoice;
    else if (selectedPreset == 'Breaking News')
      msg = presetBreakingNews;
    else if (selectedPreset == 'Weather')
      msg = presetWeather;
    else if (selectedPreset == 'Twitter')
      msg = presetTwitter;
    else if (selectedPreset == 'Concentration Test')
      msg = presetConcentrationTest;
    else if (selectedPreset == 'You May Like...')
      msg = presetYouMayLike;
    else if (selectedPreset == 'Live Comments')
      msg = presetLiveComments;
    else if (selectedPreset == 'Skip This Scene')
      msg = presetSkipThisScene;
    else if (selectedPreset == 'Most Exciting Part')
      msg = presetMostExcitingPart;
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}
