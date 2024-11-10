function toggleExpand(element) {
    element.classList.toggle("expanded"); // Toggle expanded class
    const storyText = element.querySelector(".story-text");
    if (element.classList.contains("expanded")) {
        storyText.style.webkitLineClamp = "unset"; // Remove line clamp to show full content
    } else {
        storyText.style.webkitLineClamp = "4"; // Reapply line clamp for collapsed view
    }
}
