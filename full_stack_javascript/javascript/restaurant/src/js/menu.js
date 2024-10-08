function menu() {
  let menuContent = `<!-- RECIPE CARDS -->
      <div class="row mb-2">
        <div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
          >
            <div
              class="col p-4 d-flex flex-column position-static justify-content-center"
            >
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >PASTA</strong
              >
              <h3 class="mb-0">Lasagna</h3>
              <div class="mb-1 text-body-secondary">Added Apr 2024</div>
              <p class="card-text mb-auto">
                This lasagna recipe takes a little work, but it is so satisfying
                and filling that it's worth it!
              </p>
              <a
                href="./recipes_files/lasagna.html"
                class="icon-link gap-1 icon-link-hover stretched-link"
              >
                Go to Recipe
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                src="https://www.allrecipes.com/thmb/iOfxQGOJTdM0K6edW-MFkn-nydE=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/23600-worlds-best-lasagna-DDMFS-4x3-1196-24c5401652934ffb96d3d94bc9fbe2d7.jpg"
                class="img-thumbnail"
                height="200"
                width="200"
                alt="Square shaped lasagna on a white plate"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success-emphasis"
                >MEXICAN</strong
              >
              <h3 class="mb-0">Salmon Tacos with Mango Salsa</h3>
              <div class="mb-1 text-body-secondary">Added Abr 2024</div>
              <p class="mb-auto">
                Grilled salmon wrapped up in a small tortilla, topped with
                peach-mango salsa, shredded cabbage, avocado, and a special
                sauce.
              </p>
              <a
                href="./recipes_files/Taco.html"
                class="icon-link gap-1 icon-link-hover stretched-link"
              >
                Go to Recipe
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8502054.jpg&q=60&c=sc&poi=auto&orient=true&h=512"
                class="img-thumbnail"
                height="200"
                width="200"
                alt="Square shaped lasagna on a white plate"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
          >
            <div
              class="col p-4 d-flex flex-column position-static justify-content-center"
            >
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >ASIAN</strong
              >
              <h3 class="mb-0">Easy Korean Beef Bowl</h3>
              <div class="mb-1 text-body-secondary">Added Mar 2024</div>
              <p class="card-text mb-auto">
                TThis delicious bowl is quick and easy to make with ground beef, fresh ginger, garlic, soy, sesame seeds, and crushed red pepper. Serve over warm rice or spiralized vegetables
              </p>
              <a
                href="./recipes_files/beef_bowl.html"
                class="icon-link gap-1 icon-link-hover stretched-link"
              >
                Go to Recipe
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F5759837.jpg&q=60&c=sc&poi=auto&orient=true&h=512"
                class="img-thumbnail"
                height="200"
                width="200"
                alt="Square shaped lasagna on a white plate"
              />
            </div>
          </div>
        </div>`;
  return menuContent;
}

export default menu;
