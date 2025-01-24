
export function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-popup';
    notification.textContent = message;

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
