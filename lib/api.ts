export const getData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    throw err;
  }
}

export const postData = async (path: string, body: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${path}`;

  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    throw err;
  }
};

export const getHealthCheck = async () => {
  try {
    const data = await getData();
    return data;
  } catch (err) {
    console.error("Health check failed:", err);
    return null; // or handle the error accordingly
  }
}

export const postChatMessage = async (message: string, isFirstMessage: boolean = false) => {
  try {
    const response = await postData("/chat-completion", JSON.stringify({ message }));
    const aiResponse = JSON.parse(response)[0];

    return [
      isFirstMessage && { role: "user", content: message },
      { role: "ai", content: aiResponse }
    ].filter(Boolean);
  } catch (err) {
    console.error("Failed to send chat message:", err);
    return null; // or handle the error accordingly
  }
};
