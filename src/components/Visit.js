import avatar from "../assets/images/avatar.png"

const Visit = () => {
  const view = `
  <section class="visit">
      <h2 class="title"><strong>Place to</strong>Visit</h2>
      <div class="visit-card card3">
        <div class="visit-country">
          <p class="icon-location"></p>
        <p>Arba Street <br>Singapore</p>
      </div>
      </div>
    </section>

    <section class="visit-add">
      <div class="visit-review">
        <span class="visit-review-top"><i class="icon-plus"></i>Top Reviews</span>
        <div class="visit-review-items">

          <div class="visit-review-item">
            <img src="${avatar}" alt="avatar">
          </div>

          <div class="visit-review-item">
            <img src="${avatar}" alt="avatar">
          </div>

          <div class="visit-review-item">
            <img src="${avatar}" alt="avatar">
          </div>

          <div class="visit-review-item plus">8+</div>
        </div>
      </div>
      <div class="visit-card card1">
        <div class="visit-country">
          <p class="icon-location"></p>
        <p>Arba Street <br>Singapore</p>
      </div>
      </div>
      <div class="visit-card card2">
      <div class="visit-country">
        <p class="icon-location"></p>
        <p>Arba Street <br>Singapore</p>
      </div>
        <div class="visit-card-plus">+</div>
      </div>
  </section>
  `
  return view
}

export default Visit