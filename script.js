function searchPlace() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const result = document.getElementById("result");

    if (input.includes("goa")) {
        result.innerHTML = "Goa: Budget ₹10,000 - Beaches & nightlife";
    } else if (input.includes("paris")) {
        result.innerHTML = "Paris: Budget ₹80,000 - Eiffel Tower & museums";
    } else if (input.includes("tokyo")) {
        result.innerHTML = "Tokyo: Budget ₹70,000 - Technology & culture";
    } else {
        result.innerHTML = "Destination not found. Try Goa, Paris, or Tokyo.";
    }
}