document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document
        .getElementById(targetId)
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  const images = [
    "./assets/img1.JPG",
    "./assets/IMG_1304.jpg",
    "./assets/IMG_1537.jpg",
    "./assets/IMG_2519.jpg",
    "./assets/IMG_2550.jpg",
    "./assets/IMG_2640.jpg",
    "./assets/IMG_3301.jpg",
    "./assets/IMG_3725.JPG",
    "./assets/IMG_4115.jpg",
    "./assets/IMG_4196.jpg",
    "./assets/IMG_4312.jpg",
    "./assets/IMG_4720.jpg",
    "./assets/IMG_4733.JPG",
    "./assets/IMG_5419.JPG",
    "./assets/IMG_6251.jpg",
    "./assets/IMG_7458.JPG",
    "./assets/IMG_7509.jpg",
    "./assets/IMG_9217.jpg",
  ];
  let currentImageIndex = 0;
  const galleryImg = document.getElementById("gallery-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  function showImage(index) {
    galleryImg.style.opacity = 0;
    setTimeout(() => {
      galleryImg.src = images[index];
      galleryImg.style.opacity = 1;
    }, 500);
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  galleryImg.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = images[currentImageIndex];
  });

  function closeModal() {
    modal.style.display = "none";
  }

  function modalNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex];
    showImage(currentImageIndex);
  }

  function modalPrevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex];
    showImage(currentImageIndex);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsContainer.appendChild(star);
  }

  const affirmationStarsContainer =
    document.getElementById("affirmation-stars");
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    affirmationStarsContainer.appendChild(star);
  }

  const affirmations = [
    "Я принимаю всю себя — свет и тени — и нахожу в этом силу.",
    "Сегодня мой день рождения и начало нового счастливого пути.",
    "Моя душа знает путь, и я доверяю ей безоговорочно.",
    "Я трансформирую свои страхи в смелость и двигаюсь вперед.",
    "В каждом вызове я нахожу возможность для роста и мудрости.",
    "Я — источник любви, и она течет через меня к миру.",
    "Мое прошлое учит меня, но не ограничивает мой потенциал.",
    "Я отпускаю ожидания других и живу в гармонии со своей правдой.",
    "Сегодня я выбираю осознанность и проживаю каждый момент глубоко.",
    "Моя внутренняя тишина — это моя сила, и я нахожу в ней ответы.",
    "Я достойна всего, что желаю, и смело иду к этому.",
    "Я позволяю себе чувствовать все эмоции и нахожу в них смысл.",
    "Моя энергия очищается, и я привлекаю только то, что мне созвучно.",
    "Я создаю пространство для мира и изобилия в своей душе.",
    "Сегодня я отпускаю контроль и доверяю течению жизни.",
    "Моя уникальность — мой дар, и я делюсь им с миром.",
    "Я исцеляю себя любовью и принимаю каждый шаг своего пути.",
    "Мои границы — это акт заботы о себе, и я их уважаю.",
    "Я нахожу баланс между действием и покоем, слушая себя.",
    "Сегодня я освобождаюсь от сомнений и верю в свою внутреннюю силу.",
    "Моя жизнь — это путешествие к себе, и каждый день я ближе к истине.",
    "Я позволяю себе быть уязвимой, зная, что это моя суперсила.",
    "Я привлекаю отношения, которые питают мою душу и сердце.",
    "Мое сердце открыто для прощения — себя и других.",
    "Я выбираю мысли, которые укрепляют мою веру в себя.",
    "Сегодня я нахожу радость в простоте и глубину в обыденности.",
    "Моя интуиция — мой компас, и я следую ее зову.",
    "Я достойна жить в гармонии, и я создаю ее своими руками.",
    "Я отпускаю то, что не мое, и принимаю то, что предназначено.",
    "Сегодня я — воплощение силы, любви и осознанности.",
  ];

  const affirmationModal = document.getElementById("affirmation-modal");
  const affirmationModalText = document.getElementById(
    "affirmation-modal-text"
  );
  const dayCounter = document.getElementById("day-counter");

  function updateDayCounter() {
    const startDate = new Date("2025-05-07");
    const currentDate = new Date();
    const daysSinceStart = Math.floor(
      (currentDate - startDate) / (1000 * 60 * 60 * 24)
    );
    const dayNumber = (daysSinceStart % 30) + 1;
    dayCounter.textContent = `${dayNumber}/30`;
  }

  function openAffirmationModal() {
    const startDate = new Date("2025-05-06");
    const currentDate = new Date();
    const daysSinceStart = Math.floor(
      (currentDate - startDate) / (1000 * 60 * 60 * 24)
    );
    const affirmationIndex = daysSinceStart % affirmations.length;
    affirmationModalText.textContent = affirmations[affirmationIndex];
    affirmationModal.style.display = "flex";
  }

  function closeAffirmationModal() {
    affirmationModal.style.display = "none";
  }

  affirmationModal.addEventListener("click", (e) => {
    if (e.target === affirmationModal) {
      closeAffirmationModal();
    }
  });

  updateDayCounter();

  const header = document.querySelector("header");
  const yanochkaSection = document.getElementById("yanochka");

  window.addEventListener("scroll", () => {
    const yanochkaRect = yanochkaSection.getBoundingClientRect();
    const headerHeight = header.offsetHeight;
    if (
      yanochkaRect.top <= headerHeight &&
      yanochkaRect.bottom >= headerHeight
    ) {
      header.classList.add("opaque");
    } else {
      header.classList.remove("opaque");
    }
  });