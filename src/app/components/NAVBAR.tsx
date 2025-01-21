/* Default Navbar Styling */
.navbar {
  top: 67px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 1rem;
  border-radius: 30px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: transparent; /* Keep navbar background transparent */
}

.logo {
  font-size: 2rem;
  color: #6e38f5;
  display: inline-block;
  transform: rotate(-45deg);
}

.navLinks {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: hsl(0, 0%, 50%); /* Keep gray background for nav links */
  width: 100%;
  max-width: 1250px;
  height: 56px;
  gap: 2rem;
  list-style: none;
  padding: 0;
  border-radius: 30px;
}

.navLinks li a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
}

.navLinks li a:hover {
  opacity: 0.8;
}

.contactUs a {
  padding: 0.5rem 1.5rem;
  background-color: #9c47ff; /* Purple background for contact button */
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contactUs a:hover {
  background-color: #6e38f5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .navLinks {
    flex-direction: column;
    gap: 1rem;
    background-color: hsl(0, 0%, 50%); /* Ensure consistent background for mobile */
    width: 100%;
    padding: 1rem;
    display: flex; /* Ensure the links are shown */
    align-items: center; /* Center align the nav items */
    border-radius: 30px;
  }

  .contactUs {
    margin-top: 1rem;
    text-align: center;
  }

  /* Hide the hamburger icon on mobile view */
  .hamburger {
    display: none; /* Optional: Hide hamburger if the full navbar is shown */
  }
}

@media (max-width: 480px) {
  .navLinks {
    display: flex; /* Force to display all links */
    flex-direction: column;
    align-items: center;
  }

  .navbar.active .navLinks {
    display: flex; /* Keep nav visible when active */
  }

  .hamburger {
    display: none; /* Optional: Keep hamburger hidden if we want full navbar */
  }
}
