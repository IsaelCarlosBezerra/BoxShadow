class BoxShadowGenerated {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.previewBox = previewBox;
    this.rule = rule;
    this.webkitRule = webkitRule;
    this.mozRule = mozRule;
  }

  initialize() {
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.blurRef.value = this.blur.value;
    this.spreadRef.value = this.spread.value;

    this.applyRule();
    this.showRule();
  }

  applyRule() {
    this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px #000`;
    this.currentRule = this.previewBox.style.boxShadow;
  }

  showRule() {
    this.rule.innerText = `box-shadow: ${this.currentRule}`;
    this.webkitRule.innerText = `-webkit-box-shadow: ${this.currentRule}`;
    this.mozRule.innerText = `-moz-box-shadow: ${this.currentRule}`;
  }
  update(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalRef.value = value;
        break;
      case "vertical":
        this.verticalRef.value = value;
        break;
      case "blur":
        this.blurRef.value = value;
        break;
      case "spread":
        this.spreadRef.value = value;
        break;
    }

    this.applyRule();
    this.showRule();
  }
}

//Seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");

const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");

const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");

const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule");
const webkitRule = document.querySelector("#webkit-rule");
const mozRule = document.querySelector("#moz-rule");

const boxShadow = new BoxShadowGenerated(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  previewBox,
  rule,
  webkitRule,
  mozRule
);

boxShadow.initialize();

//Eventos
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.update("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.update("vertical", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.update("blur", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.update("spread", value);
});
