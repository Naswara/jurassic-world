// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Movie Details Data
const movieDetails = {
  jp1: {
    title: "Jurassic Park (1993)",
    image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    description: "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
    director: "Steven Spielberg",
    year: "1993",
    rating: "PG-13",
    duration: "127 minutes"
  },
  jp2: {
    title: "The Lost World: Jurassic Park (1997)",
    image: "https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZC00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    description: "Four years after Jurassic Park's genetically bred dinosaurs ran amok, multimillionaire John Hammond shocks chaos theorist Ian Malcolm by revealing that Hammond has been breeding more beasties at a secret location. Malcolm, his paleontologist ladylove and a wildlife videographer join an expedition to document the lethal lizards' natural behavior in this action-packed thriller.",
    director: "Steven Spielberg",
    year: "1997",
    rating: "PG-13",
    duration: "129 minutes"
  },
  jp3: {
    title: "Jurassic Park III (2001)",
    image: "https://m.media-amazon.com/images/M/MV5BNzQzOTczMmYtNzNkMS00ZDU0LWIzMDYtNmZkNGYyNjdlZWU5XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    description: "Dr. Alan Grant is now a happy man with the previous incidents of Jurassic Park now behind him. Grant is that happy that he announce in public, that nothing on Earth can persuade him back onto the islands. Maybe nothing, except Paul Kirby. Kirby and his wife, Amanda want a plane to fly them over Isla Sorna, with Dr. Grant as their guide. But not everything Kirby says is true.",
    director: "Joe Johnston",
    year: "2001",
    rating: "PG-13",
    duration: "92 minutes"
  },
  jw1: {
    title: "Jurassic World (2015)",
    image: "https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    description: "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond. After 10 years of operation and visitor rates declining, in order to fulfill a corporate mandate, a new attraction is created to re-spark visitor's interest, which backfires horribly.",
    director: "Colin Trevorrow",
    year: "2015",
    rating: "PG-13",
    duration: "124 minutes"
  }
};

// Show Movie Detail
function showMovieDetail(movieId) {
  const movieList = document.getElementById('movie-list');
  const movieDetail = document.getElementById('movie-detail');
  const movieDetailContent = document.getElementById('movie-detail-content');

  if (movieDetails[movieId] && movieList && movieDetail && movieDetailContent) {
    const movie = movieDetails[movieId];

    movieDetailContent.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start;">
        <img src="${movie.image}" alt="${movie.title}" style="width: 300px; height: 450px; object-fit: cover; border-radius: 10px; border: 2px solid #d4af37;">
        <div style="flex: 1; min-width: 300px;">
          <h2 style="color: #d4af37; font-size: 2rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.7);">${movie.title}</h2>
          <div style="margin-bottom: 1.5rem;">
            <p style="color: #8B4513; font-size: 1.1rem; margin: 0.5rem 0;"><strong>Director:</strong> ${movie.director}</p>
            <p style="color: #8B4513; font-size: 1.1rem; margin: 0.5rem 0;"><strong>Year:</strong> ${movie.year}</p>
            <p style="color: #8B4513; font-size: 1.1rem; margin: 0.5rem 0;"><strong>Rating:</strong> ${movie.rating}</p>
            <p style="color: #8B4513; font-size: 1.1rem; margin: 0.5rem 0;"><strong>Duration:</strong> ${movie.duration}</p>
          </div>
          <p style="color: #f5f5dc; font-size: 1.1rem; line-height: 1.8; text-align: justify; background: rgba(26, 51, 24, 0.6); padding: 1.5rem; border-radius: 10px; border: 1px solid #8B4513;">${movie.description}</p>
        </div>
      </div>
    `;

    movieList.style.display = 'none';
    movieDetail.style.display = 'block';
  }
}

// Back to Movie List
function backToMovieList() {
  const movieList = document.getElementById('movie-list');
  const movieDetail = document.getElementById('movie-detail');

  if (movieList && movieDetail) {
    movieList.style.display = 'block';
    movieDetail.style.display = 'none';
  }
}

// Smooth Scrolling untuk Navigation Links
document.addEventListener('DOMContentLoaded', function() {
  const navLinksElements = document.querySelectorAll('#nav-links a[href^="#"]');

  navLinksElements.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }

        // Update active link
        navLinksElements.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});

// Parallax Effect untuk Background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('#home');

  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.backgroundPosition = `center ${speed}px`;
  }
});

// Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply animation to cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.character-card, .movie-card');

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Sound Effects (Optional - dapat dihapus jika tidak diperlukan)
function playRoarSound() {
  // Placeholder untuk sound effect
  console.log('Dinosaur roar!');
}

// Easter Egg - Konami Code untuk efek khusus
let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(',') === konamiSequence.join(',')) {
    // Easter egg activated
    document.body.style.filter = 'sepia(1) hue-rotate(30deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 3000);

    alert('🦕 Welcome to the real Jurassic Park! 🦖');
    konamiCode = [];
  }
});
