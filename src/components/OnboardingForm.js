// src/components/OnboardingForm.js
const handleSubmit = async (e) => {
  e.preventDefault();

  // Save user data to the backend
  try {
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("User saved:", data);
      onSubmit(formData);
    }
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};