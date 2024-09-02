import BakeryShelves from "../img/bakery shelves.jpeg";

function header() {
  let headerMain = `<div id="content">
    <div>
      <div>
        <img src=${BakeryShelves}>
      </div>
      <div>
        <h1>Tudo Trigo</h1>
        <h2>Bom vindo a nossa aconchegante padaria. Venha degustar os nossos deliciosos pães artesanais.</h2>
        <button>Serviços</button>
      </div>
    </div>
    </div>
  `;
  // let headerMain = document.createElement("div");
  // let headerTitleWraper = document.createElement("div");
  // let headerImgWraper = document.createElement("div");
  // let headerTitle = document.createElement("h1");
  // let headerImg = new Image();
  // let headerCaption = document.createElement("h2");
  // let headerButton = document.createElement("button");

  // headerTitle.textContent = "Tudo Trigo";
  // headerCaption.textContent =
  //   "Bom vindo a nossa aconchegante padaria. Venha degustar os nossos deliciosos pães artesanais.";
  // headerButton.textContent = "Serviços";

  // // Add the image to our existing div.
  // headerImg.src = BakeryShelves; //

  // headerImgWraper.appendChild(headerImg);
  // headerTitleWraper.appendChild(headerTitle);
  // headerTitleWraper.appendChild(headerCaption);
  // headerTitleWraper.appendChild(headerButton);

  // headerMain.appendChild(headerImgWraper);
  // headerMain.appendChild(headerTitleWraper);
  return headerMain;
}

export default header;
