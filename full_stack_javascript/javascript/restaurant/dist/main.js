(() => {
  "use strict";
  var n = {};
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (n) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var s = n.g.document;
      if (!e && s && (s.currentScript && (e = s.currentScript.src), !e)) {
        var i = s.getElementsByTagName("script");
        if (i.length)
          for (var t = i.length - 1; t > -1 && (!e || !/^http(s?):/.test(e)); )
            e = i[t--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })();
  const e = n.p + "c97032c981b782b158b3.jpeg",
    s = function () {
      return `<div id="content">\n    <div>\n      <div>\n        <img src=${e}>\n      </div>\n      <div>\n        <h1>Tudo Trigo</h1>\n        <h2>Bom vindo a nossa aconchegante padaria. Venha degustar os nossos deliciosos pães artesanais.</h2>\n        <button>Serviços</button>\n      </div>\n    </div>\n    </div>\n  `;
    },
    i = document.querySelector("#content"),
    t = document.querySelector("#home-btn"),
    a = document.querySelector("#menu-btn"),
    o = document.querySelector("#about-btn");
  (i.innerHTML = s()),
    t.addEventListener("click", () => {
      i.innerHTML = s();
    }),
    a.addEventListener("click", () => {
      i.innerHTML =
        '\x3c!-- RECIPE CARDS --\x3e\n      <div class="row mb-2">\n        <div class="col-md-6">\n          <div\n            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"\n          >\n            <div\n              class="col p-4 d-flex flex-column position-static justify-content-center"\n            >\n              <strong class="d-inline-block mb-2 text-primary-emphasis"\n                >PASTA</strong\n              >\n              <h3 class="mb-0">Lasagna</h3>\n              <div class="mb-1 text-body-secondary">Added Apr 2024</div>\n              <p class="card-text mb-auto">\n                This lasagna recipe takes a little work, but it is so satisfying\n                and filling that it\'s worth it!\n              </p>\n              <a\n                href="./recipes_files/lasagna.html"\n                class="icon-link gap-1 icon-link-hover stretched-link"\n              >\n                Go to Recipe\n                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>\n              </a>\n            </div>\n            <div class="col-auto d-none d-lg-block">\n              <img\n                src="https://www.allrecipes.com/thmb/iOfxQGOJTdM0K6edW-MFkn-nydE=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/23600-worlds-best-lasagna-DDMFS-4x3-1196-24c5401652934ffb96d3d94bc9fbe2d7.jpg"\n                class="img-thumbnail"\n                height="200"\n                width="200"\n                alt="Square shaped lasagna on a white plate"\n              />\n            </div>\n          </div>\n        </div>\n\n        <div class="col-md-6">\n          <div\n            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"\n          >\n            <div class="col p-4 d-flex flex-column position-static">\n              <strong class="d-inline-block mb-2 text-success-emphasis"\n                >MEXICAN</strong\n              >\n              <h3 class="mb-0">Salmon Tacos with Mango Salsa</h3>\n              <div class="mb-1 text-body-secondary">Added Abr 2024</div>\n              <p class="mb-auto">\n                Grilled salmon wrapped up in a small tortilla, topped with\n                peach-mango salsa, shredded cabbage, avocado, and a special\n                sauce.\n              </p>\n              <a\n                href="./recipes_files/Taco.html"\n                class="icon-link gap-1 icon-link-hover stretched-link"\n              >\n                Go to Recipe\n                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>\n              </a>\n            </div>\n            <div class="col-auto d-none d-lg-block">\n              <img\n                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8502054.jpg&q=60&c=sc&poi=auto&orient=true&h=512"\n                class="img-thumbnail"\n                height="200"\n                width="200"\n                alt="Square shaped lasagna on a white plate"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="row mb-2">\n        <div class="col-md-6">\n          <div\n            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"\n          >\n            <div\n              class="col p-4 d-flex flex-column position-static justify-content-center"\n            >\n              <strong class="d-inline-block mb-2 text-primary-emphasis"\n                >ASIAN</strong\n              >\n              <h3 class="mb-0">Easy Korean Beef Bowl</h3>\n              <div class="mb-1 text-body-secondary">Added Mar 2024</div>\n              <p class="card-text mb-auto">\n                TThis delicious bowl is quick and easy to make with ground beef, fresh ginger, garlic, soy, sesame seeds, and crushed red pepper. Serve over warm rice or spiralized vegetables\n              </p>\n              <a\n                href="./recipes_files/beef_bowl.html"\n                class="icon-link gap-1 icon-link-hover stretched-link"\n              >\n                Go to Recipe\n                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>\n              </a>\n            </div>\n            <div class="col-auto d-none d-lg-block">\n              <img\n                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F5759837.jpg&q=60&c=sc&poi=auto&orient=true&h=512"\n                class="img-thumbnail"\n                height="200"\n                width="200"\n                alt="Square shaped lasagna on a white plate"\n              />\n            </div>\n          </div>\n        </div>';
    }),
    o.addEventListener("click", () => {
      i.innerHTML =
        "\n  <h1>Nothing much to see here...</h1>\n  <p>This is a webpage about a fictional bakery. I am just testing webpack, really.</p>";
    });
})();
