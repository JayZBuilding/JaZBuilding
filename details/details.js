document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const imageAlt = params.get("image");
  if (!imageAlt) return;

  const imageFolderAlt = decodeURIComponent(imageAlt);
  const container = document.getElementById("images_container");

  // Define image lists for each folder
  const imageLists = {
    irvine1: [
      "../images/irvine1/irvine1_image1.jpg",
      "../images/irvine1/irvine1_image2.jpg",
      "../images/irvine1/irvine1_image3.jpg",
      "../images/irvine1/irvine1_image4.jpg",
      "../images/irvine1/irvine1_image5.jpg",
      "../images/irvine1/irvine1_image6.jpg",
      "../images/irvine1/irvine1_image7.jpg",
      "../images/irvine1/irvine1_image8.jpg",
    ],
    irvine2: [
      "../images/irvine2/irvine2_image1.jpg",
      "../images/irvine2/irvine2_image2.jpg",
      "../images/irvine2/irvine2_image3.jpg",
      "../images/irvine2/irvine2_image4.jpg",
      "../images/irvine2/irvine2_image5.jpg",
    ],
    laguna:[
      "../images/laguna/laguna_image1.jpg",
      "../images/laguna/laguna_image2.jpg",
      "../images/laguna/laguna_image3.jpg",
      "../images/laguna/laguna_image4.jpg",
      "../images/laguna/laguna_image5.jpg",
      "../images/laguna/laguna_image6.jpg",
      "../images/laguna/laguna_image7.jpg",
      "../images/laguna/laguna_image8.jpg",
    ]

  };

  // Check if folder exists in predefined list
  if (imageLists[imageFolderAlt]) {
    imageLists[imageFolderAlt].forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Image";
      container.appendChild(img);
    });
  } else {
    container.innerHTML = "<p>No images found.</p>";
  }
});
