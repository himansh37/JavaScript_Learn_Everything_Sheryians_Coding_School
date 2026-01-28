function showNotification(message) {
  const notification = document.createElement("div");
  notification.innerText = message;

  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "-300px";
  notification.style.padding = "12px 20px";
  notification.style.backgroundColor = "#333";
  notification.style.color = "#fff";
  notification.style.borderRadius = "6px";
  notification.style.fontSize = "14px";
  notification.style.transition = "right 0.4s ease";
  notification.style.zIndex = "9999";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.right = "20px";
  }, 50);

  setTimeout(() => {
    notification.style.right = "-300px";
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 2000);
}

// Example usage
showNotification("Notification appeared 👋");
