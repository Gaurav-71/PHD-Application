<template>
  <div class="header">
    <div class="top">
      <img src="../assets/purple.png" class="ml-3 mr-auto" alt="" />
      <div class="content">
        <h3>Ramaiah Institute of Technology</h3>
        <p>
          (Autonomous Institute, affiliated to Visvesvaraya Technological
          University, Belagavi)
        </p>
        <h5>VIDYA SOUDHA</h5>
        <p>
          (Recognized by Govt. of Karnataka AICTE, accredited by NBA & NAAC
          ‘A+’)
        </p>
        <p>Subject to Bangalore Jurisdiction Only</p>
        <p>M.S.RAMAIAH NAGAR, M.S.R.I.T.POST, BENGALURU - 560 054</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="contacts">
      <p><b>Phone Nos. </b>: 080-23600822, 23606934, 23606936, 23607902</p>
      <p><b>Website </b> : www.msrit.edu</p>
      <p><b>Email </b>: phd@msrit.edu</p>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: xx-small;
    margin: 0;
    padding: 0;
  }
  .top {
    width: 100%;
    display: grid;
    grid-template-columns: 15% auto;
    align-items: center;
    img {
      width: 150px;
      height: auto;
    }
    .content {
      text-align: center;
      h3,
      h5 {
        margin: 0;
        padding: 0;
      }
      h2 {
        text-transform: uppercase;
      }
    }
  }

  h4 {
    margin: 0;
    padding: 0;
  }
  .contacts {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.divider {
  //margin: 0.5rem 0;
  height: 0.5px;
  width: 100%;
  background: #000;
}
</style>