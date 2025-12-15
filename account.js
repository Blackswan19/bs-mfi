document.addEventListener('contextmenu', e => e.preventDefault());
        const CURRENT_DATE = new Date("2025-12-15");
        const STORAGE_KEY = "bsmfi_saved_password";
        const MESSAGE_DELAY = 1000;

        const data = {
            "6275": {
                name: "Srikanth Jampana",
                membershipType: "Duplicate clone",
                membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
                profileBackground: "rgb(0 0 230)",
                stars: 0,
                coins: 1,
                tierPoints: 5,
                showCustomContent: "no",
                customContent: { url: "https://mfi0212.github.io/swan/offer/programx" },
                loans: [
                    { planDate: "10-08-2025", endDate: "25-08-2025", interest: 1360, takenAmount: 5000, takenFrom: "MLLD", fineRate: 86 },
                    { planDate: "15-08-2025", endDate: "30-08-2025", interest: 4800, takenAmount: 20000, takenFrom: "MLending", fineRate: 320 },
                    { planDate: "16-08-2025", endDate: "31-08-2025", interest: 1275, takenAmount: 5000, takenFrom: "MLLD", fineRate: 90 },
                    { planDate: "18-08-2025", endDate: "02-09-2025", interest: 1380, takenAmount: 5000, takenFrom: "MLLD", fineRate: 88 },
                    { planDate: "18-08-2025", endDate: "02-09-2025", interest: 690, takenAmount: 2500, takenFrom: "MLLD", fineRate: 46 },
                    { planDate: "01-11-2025", endDate: "01-12-2025", interest: 3560, takenAmount: 5000, takenFrom: "Lendlink - LID", fineRate: 90 },
                    { planDate: "06-11-2025", endDate: "01-12-2025", interest: 4880, takenAmount: 10000, takenFrom: "P2P lend", fineRate: 180 },
                    { planDate: "09-11-2025", endDate: "01-12-2025", interest: 3860, takenAmount: 7500, takenFrom: "MLLD", fineRate: 120 },
                    { planDate: "25-11-2025", endDate: "10-12-2025", interest: 900, takenAmount: 3000, takenFrom: "MLending Duplicate ", fineRate: 46 }
                ]
            },
             "4211": {
        name: "Chaitanya Harsha",
        membershipType: "",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "rgb(0 0 230)",
        stars: 0,
        coins: 0,
        tierPoints: 45,
        showCustomContent: "no",
        customContent: {
            type: "text",
            value: "NOTE: Your amounts has updated to match the offer criteria",
            url: ""
        },
        loans: [
           { planDate: "24-05-2025", endDate: "-- <p style='color: #ff36ff;'>(Interest adding stopped by #PY@0212)</p>", interest: 0, takenAmount: 25000, takenFrom: "MLending", fineRate: 5 },
           { planDate: "07-04-2025", endDate: "--<p style='color: #ff36ff;'>(Interest adding stopped by #PY@0212)</p>", interest: 0, takenAmount: 15000, takenFrom: "MLLD", fineRate: 4 }
        ]
    },
            "Mahesh888*": {
                name: "Mahesh Muthinti",
                membershipType: "Duplicate clone",
                membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
                profileBackground: "rgb(0 0 230)",
                stars: 70,
                coins: 0,
                tierPoints: 5,
                showCustomContent: "no",
                loans: [
                    { planDate: "25-05-2025", endDate: "19-12-2025", interest: 1000, takenAmount: 6420, takenFrom: "Delayit offer", fineRate: 50 },
                    { planDate: "03-12-2025", endDate: "02-01-2026", interest: 1705, takenAmount: 5500, takenFrom: "MLendings", fineRate: 40 },
                    { planDate: "29-09-2025", endDate: "12-01-2026", interest: 1600, takenAmount: 6100, takenFrom: "MLLD", fineRate: 40 },
                ],
            },
            "Cherish@123": {
                name: "Cherish #1",
                membershipType: "",
                membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
                profileBackground: "rgb(0 0 230)",
                stars: 0,
                coins: 0,
                tierPoints: 40,
                showCustomContent: "no",
                customContent: { url: "https://mfi0212.github.io/swan/offer/programx" },
                loans: [
                    { planDate: "14-10-2025", endDate: "-- (Interest adding stopped by #PY@0212)", interest: 0, takenAmount: 6690, takenFrom: "MLLD", fineRate: 0 },
                    { planDate: "14-10-2025", endDate: "-- (Interest adding stopped by #PY@0212)", interest: 0, takenAmount: 5880, takenFrom: "MLLD", fineRate: 0 },
                    { planDate: "14-10-2025", endDate: "-- (Interest adding stopped by #PY@0212)", interest: 0, takenAmount: 5560, takenFrom: "MLLD(Offer)", fineRate: 0 }
                ]
            },
             "Cherish@1234": {
        name: "Cherish #2",
        membershipType: "",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "rgb(0 0 230)",
        stars: 0,
        coins: 0,
        tierPoints: 0,
        showCustomContent: "no",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "29-05-2025", endDate: "29-05-2025", interest: 5600, takenAmount: 25000, takenFrom: "MLending", fineRate: 80 }
        ]
    },
        };

        function parseDate(dateStr) {
            if (!dateStr || dateStr.includes("--")) return null;
            const mainPart = dateStr.split("(")[0].trim();
            const [d, m, y] = mainPart.split("-").map(Number);
            return new Date(y, m - 1, d);
        }

        function calculateOverdue(loan) {
            const end = parseDate(loan.endDate);
            if (!end) return { days: 0, fine: 0 };
            const diffMs = CURRENT_DATE - end;
            const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
            const overdueDays = Math.max(0, diffDays);
            return { days: overdueDays, fine: overdueDays * loan.fineRate };
        }

        // On page load: fill saved password with 1-second delay and show message
        window.addEventListener("load", () => {
            const savedPass = localStorage.getItem(STORAGE_KEY);
            const messageEl = document.getElementById("saved-message");

            if (savedPass && data[savedPass]) {
                setTimeout(() => {
                    document.getElementById("password-input").value = savedPass;
                    messageEl.textContent = "Powered by BsPsgenerater";
                    messageEl.style.opacity = "1";
                }, MESSAGE_DELAY);
            }
        });

        document.getElementById("submit-btn").addEventListener("click", function() {
            const input = document.getElementById("password-input").value.trim();
            const profile = data[input];

            if (profile) {
                localStorage.setItem(STORAGE_KEY, input);

                const overlay = document.getElementById("password-overlay");
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = "none";
                    document.getElementById("main-content").style.display = "block";
                    setTimeout(() => { document.getElementById("main-content").style.opacity = "1"; }, 100);
                }, 800);

                // Populate data
                document.getElementById("client-name").textContent = profile.name;
                document.getElementById("membership-type").textContent = profile.membershipType || "Premium Member";
                document.getElementById("membership-icon").src = profile.membershipIcon;
                document.getElementById("profile-bg").style.backgroundColor = profile.profileBackground;

                document.getElementById("stars").textContent = profile.stars;
                document.getElementById("coins").textContent = profile.coins;
                document.getElementById("tier-points").textContent = profile.tierPoints;

                const customDiv = document.getElementById("custom-content");
                if (profile.showCustomContent === "yes") {
                    customDiv.innerHTML = `
                        <p>A special Diwali Program X offer is available for premium members: <strong>25% discount</strong> on the total amount (pay only 75%).</p>
                        <a href="${profile.customContent.url}" target="_blank">View Details & Apply Now →</a>
                    `;
                } else {
                    customDiv.innerHTML = "";
                }

                const buttonsContainer = document.getElementById("amount-buttons");
                const panelsContainer = document.getElementById("loan-panels");
                buttonsContainer.innerHTML = "";
                panelsContainer.innerHTML = "";
                let grandTotal = 0;

                profile.loans.forEach((loan, index) => {
                    const overdue = calculateOverdue(loan);
                    const totalForThis = loan.takenAmount + loan.interest + overdue.fine;
                    grandTotal += totalForThis;

                    const btn = document.createElement("button");
                    btn.className = "amount-btn";
                    btn.textContent = `Amount ${index + 1} (₹${loan.takenAmount})`;
                    btn.dataset.index = index;
                    buttonsContainer.appendChild(btn);

                    const panel = document.createElement("div");
                    panel.className = "loan-details-panel";
                    panel.id = `panel-${index}`;
                    let overdueRows = "";
                    let statusRow = '<tr><th>Status</th><td>No overdue</td></tr>';
                    if (overdue.days > 0) {
                        overdueRows = `
                        <tr><th>Overdue By</th><td style="color: #ff7400;">${overdue.days} days</td></tr>
                        <tr><th>Overdue Interest</th><td style="color: #ff7400;">₹${overdue.fine.toLocaleString()}</td></tr>
                        `;
                        statusRow = "";
                    }
                    panel.innerHTML = `
                        <h3 style="text-align:center; margin-bottom:40px; color:white;">
                            Amount ${index + 1} — ₹${loan.takenAmount}
                        </h3>
                        <table>
                            <tbody>
                                <tr><th>Plan Date</th><td>${loan.planDate}</td></tr>
                                <tr><th>End Date</th><td>${loan.endDate}</td></tr>
                                <tr><th>Taken Amount</th><td>₹${loan.takenAmount.toLocaleString()}</td></tr>
                                <tr><th>Interest</th><td>₹${loan.interest.toLocaleString()}</td></tr>
                                <tr><th>Taken From</th><td>${loan.takenFrom}</td></tr>
                                ${statusRow}
                                ${overdueRows}
                                <tr class="summary-row">
                                    <td style="text-align: center;"><strong>Total to Repay</strong></td>
                                    <td style="text-align: center;" class="total-repay"><strong>₹${totalForThis.toLocaleString()}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    `;
                    panelsContainer.appendChild(panel);
                });

                document.getElementById("grand-total-amount").textContent = grandTotal.toLocaleString();

                document.querySelectorAll(".amount-btn").forEach(btn => {
                    btn.addEventListener("click", function() {
                        document.querySelectorAll(".amount-btn").forEach(b => b.classList.remove("active"));
                        document.querySelectorAll(".loan-details-panel").forEach(p => p.classList.remove("active"));
                        this.classList.add("active");
                        document.getElementById(`panel-${this.dataset.index}`).classList.add("active");
                    });
                });

                if (profile.loans.length > 0) document.querySelector(".amount-btn").click();
            } else {
                alert("Wrong code. Try again.");
                document.getElementById("password-input").value = "";
                document.getElementById("saved-message").textContent = "";
                document.getElementById("saved-message").style.opacity = "0";
            }
        });

        document.getElementById("password-input").addEventListener("keypress", function(e) {
            if (e.key === "Enter") document.getElementById("submit-btn").click();
        });
