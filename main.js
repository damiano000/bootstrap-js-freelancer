document.addEventListener("DOMContentLoaded", function() {
    let sendButton = document.querySelector(".btn-warning");

    sendButton.addEventListener("click", function() {
        calculateQuote();
    });
});

function calculateQuote() {
    let hoursRequested = document.getElementById("hoursRequested").value;
    let workType = document.getElementById("workType").value;
    let promoCode = document.getElementById("promoCode").value;
    let quoteResult = document.getElementById("quoteResult");

    let hourlyRate;
    switch (workType) {
        case "backend":
            hourlyRate = 20.5;
            break;
        case "frontend":
            hourlyRate = 15.3;
            break;
        case "analysis":
            hourlyRate = 33.6;
            break;
        default:
            hourlyRate = 0;
            break;
    }

    let totalAmount = hoursRequested * hourlyRate;

    // Check if the promo code is valid
    let validPromoCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let discount = 0;
    if (validPromoCodes.includes(promoCode)) {
        discount = 0.25; // 25% discount
    }

    let finalAmount = totalAmount - (totalAmount * discount);

    quoteResult.innerHTML = "Final Amount: €" + finalAmount.toFixed(2);
}
