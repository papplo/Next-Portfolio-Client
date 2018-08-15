import css from 'styled-jsx/css'

export default css`

html {
  background-color: #061C30; }

.page-template-page-fullsingle-split {
  background-color: #061C30;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 21px;
  line-height: 33px;
  letter-spacing: -0.2px;
  color: #848d96;
  -webkit-animation: fadein 2s;
          animation: fadein 2s; }

.page-template-page-fullsingle-split p {
    color: #848d96; }

.fs-split {
  width: 100vw;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  @media (max-width: 800px) {
    .fs-split {
      height: auto;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; } }
  .fs-split .split-image {
    width: 50%;
    height: 100vh;
    background-image: url("../../images/background.jpg");
    background-position: center center;
    background-size: cover; }
    @media (max-width: 800px) {
      .fs-split .split-image {
        height: 80vh;
        width: 100%; } }
  .fs-split .split-content {
    width: 50%;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: auto; }
    @media (max-width: 800px) {
      .fs-split .split-content {
        width: 100%;
        height: auto; } }
    .fs-split .split-content .split-content-vertically-center {
      padding: 80px;
      max-width: 640px;
      margin-top: auto;
      margin-bottom: auto; }
      @media (max-width: 1200px) {
        .fs-split .split-content .split-content-vertically-center {
          padding: 60px; } }
      @media (max-width: 800px) {
        .fs-split .split-content .split-content-vertically-center {
          padding: 40px; } }

.split-intro {
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -2px; }
  .split-intro h1 {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 40px;
    letter-spacing: 0.4px;
    color: #47bec7; }
  .split-intro .tagline {
    color: #CCCCCC; }

.split-bio {
  padding: 40px 0 40px 0;
  font-family: 'Lora', serif; }
  @media (max-width: 1200px) {
    .split-bio {
      padding: 30px 0; } }
  @media (max-width: 800px) {
    .split-bio {
      padding: 20px 0; } }
  .split-bio p {
    color: #848d96; }
  .split-bio a {
    color: #848d96;
    transition-duration: 0.5s;
    border-bottom: 1px dotted #848d96; }
    .split-bio a:hover {
      color: #CA486d;
      transition-duration: 0.1s;
      border-bottom: 1px dotted #CA486d; }

.split-lists .split-list {
  width: 30%;
  display: inline-block;
  margin-bottom: 40px; }
  @media (max-width: 500px) {
    .split-lists .split-list {
      width: 90%; } }
  .split-lists .split-list h3 {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 11px;
    margin-bottom: 31px;
    color: #848d96;
    letter-spacing: 2px;
    opacity: 0.5; }
  .split-lists .split-list ul li {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 12px; }
    .split-lists .split-list ul li a {
      color: #848d96;
      transition-duration: 0.5s; }
      .split-lists .split-list ul li a:hover {
        color: #CA486d;
        transition-duration: 0.1s; }

.split-credit {
  opacity: 0.4; }
  .split-credit p {
    font-size: 12px;
    line-height: 14px; }
    .split-credit p a {
      color: #848d96; }
`