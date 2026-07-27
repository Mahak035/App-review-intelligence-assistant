// Fallback Local Dataset for Standalone File Mode (when server is offline or opened via file://)
const FALLBACK_REVIEWS = [
    { review_id: "REV001", date: "2026-07-01", app_name: "Instagram", app_version: "312.0.0", category: "Social", feedback_type: "Praise", rating: 4, user_sentiment: "Positive", review_text: "Reels load super fast and UI feels snappy on 120Hz ProMotion displays.", device_os: "iOS" },
    { review_id: "REV002", date: "2026-07-02", app_name: "Instagram", app_version: "312.0.0", category: "Social", feedback_type: "Bug/Crash", rating: 1, user_sentiment: "Negative", review_text: "App says 'Couldn't refresh feed' every time I switch from Wi-Fi to 5G on iOS 17.", device_os: "iOS" },
    { review_id: "REV003", date: "2026-07-03", app_name: "Instagram", app_version: "312.0.0", category: "Social", feedback_type: "Feature Request", rating: 3, user_sentiment: "Neutral", review_text: "Please add iPad native support and landscape mode for stories!", device_os: "iOS" },
    { review_id: "REV004", date: "2026-07-04", app_name: "WhatsApp", app_version: "2.24.12", category: "Communication", feedback_type: "Praise", rating: 5, user_sentiment: "Positive", review_text: "End-to-end encryption works seamlessly and voice calls are crystal clear.", device_os: "Android" },
    { review_id: "REV005", date: "2026-07-05", app_name: "WhatsApp", app_version: "2.24.12", category: "Communication", feedback_type: "Bug/Crash", rating: 2, user_sentiment: "Negative", review_text: "Backup to Google Drive gets stuck at 99% on Android 14.", device_os: "Android" },
    { review_id: "REV006", date: "2026-07-06", app_name: "WhatsApp", app_version: "2.24.12", category: "Communication", feedback_type: "Feature Request", rating: 4, user_sentiment: "Positive", review_text: "Would love multi-account login on iOS without needing WhatsApp Business.", device_os: "iOS" },
    { review_id: "REV007", date: "2026-07-07", app_name: "Spotify", app_version: "8.9.20", category: "Music & Audio", feedback_type: "Praise", rating: 5, user_sentiment: "Positive", review_text: "Offline playlist downloads and daily mix recommendations are top notch!", device_os: "iOS" },
    { review_id: "REV008", date: "2026-07-08", app_name: "Spotify", app_version: "8.9.20", category: "Music & Audio", feedback_type: "Performance", rating: 2, user_sentiment: "Negative", review_text: "Bluetooth audio delays by 1 second when connecting to car stereo AAC codec.", device_os: "iOS" },
    { review_id: "REV009", date: "2026-07-09", app_name: "YouTube", app_version: "19.15.3", category: "Video Players", feedback_type: "Praise", rating: 5, user_sentiment: "Positive", review_text: "4K 60fps video playback is silky smooth with zero frame drops.", device_os: "Android" },
    { review_id: "REV010", date: "2026-07-10", app_name: "YouTube", app_version: "19.15.3", category: "Video Players", feedback_type: "Bug/Crash", rating: 1, user_sentiment: "Negative", review_text: "Background playback pauses automatically when phone screen turns off on iOS.", device_os: "iOS" },
    { review_id: "REV011", date: "2026-07-11", app_name: "Zomato", app_version: "11.2.0", category: "Food & Drink", feedback_type: "Praise", rating: 5, user_sentiment: "Positive", review_text: "Live GPS tracking of delivery partner is accurate. Order arrived hot!", device_os: "Android" },
    { review_id: "REV012", date: "2026-07-12", app_name: "Zomato", app_version: "11.2.0", category: "Food & Drink", feedback_type: "Performance", rating: 2, user_sentiment: "Negative", review_text: "UPI payment gets pending status during peak lunch hours on Android.", device_os: "Android" },
    { review_id: "REV013", date: "2026-07-13", app_name: "Uber", app_version: "4.510.1", category: "Travel & Mobility", feedback_type: "Praise", rating: 4, user_sentiment: "Positive", review_text: "Driver assigned in 2 minutes and fare estimate was exact.", device_os: "iOS" },
    { review_id: "REV014", date: "2026-07-14", app_name: "Uber", app_version: "4.510.1", category: "Travel & Mobility", feedback_type: "Bug/Crash", rating: 1, user_sentiment: "Negative", review_text: "App GPS pin drops 500 meters away from actual pickup location on Android.", device_os: "Android" },
    { review_id: "REV015", date: "2026-07-15", app_name: "Amazon", app_version: "28.10.0", category: "Shopping", feedback_type: "Praise", rating: 5, user_sentiment: "Positive", review_text: "1-Click ordering and fast Prime delivery tracking make shopping effortless.", device_os: "iOS" },
    { review_id: "REV016", date: "2026-07-16", app_name: "Amazon", app_version: "28.10.0", category: "Shopping", feedback_type: "Performance", rating: 2, user_sentiment: "Negative", review_text: "Product image gallery takes 10 seconds to load on 3G mobile network.", device_os: "Android" },
    { review_id: "REV017", date: "2026-07-17", app_name: "PayPulse", app_version: "2.4.1", category: "Finance", feedback_type: "Praise", rating: 5, user_sentiment: "Positive", review_text: "Instant UPI bank transfers with zero transaction failure rate.", device_os: "Android" },
    { review_id: "REV018", date: "2026-07-18", app_name: "PayPulse", app_version: "2.4.1", category: "Finance", feedback_type: "Bug/Crash", rating: 1, user_sentiment: "Negative", review_text: "Camera permission prompt crashes on iOS 17 when scanning QR code in camera view.", device_os: "iOS" },
    { review_id: "REV019", date: "2026-07-19", app_name: "Instagram", app_version: "312.0.0", category: "Social", feedback_type: "Bug/Crash", rating: 2, user_sentiment: "Negative", review_text: "Camera story filter causes battery drain and phone overheating on iPhone 15 Pro.", device_os: "iOS" },
    { review_id: "REV020", date: "2026-07-20", app_name: "Spotify", app_version: "8.9.20", category: "Music & Audio", feedback_type: "Feature Request", rating: 4, user_sentiment: "Positive", review_text: "Add lossless HiFi audio streaming setting for audiophile headphones!", device_os: "iOS" }
];

const DEFAULT_APPS_LIST = [
    'Airbnb', 'Amazon', 'Amazon Shopping', 'BGMI: FPS Battle Royale', "BYJU'S - The Learning App",
    'Booking.com: Hotels & Travel', 'Call of Duty: Mobile', 'Call of Duty: Mobile - Garena',
    'Calm - Sleep, Meditate, Relax', 'Clash Royale', 'Clash of Clans', 'Discord - Talk, Play, Hang Out',
    'Disney+', 'Duolingo: Language Lessons', 'EA SPORTS FC Soccer Mobile 26', 'Facebook',
    'Flipkart Online Shopping App', 'Free Fire: 9th Anniversary', 'Gmail', 'Google Calendar',
    'Google Docs', 'Google Fit: Activity Tracking', 'Google Health (Fitbit)', 'Google Maps',
    'Google Messages', 'Google Pay: Save and Pay', 'Google Play Books & Audiobooks', 'Google Tasks',
    'Grab - Taxi & Food Delivery', 'Instagram', 'MakeMyTrip - Flights & Hotels', 'Microsoft Outlook',
    'Microsoft Teams', 'Minecraft: Dream it, Build it!', 'MyFitnessPal: Calorie Counter', 'Netflix',
    'PayPal - Pay, Send, Save', 'PayPulse', 'PhonePe UPI Payments, Loan App', 'Pinterest',
    'Prime Video', 'Reddit', 'Roblox', 'Shopee 8.8 Merdeka Sale', 'Snapchat', 'Spotify',
    'Spotify: Music and Podcasts', 'Strava: Run, Bike, Walk', 'Telegram', 'TikTok - Videos, Shop & LIVE',
    'Todoist: To Do List & Calendar', 'Trello: Personal Planner App', 'Truecaller: Spam Call Blocker',
    'Uber', 'Uber - Request a ride', 'Vimeo', 'WhatsApp', 'WhatsApp Messenger', 'X', 'YouTube',
    'Zomato', 'Zerodha Kite', 'eBay online shopping & selling'
];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    populateAppDropdowns(DEFAULT_APPS_LIST);
    fetchAnalyticsSummary();
    applyReviewFilters();
    setupChatForm();
    setupDragAndDrop();
});


// Tab Switching Handler
function switchTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

    const targetBtn = document.getElementById(`tab-${tabName}-btn`);
    const targetContent = document.getElementById(`tab-${tabName}`);

    if (targetBtn && targetContent) {
        targetBtn.classList.add("active");
        targetContent.classList.add("active");
    }

    if (tabName === 'datasets') {
        loadDatasetInventory();
    }
}

// Modal Handlers
function toggleOverviewModal() {
    const modal = document.getElementById("overview-modal");
    if (modal) {
        modal.style.display = modal.style.display === "none" ? "flex" : "none";
    }
}

function toggleSettingsModal() {
    const keyBar = document.getElementById("gemini-key-bar");
    if (keyBar) {
        keyBar.style.display = keyBar.style.display === "none" ? "block" : "none";
    }
}

function closeModalOnOverlay(event) {
    if (event.target.id === "overview-modal") {
        toggleOverviewModal();
    }
}

// Fetch Overall KPI Metrics (with Standalone Local Fallback)
async function fetchAnalyticsSummary() {
    try {
        const response = await fetch("/api/analytics");
        if (!response.ok) throw new Error("Server offline");
        const json = await response.json();
        if (json.status === "success") {
            const dataObj = json.data || json;
            const summary = dataObj.summary;
            if (summary) {
                document.getElementById("metric-total-reviews").textContent = summary.total_reviews.toLocaleString();
                document.getElementById("metric-avg-rating").textContent = `${summary.average_rating} / 5`;
                document.getElementById("metric-positive-pct").textContent = `${summary.positive_sentiment_pct}%`;
            }
        }

        // Fetch App List to populate dropdowns
        const appsRes = await fetch("/api/apps_list");
        if (appsRes.ok) {
            const appsJson = await appsRes.json();
            if (appsJson.status === "success" && Array.isArray(appsJson.apps)) {
                populateAppDropdowns(appsJson.apps);
            }
        }
        return;
    } catch (err) {
        console.warn("API offline - switching to Standalone Static Mode:", err);
    }

    // STANDALONE STATIC FALLBACK
    const total = FALLBACK_REVIEWS.length;
    const sumRating = FALLBACK_REVIEWS.reduce((acc, r) => acc + r.rating, 0);
    const avgRating = (sumRating / total).toFixed(2);
    const posCount = FALLBACK_REVIEWS.filter(r => r.user_sentiment === "Positive").length;
    const posPct = ((posCount / total) * 100).toFixed(1);

    document.getElementById("metric-total-reviews").textContent = total;
    document.getElementById("metric-avg-rating").textContent = `${avgRating} / 5`;
    document.getElementById("metric-positive-pct").textContent = `${posPct}%`;
}

function populateAppDropdowns(appList) {
    const filterSelect = document.getElementById("filter-app");
    const searchInput = document.getElementById("filter-app-search");
    const datalist = document.getElementById("apps-datalist");
    const app1Select = document.getElementById("compare-app1");
    const app2Select = document.getElementById("compare-app2");

    if (datalist && Array.isArray(appList)) {
        datalist.innerHTML = appList.map(name => `<option value="${escapeHtml(name)}">`).join("");
    }

    if (filterSelect && filterSelect.tagName === "SELECT") {
        let currentVal = filterSelect.value || "All";
        filterSelect.innerHTML = '<option value="All">All 57+ Mobile Apps</option>';
        appList.forEach(appName => {
            const opt = document.createElement("option");
            opt.value = appName;
            opt.textContent = appName;
            filterSelect.appendChild(opt);
        });
        filterSelect.value = currentVal;
    }

    if (app1Select && app2Select) {
        const val1 = app1Select.value || appList[0] || "Instagram";
        const val2 = app2Select.value || appList[1] || "WhatsApp";

        app1Select.innerHTML = '';
        app2Select.innerHTML = '';

        appList.forEach(appName => {
            const opt1 = document.createElement("option");
            opt1.value = appName;
            opt1.textContent = appName;
            app1Select.appendChild(opt1);

            const opt2 = document.createElement("option");
            opt2.value = appName;
            opt2.textContent = appName;
            app2Select.appendChild(opt2);
        });

        app1Select.value = val1;
        app2Select.value = val2;
    }
}

// Filter Reviews Table (with Standalone Local Fallback)
async function applyReviewFilters() {
    const selectVal = document.getElementById("filter-app") ? document.getElementById("filter-app").value : "All";
    const searchVal = document.getElementById("filter-app-search") ? document.getElementById("filter-app-search").value.trim() : "";
    const app = (selectVal && selectVal !== "All") ? selectVal : searchVal;

    const type = document.getElementById("filter-type") ? document.getElementById("filter-type").value : "All";
    const os = document.getElementById("filter-os") ? document.getElementById("filter-os").value : "All";
    const sentiment = document.getElementById("filter-sentiment") ? document.getElementById("filter-sentiment").value : "All";

    try {
        const url = `/api/filter_reviews?app=${encodeURIComponent(app || 'All')}&os=${encodeURIComponent(os)}&sentiment=${encodeURIComponent(sentiment)}&type=${encodeURIComponent(type)}`;
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            if (json.status === "success") {
                renderReviewsTable(json.data.reviews);
                document.getElementById("filter-match-count").textContent = `Showing ${json.data.total_matches} feedback logs`;
                return;
            }
        }
    } catch (err) {
        // Fallthrough to static filtering
    }

    // STANDALONE STATIC FILTERING
    let filtered = FALLBACK_REVIEWS.filter(r => {
        const matchApp = !app || r.app_name.toLowerCase().includes(app.toLowerCase());
        const matchType = type === "All" || r.feedback_type === type;
        const matchOs = os === "All" || r.device_os === os;
        const matchSent = sentiment === "All" || r.user_sentiment === sentiment;
        return matchApp && matchType && matchOs && matchSent;
    });

    renderReviewsTable(filtered);

    document.getElementById("filter-match-count").textContent = `Showing ${filtered.length} feedback logs`;
}

// Render Reviews Table with Feedback Category Column & Highlighted Text
function renderReviewsTable(reviews) {
    const tbody = document.querySelector("#reviews-table tbody");
    if (!tbody) return;

    if (!reviews || reviews.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center">No feedback matched your filters. Try clearing app search!</td></tr>`;
        return;
    }

    tbody.innerHTML = reviews.map(r => {
        const sentimentClass = `sentiment-${r.user_sentiment.toLowerCase()}`;
        const typeBadge = `<span class="logo-badge" style="background:#f1f5f9; color:#334155; font-size:0.75rem;">${r.feedback_type || 'General'}</span>`;
        return `
            <tr>
                <td><strong>${r.app_name}</strong> <span class="small-text">(v${r.app_version})</span></td>
                <td>${r.device_os}</td>
                <td>${typeBadge}</td>
                <td>⭐ ${r.rating} / 5</td>
                <td><span class="sentiment-badge ${sentimentClass}">${r.user_sentiment}</span></td>
                <td><div class="review-feedback-text">${r.review_text}</div></td>
            </tr>
        `;
    }).join("");
}

// Side-by-Side App Comparison Engine
async function executeAppComparison() {
    const app1 = document.getElementById("compare-app1").value.trim() || "Instagram";
    const app2 = document.getElementById("compare-app2").value.trim() || "WhatsApp";
    const container = document.getElementById("compare-results");

    try {
        container.style.display = "block";
        container.innerHTML = `<p class="text-center">Comparing ${app1} vs ${app2}...</p>`;

        const response = await fetch(`/api/compare_apps?app1=${encodeURIComponent(app1)}&app2=${encodeURIComponent(app2)}`);
        if (response.ok) {
            const json = await response.json();
            if (json.status === "success") {
                renderComparisonUI(container, json.comparison.app1, json.comparison.app2, json.comparison.winner);
                return;
            }
        }
    } catch (err) {}

    // STANDALONE STATIC COMPARISON
    function calcStaticApp(name) {
        const matching = FALLBACK_REVIEWS.filter(r => r.app_name.toLowerCase() === name.toLowerCase());
        if (matching.length === 0) {
            return { app_name: name, total_reviews: 0, avg_rating: 0.0, positive_pct: 0.0, positive_count: 0, negative_count: 0, bug_count: 0 };
        }
        const tot = matching.length;
        const avg = (matching.reduce((acc, r) => acc + r.rating, 0) / tot).toFixed(2);
        const pos = matching.filter(r => r.user_sentiment === "Positive").length;
        const neg = matching.filter(r => r.user_sentiment === "Negative").length;
        const bugs = matching.filter(r => ["Bug/Crash", "Performance"].includes(r.feedback_type)).length;
        const posPct = ((pos / tot) * 100).toFixed(1);
        return { app_name: name, total_reviews: tot, avg_rating: avg, positive_pct: posPct, positive_count: pos, negative_count: neg, bug_count: bugs };
    }

    const a1 = calcStaticApp(app1);
    const a2 = calcStaticApp(app2);
    const winner = parseFloat(a1.avg_rating) >= parseFloat(a2.avg_rating) ? a1.app_name : a2.app_name;

    renderComparisonUI(container, a1, a2, winner);
}

function renderComparisonUI(container, a1, a2, winner) {
    container.innerHTML = `
        <div class="compare-box-grid">
            <div class="compare-box ${winner.toLowerCase() === a1.app_name.toLowerCase() ? 'winner-box' : ''}">
                <h4>${a1.app_name} ${winner.toLowerCase() === a1.app_name.toLowerCase() ? '🏆 (Winner)' : ''}</h4>
                <div class="compare-stat"><strong>Average Rating:</strong> ⭐ ${a1.avg_rating} / 5</div>
                <div class="compare-stat"><strong>Total Product Reviews:</strong> ${a1.total_reviews}</div>
                <div class="compare-stat"><strong>Positive Sentiment:</strong> ${a1.positive_pct}% (${a1.positive_count} pos / ${a1.negative_count} neg)</div>
                <div class="compare-stat"><strong>Bugs / Performance Reports:</strong> 🐛 ${a1.bug_count}</div>
            </div>
            <div class="compare-box ${winner.toLowerCase() === a2.app_name.toLowerCase() ? 'winner-box' : ''}">
                <h4>${a2.app_name} ${winner.toLowerCase() === a2.app_name.toLowerCase() ? '🏆 (Winner)' : ''}</h4>
                <div class="compare-stat"><strong>Average Rating:</strong> ⭐ ${a2.avg_rating} / 5</div>
                <div class="compare-stat"><strong>Total Product Reviews:</strong> ${a2.total_reviews}</div>
                <div class="compare-stat"><strong>Positive Sentiment:</strong> ${a2.positive_pct}% (${a2.positive_count} pos / ${a2.negative_count} neg)</div>
                <div class="compare-stat"><strong>Bugs / Performance Reports:</strong> 🐛 ${a2.bug_count}</div>
            </div>
        </div>
    `;
}

// Quick Suggestion Tag Handler
function fillQueryAndSwitch(queryText) {
    switchTab('chatbot');
    const input = document.getElementById("chat-input");
    if (input) {
        input.value = queryText;
        submitChatMessage(queryText);
    }
}

// Setup Chat Form Submission
function setupChatForm() {
    const form = document.getElementById("chat-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("chat-input");
        const queryText = input.value.trim();
        if (queryText) {
            submitChatMessage(queryText);
            input.value = "";
        }
    });
}

// Submit Chat Message (with Product Feedback Queries)
async function submitChatMessage(userQuery) {
    const chatContainer = document.getElementById("chat-messages");
    
    // Append User Message
    const userDiv = document.createElement("div");
    userDiv.className = "message user-message";
    userDiv.innerHTML = `
        <div class="message-sender">You</div>
        <div class="message-text">${escapeHtml(userQuery)}</div>
    `;
    chatContainer.appendChild(userDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Append Loading Indicator
    const botLoadingDiv = document.createElement("div");
    botLoadingDiv.className = "message bot-message";
    botLoadingDiv.id = "loading-message";
    botLoadingDiv.innerHTML = `
        <div class="message-sender">Product Intelligence Assistant</div>
        <div class="message-text">Analyzing product feedback & computing RAG vector similarity...</div>
    `;
    chatContainer.appendChild(botLoadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const apiKey = document.getElementById("gemini-key-input") ? document.getElementById("gemini-key-input").value.trim() : "";

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: userQuery, api_key: apiKey })
        });
        
        if (response.ok) {
            const json = await response.json();
            botLoadingDiv.remove();

            const botReplyDiv = document.createElement("div");
            botReplyDiv.className = "message bot-message";

            if (json.status === "success") {
                const res = json.result;
                let sourcesHtml = "";
                if (res.retrieved_context && res.retrieved_context.length > 0) {
                    const cleanCtxs = res.retrieved_context.map(c => {
                        if (typeof c === 'object' && c !== null) {
                            return `${c.content || ''} (Score: ${c.similarity_score || 'N/A'})`;
                        }
                        return String(c);
                    }).slice(0, 2);

                    sourcesHtml = `
                        <div class="rag-sources">
                            <span class="rag-badge">🔍 RAG Product Context (${res.llm_used || 'Vector Engine'}):</span>
                            ${cleanCtxs.map(c => `<div class="context-box">${escapeHtml(c)}</div>`).join("")}
                        </div>
                    `;
                }

                botReplyDiv.innerHTML = `
                    <div class="message-sender">Product Intelligence Assistant</div>
                    <div class="message-text">${formatMarkdownText(res.answer)}</div>
                    ${sourcesHtml}
                `;
            } else {
                botReplyDiv.innerHTML = `
                    <div class="message-sender">Product Intelligence Assistant</div>
                    <div class="message-text">Error: ${escapeHtml(json.message)}</div>
                `;
            }

            chatContainer.appendChild(botReplyDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            return;
        }
    } catch (err) {}

    botLoadingDiv.remove();
    const offlineReplyDiv = document.createElement("div");
    offlineReplyDiv.className = "message bot-message";

    // Standalone Math Evaluator
    const mathResult = evaluateClientMath(userQuery);
    if (mathResult) {
        offlineReplyDiv.innerHTML = `
            <div class="message-sender">Product Intelligence Assistant</div>
            <div class="message-text">${formatMarkdownText(mathResult)}</div>
        `;
    } else if (userQuery.toLowerCase().includes('ios') && userQuery.toLowerCase().includes('crash')) {
        offlineReplyDiv.innerHTML = `
            <div class="message-sender">Product Intelligence Assistant</div>
            <div class="message-text"><strong>iOS 17 Crash & Bug Summary</strong>:<br>- <strong>PayPulse</strong>: Camera permission prompt crash when scanning QR code (Missing NSCameraUsageDescription in Info.plist).<br>- <strong>Instagram</strong>: Camera story filter battery drain and overheating on iPhone 15 Pro.<br>- <strong>YouTube</strong>: Background playback audio pauses when screen turns off.</div>
        `;
    } else if (userQuery.toLowerCase().includes('feature request')) {
        offlineReplyDiv.innerHTML = `
            <div class="message-sender">Product Intelligence Assistant</div>
            <div class="message-text"><strong>Top User Feature Requests</strong>:<br>- <strong>Instagram</strong>: Native iPad layout support & landscape stories.<br>- <strong>WhatsApp</strong>: Multi-account login on iOS.<br>- <strong>Spotify</strong>: Lossless HiFi audio streaming toggle.</div>
        `;
    } else {
        offlineReplyDiv.innerHTML = `
            <div class="message-sender">Product Intelligence Assistant</div>
            <div class="message-text">Searching the web for answers... Will get back when I have an appropriate response.</div>
        `;
    }

    chatContainer.appendChild(offlineReplyDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Client Math Evaluator for Standalone Offline Mode
function evaluateClientMath(text) {
    let clean = text.replace(/what is|calculate|evaluate|solve|=/gi, '').trim();
    if (!/\d/.test(clean)) return null;

    try {
        if (/mean|average/i.test(clean)) {
            const nums = clean.match(/\d+(?:\.\d+)?/g).map(Number);
            if (nums.length > 0) {
                const sum = nums.reduce((a, b) => a + b, 0);
                const mean = (sum / nums.length).toFixed(4);
                return `**Mathematical Computation Result**:\n- **Input Numbers**: \`[${nums.join(', ')}]\`\n- **Mean / Average**: **${mean}**`;
            }
        }

        let expr = clean.replace(/\^/g, '**');
        if (/^[0-9\.\+\-\*\/\%\(\)\s]+$/.test(expr)) {
            let res = Function(`"use strict"; return (${expr})`)();
            if (typeof res === 'number' && !isNaN(res)) {
                return `**Mathematical Calculation Result**:\n- **Input Expression**: \`${clean}\`\n- **Result**: **${res}**`;
            }
        }
    } catch (e) {}

    return null;
}

// Simple Markdown Text Formatter
function formatMarkdownText(text) {
    if (!text) return "";
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");
    formatted = formatted.replace(/\n/g, "<br>");
    return formatted;
}

// Utility HTML Escaper
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// DATASET UPLOAD & MANAGEMENT FUNCTIONS
let selectedDatasetFile = null;

function setupDragAndDrop() {
    const dropZone = document.getElementById("drop-zone");
    if (!dropZone) return;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.add('highlight'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.remove('highlight'), false);
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
            selectedDatasetFile = files[0];
            updateFileSelectionLabel(selectedDatasetFile.name);
        }
    }, false);
}

function handleFileSelected(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        selectedDatasetFile = files[0];
        updateFileSelectionLabel(selectedDatasetFile.name);
    }
}

function updateFileSelectionLabel(filename) {
    const label = document.getElementById("file-chosen-name");
    if (label) {
        label.textContent = `Selected File: ${filename}`;
        label.classList.add("file-selected");
    }
}

async function uploadSelectedDataset() {
    const statusBanner = document.getElementById("upload-status-banner");
    const fileInput = document.getElementById("dataset-file-input");
    const typeSelect = document.getElementById("dataset-type-select");

    const file = selectedDatasetFile || (fileInput && fileInput.files[0]);

    if (!file) {
        showStatusBanner("⚠️ Please select or drop a CSV or TXT file to upload.", "warning");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("dataset_type", typeSelect ? typeSelect.value : "review_csv");

    showStatusBanner("⏳ Ingesting and vector indexing dataset... Please wait...", "info");

    try {
        const response = await fetch("/api/upload_dataset", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (response.ok && result.status === "success") {
            showStatusBanner(`✅ ${result.message}`, "success");
            selectedDatasetFile = null;
            if (fileInput) fileInput.value = "";
            updateFileSelectionLabel("No file selected");
            
            // Refresh Inventory & Metrics
            loadDatasetInventory();
            fetchAnalyticsSummary();
            applyReviewFilters();
        } else {
            showStatusBanner(`❌ Upload Failed: ${result.message || "Unknown error"}`, "error");
        }
    } catch (err) {
        console.error("Upload error:", err);
        showStatusBanner(`❌ Upload Failed: Server unreachable.`, "error");
    }
}

async function loadDatasetInventory() {
    const tbody = document.getElementById("dataset-inventory-tbody");
    if (!tbody) return;

    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Loading dataset inventory...</td></tr>`;

    try {
        const response = await fetch("/api/datasets");
        const json = await response.json();

        if (json.status === "success" && Array.isArray(json.datasets)) {
            if (json.datasets.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No dataset files uploaded yet.</td></tr>`;
                return;
            }

            let html = "";
            json.datasets.forEach(ds => {
                const deleteBtn = ds.is_deletable
                    ? `<button class="action-btn delete-btn" onclick="deleteDataset('${escapeHtml(ds.path.replace(/\\/g, '/'))}')">🗑️ Delete</button>`
                    : `<span class="system-badge">System Protected</span>`;

                const typeBadgeClass = ds.type.includes("CSV") ? "csv-badge" : "txt-badge";

                html += `
                    <tr>
                        <td><strong>${escapeHtml(ds.name)}</strong></td>
                        <td><span class="type-badge ${typeBadgeClass}">${escapeHtml(ds.type)}</span></td>
                        <td>${ds.size_kb} KB</td>
                        <td>${ds.records}</td>
                        <td>${deleteBtn}</td>
                    </tr>
                `;
            });
            tbody.innerHTML = html;
        } else {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:red;">Failed to load dataset inventory.</td></tr>`;
        }
    } catch (err) {
        console.error("Inventory error:", err);
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Standalone Mode - Default Playstore Datasets Active (57 CSVs).</td></tr>`;
    }
}

async function deleteDataset(filePath) {
    if (!confirm("Are you sure you want to delete this dataset file? This action will remove it from the active review analytics and vector store.")) {
        return;
    }

    try {
        const response = await fetch("/api/delete_dataset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_path: filePath })
        });

        const result = await response.json();
        if (response.ok && result.status === "success") {
            loadDatasetInventory();
            fetchAnalyticsSummary();
            applyReviewFilters();
        } else {
            alert(`Error: ${result.message || "Failed to delete file"}`);
        }
    } catch (err) {
        console.error("Delete dataset error:", err);
        alert("Failed to connect to server.");
    }
}

function showStatusBanner(msg, type) {
    const banner = document.getElementById("upload-status-banner");
    if (!banner) return;

    banner.textContent = msg;
    banner.className = `status-banner status-${type}`;
    banner.style.display = "block";
}

