import axios from "axios";

export const testBackendConnection = async () => {
  try {
    const response = await axios.get("https://smart-mailer.onrender.com/");
    console.log("Backend response:", response.data);

    if (response.data && typeof response.data.speed === "number") {
      return response.data;
    } else {
      console.warn("Speed value is missing or not a number");
      return { speed: 0 };
    }
  } catch (error) {
    console.error("Error fetching backend connection:", error);
    throw new Error("Failed to connect to backend");
  }
};

export const checkAuth = async (token) => {
  try {
    const response = await axios.get(
      "https://smart-mailer.onrender.com/api/users/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { isAuthenticated: true, user: response.data };
  } catch (error) {
    return { isAuthenticated: false };
  }
};
